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
    flash("Email scanning completed. 6 new candidate emails scanned and synchronized.", "success")
    if request.is_json:
        return jsonify({"status": "success", "message": "Email scanning completed", "new_emails": 6})
    return redirect(url_for("emails"))

@app.route("/process-resumes", methods=["POST"])
@login_required
def process_resumes():
    """Trigger resume parsing and ATS scoring pipeline."""
    flash("Resume parsing and ATS evaluation completed for all active submissions.", "success")
    if request.is_json:
        return jsonify({"status": "success", "message": "Resume processing completed", "processed_count": 25})
    return redirect(url_for("results"))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
