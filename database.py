import sqlite3
import json
import os

DB_FILE = os.path.join(os.path.dirname(__file__), "ats_database.db")

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS emails (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender TEXT NOT NULL,
        subject TEXT NOT NULL,
        date TEXT NOT NULL,
        body TEXT NOT NULL
    );
    """)
    
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
    
    cursor.execute("SELECT COUNT(*) FROM candidates")
    if cursor.fetchone()[0] == 0:
        emails = [
            ("ayan.gadpal@example.com", "Application for Python Developer Role - Ayan Naresh Gadpal", "2026-08-14 10:15 AM", "Dear HR Team,\n\nPlease find attached my resume for Python Developer. 3 years exp in Django, MySQL, REST API.\n\nBest,\nAyan Gadpal"),
            ("sahil.kumar@example.com", "Resume Submission: Python Developer - Sahil Kumar", "2026-08-14 09:42 AM", "Hello,\n\nAttached is my CV highlighting 2.5 yrs backend engineering in Django and PostgreSQL.\n\nThanks,\nSahil"),
            ("ashutosh.tiwari@example.com", "Job Application: Python Backend Engineer - Ashutosh Tiwari", "2026-08-14 08:30 AM", "Dear Hiring Manager,\n\nEnclosed is my resume for the Python Developer vacancy. 2 yrs experience with MySQL and REST APIs.\n\nRegards,\nAshutosh"),
        ]
        cursor.executemany("INSERT INTO emails (sender, subject, date, body) VALUES (?, ?, ?, ?)", emails)
        
        attachments = [
            (1, "Ayan_Gadpal_Python_Developer_Resume.pdf", "/uploads/Ayan_Gadpal_Resume.pdf", "application/pdf", 1),
            (2, "Sahil_Kumar_CV_2026.pdf", "/uploads/Sahil_Kumar_CV.pdf", "application/pdf", 1),
            (3, "Ashutosh_Tiwari_Resume.pdf", "/uploads/Ashutosh_Tiwari_Resume.pdf", "application/pdf", 1),
        ]
        cursor.executemany("INSERT INTO attachments (email_id, file_name, file_path, file_type, is_resume) VALUES (?, ?, ?, ?, ?)", attachments)
        
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

if __name__ == "__main__":
    init_db()
