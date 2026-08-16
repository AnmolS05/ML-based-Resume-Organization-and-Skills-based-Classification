<div align="center">
  <h1>AI-Based Resume Organization and Skills-Based Classification Dashboard</h1>
</div>

## 📌 Overview
An intelligent Applicant Tracking System (ATS) dashboard designed to automate resume screening, organize candidate profiles, and rank applicants based on their skills and job requirements. This project leverages a modern React frontend with a Flask backend to provide a seamless HR administration experience.

## ✨ Features
- **Email & Resume Ingestion:** Automatically scan emails for attachments and identify resumes.
- **AI-Powered Parsing:** Parse resumes and extract key skills, experience, and contact details.
- **Candidate Ranking:** Score and rank candidates based on a provided Job Analysis (role, experience, and custom descriptions).
- **Interactive Dashboard:** Modern UI to view key metrics, recent emails, top candidates, and detailed profile breakdowns.
- **Secure Access:** Built-in HR admin authentication.

## 🛠️ Tech Stack
- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Backend:** Python, Flask, SQLite
- **AI/ML:** Gemini API (via `@google/genai`)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Python 3.8+
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnmolS05/ML-based-Resume-Organization-and-Skills-based-Classification.git
   cd ML-based-Resume-Organization-and-Skills-based-Classification
   ```

2. **Frontend Setup:**
   ```bash
   # Install NPM dependencies
   npm install
   
   # Set up environment variables
   # Create a .env.local file and add your Gemini API key:
   # GEMINI_API_KEY=your_api_key_here
   ```

3. **Backend Setup:**
   ```bash
   # Install Python dependencies
   pip install flask
   
   # Note: SQLite database (ats_database.db) is already included or generated at runtime.
   ```

### Running the Application

**Start the Frontend:**
```bash
npm run dev
```
The React app will be accessible at `http://localhost:3000`.

**Start the Backend:**
```bash
python app.py
```
The Flask API runs on `http://localhost:5000`.

## 🔗 Repository
[GitHub Link](https://github.com/AnmolS05/ML-based-Resume-Organization-and-Skills-based-Classification)
