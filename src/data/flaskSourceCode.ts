export const flaskAppCode = `"""
Stage 9: AI Resume Screening & Ranking ATS Dashboard
Flask Application & Route Handlers (app.py)
"""

import os
import json
import sqlite3
from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
from functools import wraps

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "ats_super_secret_production_key_2026")
DATABASE = os.path.join(os.path.dirname(__file__), "ats_database.db")

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "user" not in session:
            flash("Please log in to access the ATS dashboard.", "warning")
            return redirect(url_for("login"))
        return f(*args, **kwargs)
    return decorated_function

# ==========================================
# 1. AUTH & PUBLIC ROUTES
# ==========================================

@app.route("/")
def home():
    """Public Home / Landing page."""
    return render_template("home.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    """User Login handler."""
    if request.method == "POST":
        username = request.form.get("username", "").strip()
        password = request.form.get("password", "").strip()
        
        # Simple session auth for demo/HR admin
        if username == "admin" and password == "admin123":
            session["user"] = username
            session["role"] = "HR Admin"
            flash("Welcome back, HR Admin!", "success")
            return redirect(url_for("dashboard"))
        else:
            flash("Invalid username or password. Use demo credentials (admin / admin123).", "danger")
            
    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    flash("You have been signed out successfully.", "info")
    return redirect(url_for("login"))

# ==========================================
# 2. DASHBOARD & EMAIL SCANNER ROUTES
# ==========================================

@app.route("/dashboard")
@login_required
def dashboard():
    """Overview dashboard with key metrics and recent activities."""
    conn = get_db_connection()
    
    total_emails = conn.execute("SELECT COUNT(*) as cnt FROM emails").fetchone()["cnt"]
    total_attachments = conn.execute("SELECT COUNT(*) as cnt FROM attachments").fetchone()["cnt"]
    total_resumes = conn.execute("SELECT COUNT(*) as cnt FROM attachments WHERE is_resume = 1").fetchone()["cnt"]
    total_candidates = conn.execute("SELECT COUNT(*) as cnt FROM candidates").fetchone()["cnt"]
    
    avg_score_row = conn.execute("SELECT AVG(ats_score) as avg_score FROM candidates").fetchone()
    avg_score = round(avg_score_row["avg_score"] or 0.0, 1)
    
    # Top 5 candidates
    top_candidates = conn.execute(
        "SELECT * FROM candidates ORDER BY ats_score DESC LIMIT 5"
    ).fetchall()
    
    # Recent emails
    recent_emails = conn.execute(
        "SELECT * FROM emails ORDER BY id DESC LIMIT 5"
    ).fetchall()
    
    conn.close()
    
    return render_template(
        "dashboard.html",
        total_emails=total_emails,
        total_resumes=total_resumes,
        total_candidates=total_candidates,
        avg_score=avg_score,
        top_candidates=top_candidates,
        recent_emails=recent_emails
    )

@app.route("/emails")
@login_required
def emails():
    """List scanned emails and their classified attachments."""
    conn = get_db_connection()
    email_rows = conn.execute("SELECT * FROM emails ORDER BY id DESC").fetchall()
    
    emails_data = []
    for email in email_rows:
        attachments = conn.execute(
            "SELECT * FROM attachments WHERE email_id = ?", (email["id"],)
        ).fetchall()
        emails_data.append({
            "email": email,
            "attachments": attachments
        })
        
    conn.close()
    return render_template("emails.html", emails_data=emails_data)

# ==========================================
# 3. JOB ANALYSIS & CANDIDATE RANKINGS
# ==========================================

@app.route("/job-analysis", methods=["GET", "POST"])
@login_required
def job_analysis():
    """Create Job Analysis page to define benchmark criteria."""
    if request.method == "POST":
        role = request.form.get("role", "Python Developer")
        experience = request.form.get("experience", "2 Years")
        description = request.form.get("description", "")
        
        # Save to session or DB for evaluation
        session["current_job"] = {
            "role": role,
            "experience": experience,
            "description": description
        }
        flash(f"Job analysis configured for {role}. Running ATS candidate matching...", "success")
        return redirect(url_for("results"))
        
    current_job = session.get("current_job", {
        "role": "Python Developer",
        "experience": "2 Years",
        "description": "We are seeking a Python Developer with 2+ years of experience in Django, REST API, SQL, MySQL, and Git."
    })
    return render_template("job_analysis.html", job=current_job)

@app.route("/results")
@app.route("/candidates")
@login_required
def results():
    """Ranked Candidate Results matching the active job description."""
    category_filter = request.args.get("category", "All")
    search_query = request.args.get("q", "").strip()
    
    conn = get_db_connection()
    query = "SELECT * FROM candidates WHERE 1=1"
    params = []
    
    if category_filter and category_filter != "All":
        query += " AND category = ?"
        params.append(category_filter)
        
    if search_query:
        query += " AND (name LIKE ? OR skills LIKE ? OR email LIKE ?)"
        term = f"%{search_query}%"
        params.extend([term, term, term])
        
    query += " ORDER BY rank ASC, ats_score DESC"
    candidates = conn.execute(query, params).fetchall()
    conn.close()
    
    job = session.get("current_job", {"role": "Python Developer", "experience": "2 Years"})
    return render_template("results.html", candidates=candidates, job=job, selected_category=category_filter)

@app.route("/candidate/<int:candidate_id>")
@login_required
def candidate_profile(candidate_id):
    """Detailed Candidate Explanation Page with parsed breakdown."""
    conn = get_db_connection()
    candidate = conn.execute("SELECT * FROM candidates WHERE id = ?", (candidate_id,)).fetchone()
    
    if not candidate:
        flash("Candidate record not found.", "danger")
        return redirect(url_for("results"))
        
    attachment = conn.execute("SELECT * FROM attachments WHERE id = ?", (candidate["attachment_id"],)).fetchone()
    conn.close()
    
    # Parse explanation JSON or fallback
    try:
        explanation_data = json.loads(candidate["explanation"])
    except Exception:
        explanation_data = {"summary": candidate["explanation"], "reasons": []}
        
    return render_template(
        "profile.html",
        candidate=candidate,
        attachment=attachment,
        explanation=explanation_data
    )

# ==========================================
# 4. TRIGGER APIS (SCAN & PROCESS RESUMES)
# ==========================================

@app.route("/scan-emails", methods=["POST"])
@login_required
def scan_emails():
    """Trigger email ingestion pipeline."""
    # Simulation: In production, invokes IMAP scanning module
    flash("Email scanning completed. 6 new candidate emails scanned and synchronized.", "success")
    if request.is_json:
        return jsonify({"status": "success", "message": "Email scanning completed", "new_emails": 6})
    return redirect(url_for("emails"))

@app.route("/process-resumes", methods=["POST"])
@login_required
def process_resumes():
    """Trigger resume parsing and ATS scoring pipeline."""
    # Simulation: In production, runs PDF OCR, NLP parsing & scoring
    flash("Resume parsing and ATS evaluation completed for all active submissions.", "success")
    if request.is_json:
        return jsonify({"status": "success", "message": "Resume processing completed", "processed_count": 25})
    return redirect(url_for("results"))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
`;

export const databasePyCode = `"""
SQLite Database Schema & Seeder (database.py)
Initializes 'ats_database.db' with emails, attachments, and candidates tables.
"""

import sqlite3
import json
import os

DB_FILE = os.path.join(os.path.dirname(__file__), "ats_database.db")

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # 1. Emails Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS emails (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender TEXT NOT NULL,
        subject TEXT NOT NULL,
        date TEXT NOT NULL,
        body TEXT NOT NULL
    );
    """)
    
    # 2. Attachments Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS attachments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email_id INTEGER NOT NULL,
        file_name TEXT NOT NULL,
        file_path TEXT NOT NULL,
        file_type TEXT NOT NULL,
        is_resume BOOLEAN NOT NULL DEFAULT 0,
        FOREIGN KEY (email_id) REFERENCES emails(id)
    );
    """)
    
    # 3. Candidates Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS candidates (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        attachment_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        skills TEXT NOT NULL,
        experience TEXT,
        education TEXT,
        projects TEXT,
        certifications TEXT,
        category TEXT NOT NULL,
        skill_match_percentage INTEGER NOT NULL,
        ats_score REAL NOT NULL,
        rank INTEGER NOT NULL,
        explanation TEXT NOT NULL,
        FOREIGN KEY (attachment_id) REFERENCES attachments(id)
    );
    """)
    
    # Seed Initial Data if empty
    cursor.execute("SELECT COUNT(*) FROM candidates")
    if cursor.fetchone()[0] == 0:
        print("Seeding initial ATS database records...")
        
        # Insert Emails
        emails = [
            ("ayan.gadpal@example.com", "Application for Python Developer Role - Ayan Naresh Gadpal", "2026-08-14 10:15 AM", "Dear HR Team,\\n\\nPlease find attached my resume for Python Developer. 3 years exp in Django, MySQL, REST API.\\n\\nBest,\\nAyan Gadpal"),
            ("sahil.kumar@example.com", "Resume Submission: Python Developer - Sahil Kumar", "2026-08-14 09:42 AM", "Hello,\\n\\nAttached is my CV highlighting 2.5 yrs backend engineering in Django and PostgreSQL.\\n\\nThanks,\\nSahil"),
            ("ashutosh.tiwari@example.com", "Job Application: Python Backend Engineer - Ashutosh Tiwari", "2026-08-14 08:30 AM", "Dear Hiring Manager,\\n\\nEnclosed is my resume for the Python Developer vacancy. 2 yrs experience with MySQL and REST APIs.\\n\\nRegards,\\nAshutosh"),
        ]
        cursor.executemany("INSERT INTO emails (sender, subject, date, body) VALUES (?, ?, ?, ?)", emails)
        
        # Insert Attachments
        attachments = [
            (1, "Ayan_Gadpal_Python_Developer_Resume.pdf", "/uploads/Ayan_Gadpal_Resume.pdf", "application/pdf", 1),
            (2, "Sahil_Kumar_CV_2026.pdf", "/uploads/Sahil_Kumar_CV.pdf", "application/pdf", 1),
            (3, "Ashutosh_Tiwari_Resume.pdf", "/uploads/Ashutosh_Tiwari_Resume.pdf", "application/pdf", 1),
        ]
        cursor.executemany("INSERT INTO attachments (email_id, file_name, file_path, file_type, is_resume) VALUES (?, ?, ?, ?, ?)", attachments)
        
        # Insert Candidates with JSON explanations
        candidates = [
            (
                1,
                "Ayan Naresh Gadpal",
                "ayan.gadpal@example.com",
                "+91 98230 45678",
                "Python, Django, REST API, SQL, MySQL, Git, FastAPI, Docker",
                "3.0 Years",
                "B.Tech in Computer Science, PICT Pune (2023)",
                "Distributed Django REST API, Real-time telemetry pipeline",
                "Certified Python Professional (PCAP), Docker Certified",
                "Web Development",
                100,
                86.66,
                1,
                json.dumps({
                    "summary": "Strongest overall match with 100% required skills match, 3.0 years verified tenure exceeding 2.0-year benchmark, and accredited CS degree.",
                    "reasons": [
                        {"type": "strength", "text": "100% match on all 6 mandatory skills: Python, Django, REST API, SQL, MySQL, Git."},
                        {"type": "strength", "text": "3.0 years commercial backend experience exceeds 2.0 years requirement."},
                        {"type": "strength", "text": "Relevant Bachelor of Technology in Computer Science degree."},
                        {"type": "strength", "text": "Bonus competencies in FastAPI, Docker, and Celery."}
                    ]
                })
            ),
            (
                2,
                "Sahil Kumar",
                "sahil.kumar@example.com",
                "+91 98111 22334",
                "Python, Django, REST API, SQL, Git, Flask, PostgreSQL",
                "2.5 Years",
                "B.E. in Information Technology, Mumbai University (2023)",
                "Inventory Management REST Service with Django & PostgreSQL",
                "Python Data Structures & Backend APIs",
                "Web Development",
                83,
                78.50,
                2,
                json.dumps({
                    "summary": "Solid technical background with 2.5 years experience and 5 of 6 required skills matched.",
                    "reasons": [
                        {"type": "strength", "text": "Matches 5 of 6 required core skills (Python, Django, REST API, SQL, Git)."},
                        {"type": "strength", "text": "2.5 years experience exceeds 2.0 years requirement."},
                        {"type": "weakness", "text": "Missing explicit MySQL keyword (has solid PostgreSQL expertise)."}
                    ]
                })
            ),
            (
                3,
                "Ashutosh Tiwari",
                "ashutosh.tiwari@example.com",
                "+91 97654 32109",
                "Python, Django, REST API, SQL, MySQL, HTML/CSS",
                "2.0 Years",
                "B.Sc. in Computer Science, Delhi University (2024)",
                "Customer Feedback Portal with Django & MySQL",
                "Django Web Framework Specialist",
                "Web Development",
                83,
                75.00,
                3,
                json.dumps({
                    "summary": "Meets 2.0 years experience threshold with strong Django and MySQL capabilities.",
                    "reasons": [
                        {"type": "strength", "text": "Matches Python, Django, REST API, SQL, and MySQL."},
                        {"type": "strength", "text": "Meets exact 2.0 years experience requirement."},
                        {"type": "weakness", "text": "Git version control details omitted from parsed resume highlights."}
                    ]
                })
            )
        ]
        cursor.executemany("""
        INSERT INTO candidates (
            attachment_id, name, email, phone, skills, experience, education, projects, certifications,
            category, skill_match_percentage, ats_score, rank, explanation
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, candidates)
        
    conn.commit()
    conn.close()
    print("Database initialization complete.")

if __name__ == "__main__":
    init_db()
`;

export const baseHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}HR Email Scanner & ATS{% endblock %}</title>
    <!-- Bootstrap 5 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">
    <!-- Custom Theme Styles -->
    <link href="{{ url_for('static', filename='style.css') }}" rel="stylesheet">
</head>
<body class="bg-canvas">
    <div class="d-flex" id="wrapper">
        
        <!-- Persistent Dark Navy Sidebar -->
        <div class="sidebar bg-navy text-white" id="sidebar-wrapper">
            <div class="sidebar-heading px-4 py-3 border-bottom border-secondary-subtle d-flex align-items-center gap-2">
                <div class="brand-icon bg-primary text-white rounded-3 p-2">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                    <h6 class="mb-0 fw-bold">HR ATS Scanner</h6>
                    <small class="text-info text-uppercase" style="font-size: 10px;">Stage 9 System</small>
                </div>
            </div>
            
            <div class="list-group list-group-flush my-3 px-2">
                <a href="{{ url_for('dashboard') }}" class="list-group-item list-group-item-action {% if request.endpoint == 'dashboard' %}active{% endif %} rounded-3 mb-1">
                    <i class="fa-solid fa-gauge me-2"></i> Dashboard
                </a>
                <a href="{{ url_for('emails') }}" class="list-group-item list-group-item-action {% if request.endpoint == 'emails' %}active{% endif %} rounded-3 mb-1">
                    <i class="fa-solid fa-inbox me-2"></i> Email Scanner
                </a>
                <a href="{{ url_for('job_analysis') }}" class="list-group-item list-group-item-action {% if request.endpoint == 'job_analysis' %}active{% endif %} rounded-3 mb-1">
                    <i class="fa-solid fa-briefcase me-2"></i> Jobs (Active)
                </a>
                <a href="{{ url_for('results') }}" class="list-group-item list-group-item-action {% if request.endpoint == 'results' %}active{% endif %} rounded-3 mb-1">
                    <i class="fa-solid fa-ranking-star me-2"></i> Candidate Rankings
                </a>
                <a href="{{ url_for('logout') }}" class="list-group-item list-group-item-action text-danger rounded-3 mt-4">
                    <i class="fa-solid fa-right-from-bracket me-2"></i> Logout
                </a>
            </div>
            
            <!-- User Footer Profile Card -->
            <div class="mt-auto p-3 border-top border-secondary-subtle">
                <div class="d-flex align-items-center gap-2 bg-dark-subtle p-2 rounded-3">
                    <div class="avatar-circle bg-primary text-white fw-bold">HA</div>
                    <div class="overflow-hidden">
                        <div class="fw-bold text-white small text-truncate">HR Admin</div>
                        <div class="text-muted small text-truncate" style="font-size: 11px;">admin@company.com</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page Content Wrapper -->
        <div id="page-content-wrapper" class="w-100">
            <!-- Top Navbar for Mobile Toggle & Flash Alerts -->
            <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-2">
                <div class="container-fluid px-0">
                    <button class="btn btn-outline-primary d-lg-none" id="sidebarToggle">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div class="ms-auto d-flex align-items-center gap-3">
                        <span class="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill">
                            <i class="fa-solid fa-circle-check me-1"></i> ATS Model Online
                        </span>
                    </div>
                </div>
            </nav>

            <!-- Main Body Container -->
            <main class="container-fluid px-4 py-4">
                <!-- Flash Messages -->
                {% with messages = get_flashed_messages(with_categories=true) %}
                    {% if messages %}
                        {% for category, message in messages %}
                            <div class="alert alert-{{ category }} alert-dismissible fade show rounded-3 shadow-sm mb-4" role="alert">
                                {{ message }}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        {% endfor %}
                    {% endif %}
                {% endwith %}

                {% block content %}{% endblock %}
            </main>
        </div>
    </div>

    <!-- Bootstrap 5 Bundle JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Sidebar Toggle for Mobile
        const sidebarToggle = document.getElementById('sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                document.getElementById('wrapper').classList.toggle('toggled');
            });
        }
    </script>
</body>
</html>
`;

export const dashboardHtmlCode = `{% extends "base.html" %}
{% block title %}Dashboard - HR Email Scanner & ATS{% endblock %}

{% block content %}
<div class="d-flex justify-content-between align-items-center mb-4">
    <div>
        <h2 class="fw-bold text-navy mb-1">Dashboard Overview</h2>
        <p class="text-muted small">Real-time email scanning, resume parser metrics, and candidate ranking.</p>
    </div>
    <div class="d-flex gap-2">
        <form action="{{ url_for('scan_emails') }}" method="POST">
            <button type="submit" class="btn btn-primary fw-bold px-3 py-2 rounded-3">
                <i class="fa-solid fa-rotate me-1"></i> Scan Emails
            </button>
        </form>
        <form action="{{ url_for('process_resumes') }}" method="POST">
            <button type="submit" class="btn btn-outline-secondary fw-bold px-3 py-2 rounded-3 bg-white">
                <i class="fa-solid fa-wand-magic-sparkles me-1 text-primary"></i> Process Resumes
            </button>
        </form>
    </div>
</div>

<!-- 4 Key Metric Cards -->
<div class="row g-4 mb-4">
    <div class="col-md-3">
        <div class="card card-custom border-0 p-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="icon-box bg-blue-subtle text-primary rounded-3 p-3">
                    <i class="fa-solid fa-envelope fs-4"></i>
                </div>
                <span class="badge bg-primary-subtle text-primary">Live</span>
            </div>
            <h3 class="fw-bold text-navy mt-3 mb-0">{{ total_emails }}</h3>
            <small class="text-muted">Total Emails Scanned</small>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card card-custom border-0 p-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="icon-box bg-success-subtle text-success rounded-3 p-3">
                    <i class="fa-solid fa-file-lines fs-4"></i>
                </div>
                <span class="badge bg-success-subtle text-success">Parsed</span>
            </div>
            <h3 class="fw-bold text-navy mt-3 mb-0">{{ total_resumes }}</h3>
            <small class="text-muted">Total Resumes Validated</small>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card card-custom border-0 p-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="icon-box bg-indigo-subtle text-indigo rounded-3 p-3">
                    <i class="fa-solid fa-chart-line fs-4"></i>
                </div>
                <span class="badge bg-info-subtle text-info">Benchmark</span>
            </div>
            <h3 class="fw-bold text-navy mt-3 mb-0">{{ avg_score }}%</h3>
            <small class="text-muted">Average ATS Score</small>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card card-custom border-0 p-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="icon-box bg-warning-subtle text-warning rounded-3 p-3">
                    <i class="fa-solid fa-trophy fs-4"></i>
                </div>
                <span class="badge bg-warning-subtle text-warning">Top Fits</span>
            </div>
            <h3 class="fw-bold text-navy mt-3 mb-0">{{ total_candidates }}</h3>
            <small class="text-muted">Ranked Candidates</small>
        </div>
    </div>
</div>

<!-- Top Candidates Table -->
<div class="card card-custom border-0 p-4 mb-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="fw-bold text-navy mb-0">Top Ranked Candidates</h5>
        <a href="{{ url_for('results') }}" class="btn btn-sm btn-link text-primary fw-bold text-decoration-none">
            View All <i class="fa-solid fa-arrow-right"></i>
        </a>
    </div>
    <div class="table-responsive">
        <table class="table align-middle">
            <thead class="text-muted small text-uppercase">
                <tr>
                    <th>Rank</th>
                    <th>Candidate</th>
                    <th>Category</th>
                    <th>Skill Match</th>
                    <th>Overall ATS</th>
                    <th class="text-end">Action</th>
                </tr>
            </thead>
            <tbody>
                {% for c in top_candidates %}
                <tr>
                    <td>
                        {% if c.rank == 1 %}
                            <span class="badge bg-warning text-dark fs-6">🥇 #1</span>
                        {% elif c.rank == 2 %}
                            <span class="badge bg-secondary fs-6">🥈 #2</span>
                        {% elif c.rank == 3 %}
                            <span class="badge bg-danger-subtle text-danger fs-6">🥉 #3</span>
                        {% else %}
                            <span class="badge bg-light text-dark">#{{ c.rank }}</span>
                        {% endif %}
                    </td>
                    <td>
                        <div class="fw-bold text-navy">{{ c.name }}</div>
                        <small class="text-muted">{{ c.email }}</small>
                    </td>
                    <td><span class="badge bg-light text-dark border">{{ c.category }}</span></td>
                    <td>
                        <div class="fw-bold text-success">{{ c.skill_match_percentage }}%</div>
                    </td>
                    <td>
                        <div class="fw-bold text-primary fs-5">{{ "%.2f"|format(c.ats_score) }}%</div>
                    </td>
                    <td class="text-end">
                        <a href="{{ url_for('candidate_profile', candidate_id=c.id) }}" class="btn btn-sm btn-primary rounded-3 px-3">
                            View Profile
                        </a>
                    </td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
</div>
{% endblock %}
`;

export const jobAnalysisHtmlCode = `{% extends "base.html" %}
{% block title %}Create Job Analysis - HR ATS{% endblock %}

{% block content %}
<div class="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom">
    <div>
        <h2 class="fw-bold text-navy mb-1">Create Job Analysis</h2>
        <p class="text-muted small">Configure matching criteria and mandatory skills for ATS scoring.</p>
    </div>
    <div class="d-flex align-items-center gap-2 bg-white px-3 py-2 rounded-3 border shadow-sm">
        <div class="avatar-circle bg-primary text-white fw-bold">HA</div>
        <div>
            <div class="fw-bold small">HR Admin</div>
            <small class="text-success fw-semibold"><i class="fa-solid fa-circle fa-2xs"></i> Active</small>
        </div>
    </div>
</div>

<div class="card card-custom border-0 p-4 p-md-5">
    <form action="{{ url_for('job_analysis') }}" method="POST">
        <div class="row g-4">
            <!-- Left Column: Inputs -->
            <div class="col-lg-5">
                <div class="mb-3">
                    <label class="form-label fw-bold text-uppercase small text-muted">Job Role *</label>
                    <input type="text" name="role" class="form-control form-control-lg bg-light" value="{{ job.role }}" required>
                </div>
                
                <div class="mb-3">
                    <label class="form-label fw-bold text-uppercase small text-muted">Required Experience *</label>
                    <select name="experience" class="form-select form-select-lg bg-light">
                        <option value="1 Year" {% if job.experience == '1 Year' %}selected{% endif %}>1 Year</option>
                        <option value="2 Years" {% if job.experience == '2 Years' %}selected{% endif %}>2 Years</option>
                        <option value="3 Years" {% if job.experience == '3 Years' %}selected{% endif %}>3 Years</option>
                        <option value="5+ Years" {% if job.experience == '5+ Years' %}selected{% endif %}>5+ Years</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label fw-bold text-uppercase small text-muted">Mandatory Skills (60% Weight)</label>
                    <div class="d-flex flex-wrap gap-2 p-3 bg-light rounded-3 border">
                        <span class="badge bg-white text-primary border p-2"><i class="fa-solid fa-check text-success me-1"></i> Python</span>
                        <span class="badge bg-white text-primary border p-2"><i class="fa-solid fa-check text-success me-1"></i> Django</span>
                        <span class="badge bg-white text-primary border p-2"><i class="fa-solid fa-check text-success me-1"></i> REST API</span>
                        <span class="badge bg-white text-primary border p-2"><i class="fa-solid fa-check text-success me-1"></i> SQL</span>
                        <span class="badge bg-white text-primary border p-2"><i class="fa-solid fa-check text-success me-1"></i> MySQL</span>
                        <span class="badge bg-white text-primary border p-2"><i class="fa-solid fa-check text-success me-1"></i> Git</span>
                    </div>
                </div>
            </div>

            <!-- Right Column: Description -->
            <div class="col-lg-7">
                <label class="form-label fw-bold text-uppercase small text-muted">Job Description *</label>
                <textarea name="description" rows="12" class="form-control bg-light font-monospace" required>{{ job.description }}</textarea>
            </div>
        </div>

        <!-- Light-blue Info Alert Strip -->
        <div class="alert alert-info border-info-subtle d-flex align-items-center gap-3 mt-4 mb-4 rounded-3">
            <i class="fa-solid fa-circle-info fs-5 text-primary"></i>
            <div>Our system will analyze all candidate resumes and rank them based on skills, experience, projects and education match.</div>
        </div>

        <!-- Action Button Right Aligned -->
        <div class="text-end">
            <button type="submit" class="btn btn-primary btn-lg fw-bold px-5 py-3 rounded-3 shadow">
                <i class="fa-solid fa-rocket me-2"></i> Analyze Candidates
            </button>
        </div>
    </form>
</div>
{% endblock %}
`;

export const resultsHtmlCode = `{% extends "base.html" %}
{% block title %}Matching Results - HR ATS{% endblock %}

{% block content %}
<div class="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom">
    <div>
        <h2 class="fw-bold text-navy mb-1">Matching Results – {{ job.role }}</h2>
        <p class="text-muted small">25 candidates analyzed based on weighted ATS scoring criteria.</p>
    </div>
    <div class="d-flex gap-2">
        <a href="#" class="btn btn-outline-primary fw-bold px-3 py-2 rounded-3">
            <i class="fa-solid fa-download me-1"></i> Download Report
        </a>
    </div>
</div>

<!-- Candidate List -->
<div class="d-flex flex-column gap-3 mb-4">
    {% for c in candidates %}
    <div class="card card-custom border-0 p-4 {% if c.rank == 1 %}border-start border-warning border-4{% endif %}">
        <div class="row align-items-center g-3">
            
            <!-- Rank & Candidate Avatar/Name (4 cols) -->
            <div class="col-lg-4 d-flex align-items-center gap-3">
                <div>
                    {% if c.rank == 1 %}
                        <div class="medal-box bg-warning-subtle text-warning fw-bold border border-warning rounded-3 p-2 text-center" style="width: 50px;">🥇 #1</div>
                    {% elif c.rank == 2 %}
                        <div class="medal-box bg-secondary-subtle text-secondary fw-bold border rounded-3 p-2 text-center" style="width: 50px;">🥈 #2</div>
                    {% elif c.rank == 3 %}
                        <div class="medal-box bg-danger-subtle text-danger fw-bold border rounded-3 p-2 text-center" style="width: 50px;">🥉 #3</div>
                    {% else %}
                        <div class="medal-box bg-light text-dark fw-bold border rounded-3 p-2 text-center" style="width: 50px;">#{{ c.rank }}</div>
                    {% endif %}
                </div>
                <div>
                    <h5 class="fw-bold text-navy mb-0">{{ c.name }}</h5>
                    <div class="small text-muted">{{ c.email }}</div>
                    <span class="badge bg-light text-dark border mt-1">{{ c.experience }} Exp</span>
                </div>
            </div>

            <!-- Horizontal Match Progress Bars (5 cols) -->
            <div class="col-lg-5">
                <div class="mb-2">
                    <div class="d-flex justify-content-between small fw-bold">
                        <span>Skill Match (60% weight)</span>
                        <span class="text-success">{{ c.skill_match_percentage }}%</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar bg-success" style="width: {{ c.skill_match_percentage }}%;"></div>
                    </div>
                </div>

                <div class="mb-2">
                    <div class="d-flex justify-content-between small fw-bold">
                        <span>Experience (20% weight)</span>
                        <span class="text-primary">{{ c.experience }}</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar bg-primary" style="width: 100%;"></div>
                    </div>
                </div>
            </div>

            <!-- Overall Score & Action (3 cols) -->
            <div class="col-lg-3 text-lg-end d-flex d-lg-block justify-content-between align-items-center">
                <div>
                    <div class="fs-3 fw-bold text-navy">{{ "%.2f"|format(c.ats_score) }}%</div>
                    <span class="badge bg-success-subtle text-success small">Strong Match</span>
                </div>
                <div class="mt-2">
                    <a href="{{ url_for('candidate_profile', candidate_id=c.id) }}" class="btn btn-primary btn-sm rounded-3 px-3">
                        View Details <i class="fa-solid fa-chevron-right ms-1"></i>
                    </a>
                </div>
            </div>

        </div>
    </div>
    {% endfor %}
</div>

<p class="text-center text-muted small mt-4">
    Scores are calculated based on: Skills (60%), Experience (20%), Projects (10%), Education (10%)
</p>
{% endblock %}
`;

export const profileHtmlCode = `{% extends "base.html" %}
{% block title %}{{ candidate.name }} - Profile Explanation{% endblock %}

{% block content %}
<!-- Back Breadcrumb Link -->
<div class="mb-4">
    <a href="{{ url_for('results') }}" class="btn btn-outline-primary btn-sm rounded-3">
        <i class="fa-solid fa-arrow-left me-1"></i> Back to Results
    </a>
</div>

<!-- Profile Header Card -->
<div class="card card-custom border-0 p-4 p-md-5 mb-4">
    <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4">
        <div class="d-flex align-items-center gap-3">
            <div class="medal-box bg-warning-subtle text-warning fw-bold border border-warning rounded-3 p-3 text-center fs-3">
                🥇 #{{ candidate.rank }}
            </div>
            <div>
                <h2 class="fw-bold text-navy mb-0">{{ candidate.name }}</h2>
                <div class="fw-bold text-primary">{{ candidate.experience }} Experience</div>
                <div class="text-muted small mt-1">
                    <i class="fa-solid fa-envelope me-1"></i> {{ candidate.email }} • 
                    <i class="fa-solid fa-phone me-1"></i> {{ candidate.phone }}
                </div>
            </div>
        </div>
        <div class="text-lg-end">
            <div class="fs-1 fw-bold text-navy">{{ "%.2f"|format(candidate.ats_score) }}%</div>
            <span class="badge bg-success-subtle text-success px-3 py-2 rounded-pill fs-6">Strong Match</span>
            <div class="mt-3">
                <button class="btn btn-outline-primary btn-sm rounded-3 px-3"><i class="fa-solid fa-file-pdf me-1"></i> View Resume</button>
                <button class="btn btn-light btn-sm rounded-3 px-3 border"><i class="fa-solid fa-download me-1"></i> Download</button>
            </div>
        </div>
    </div>
</div>

<!-- Why Ranked #Rank Banner Card -->
<div class="alert alert-success border-success-subtle p-4 rounded-3 mb-4">
    <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-wand-magic-sparkles me-2"></i> Why is this candidate ranked #{{ candidate.rank }}?</h5>
    <p class="mb-0 text-dark">{{ explanation.summary }}</p>
</div>

<!-- Grid Details (Cards) -->
<div class="row g-4 mb-4">
    <!-- Matched Skills -->
    <div class="col-md-6">
        <div class="card card-custom border-0 p-4 h-100">
            <h5 class="fw-bold text-navy mb-3"><i class="fa-solid fa-check-circle text-success me-2"></i> Matched Skills</h5>
            <div class="d-flex flex-wrap gap-2">
                {% for skill in candidate.skills.split(',') %}
                <span class="badge bg-success-subtle text-success border border-success-subtle p-2">
                    <i class="fa-solid fa-check me-1"></i> {{ skill.strip() }}
                </span>
                {% endfor %}
            </div>
        </div>
    </div>

    <!-- Experience Match -->
    <div class="col-md-6">
        <div class="card card-custom border-0 p-4 h-100">
            <h5 class="fw-bold text-navy mb-3"><i class="fa-solid fa-briefcase text-primary me-2"></i> Experience Match</h5>
            <div class="p-3 bg-light rounded-3 border">
                <div class="fw-bold fs-5 text-navy">{{ candidate.experience }} vs Required 2 Years</div>
                <span class="badge bg-success text-white mt-2"><i class="fa-solid fa-check me-1"></i> Exceeds requirement</span>
            </div>
        </div>
    </div>

    <!-- Education Match -->
    <div class="col-md-6">
        <div class="card card-custom border-0 p-4 h-100">
            <h5 class="fw-bold text-navy mb-3"><i class="fa-solid fa-graduation-cap text-purple me-2"></i> Education Match</h5>
            <div class="p-3 bg-light rounded-3 border">
                <div class="fw-bold text-navy">{{ candidate.education }}</div>
                <span class="badge bg-info text-white mt-2">Perfect Match</span>
            </div>
        </div>
    </div>

    <!-- Projects Summary -->
    <div class="col-md-6">
        <div class="card card-custom border-0 p-4 h-100">
            <h5 class="fw-bold text-navy mb-3"><i class="fa-solid fa-layer-group text-warning me-2"></i> Projects Summary</h5>
            <div class="p-3 bg-light rounded-3 border">
                <p class="small text-muted mb-0">{{ candidate.projects }}</p>
            </div>
        </div>
    </div>
</div>
{% endblock %}
`;

export const emailsHtmlCode = `{% extends "base.html" %}
{% block title %}Email Scanner & Attachments - HR ATS{% endblock %}

{% block content %}
<div class="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom">
    <div>
        <h2 class="fw-bold text-navy mb-1">Email Scanner & Attachments</h2>
        <p class="text-muted small">Scanned email list with classified resume attachment parsing.</p>
    </div>
    <form action="{{ url_for('scan_emails') }}" method="POST">
        <button type="submit" class="btn btn-primary fw-bold px-3 py-2 rounded-3">
            <i class="fa-solid fa-rotate me-1"></i> Scan Inbox Now
        </button>
    </form>
</div>

<!-- Emails Accordion -->
<div class="accordion" id="emailsAccordion">
    {% for item in emails_data %}
    {% set email = item.email %}
    {% set attachments = item.attachments %}
    <div class="accordion-item card-custom border-0 mb-3 overflow-hidden">
        <h2 class="accordion-header" id="heading{{ email.id }}">
            <button class="accordion-button {% if not loop.first %}collapsed{% endif %} bg-white py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ email.id }}">
                <div class="d-flex align-items-center gap-3 w-100">
                    <i class="fa-solid fa-envelope text-primary fs-5"></i>
                    <div>
                        <div class="fw-bold text-navy">{{ email.subject }}</div>
                        <small class="text-muted">{{ email.sender }} • {{ email.date }}</small>
                    </div>
                </div>
            </button>
        </h2>
        <div id="collapse{{ email.id }}" class="accordion-collapse collapse {% if loop.first %}show{% endif %}" data-bs-parent="#emailsAccordion">
            <div class="accordion-body bg-light p-4">
                <div class="bg-white p-3 rounded-3 border mb-3">
                    <h6 class="fw-bold text-muted text-uppercase small">Message Body:</h6>
                    <p class="mb-0 small font-monospace">{{ email.body }}</p>
                </div>

                <h6 class="fw-bold text-navy mb-2">Linked Attachments:</h6>
                <div class="row g-2">
                    {% for att in attachments %}
                    <div class="col-md-6">
                        <div class="d-flex justify-content-between align-items-center p-3 bg-white rounded-3 border">
                            <div class="d-flex align-items-center gap-2">
                                <i class="fa-solid fa-file-pdf text-danger fs-5"></i>
                                <div>
                                    <div class="fw-bold small">{{ att.file_name }}</div>
                                    {% if att.is_resume %}
                                        <span class="badge bg-success-subtle text-success">Resume</span>
                                    {% else %}
                                        <span class="badge bg-secondary-subtle text-secondary">Non-Resume</span>
                                    {% endif %}
                                </div>
                            </div>
                            <button class="btn btn-sm btn-outline-primary rounded-3"><i class="fa-solid fa-eye"></i></button>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
    {% endfor %}
</div>
{% endblock %}
`;

export const styleCssCode = `/* Stage 9 ATS Custom Theme Stylesheet (static/style.css) */

:root {
    --canvas-bg: #f4f6f9;
    --navy-sidebar: #0a192f;
    --primary-blue: #1e50ff;
    --success-green: #22c55e;
}

body.bg-canvas {
    background-color: var(--canvas-bg);
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}

.text-navy {
    color: #0a192f !important;
}

.bg-navy {
    background-color: #0a192f !important;
}

.card-custom {
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.sidebar {
    min-height: 100vh;
    width: 260px;
    transition: all 0.3s;
}

.sidebar .list-group-item {
    background-color: transparent;
    color: #94a3b8;
    border: none;
    font-weight: 500;
}

.sidebar .list-group-item.active {
    background-color: var(--primary-blue);
    color: #ffffff;
    font-weight: 600;
}

.sidebar .list-group-item:hover:not(.active) {
    background-color: rgba(255, 255, 255, 0.06);
    color: #ffffff;
}

.avatar-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
`;
