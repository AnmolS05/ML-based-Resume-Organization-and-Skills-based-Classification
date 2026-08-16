import { Candidate, EmailItem, AttachmentItem, JobRequirement, RecentActivity } from '../types';

export const initialJobRequirement: JobRequirement = {
  id: 'job-101',
  role: 'Python Developer',
  requiredExperience: '2 Years',
  requiredExperienceYears: 2.0,
  description: `We are looking for a skilled Python Developer with at least 2 years of hands-on experience in building robust backend services, scalable REST APIs, and database-driven web applications.

Key Responsibilities:
- Design and develop performant web applications using Python and Django/FastAPI.
- Build clean, well-documented RESTful APIs and integrate with third-party services.
- Optimize relational database queries using SQL, MySQL, and PostgreSQL.
- Maintain source code with Git and participate in CI/CD pipeline deployments.
- Collaborate with frontend engineers and write comprehensive unit tests.

Required Qualifications:
- Proficiency in Python, Django, and REST APIs.
- Solid understanding of SQL, MySQL database design, and query optimization.
- Experience with Git version control and Docker containerization.
- Bachelor's degree in Computer Science, Information Technology, or equivalent.`,
  requiredSkills: ['Python', 'Django', 'REST API', 'SQL', 'MySQL', 'Git'],
  optionalSkills: ['Docker', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS'],
  educationRequirement: "Bachelor's in Computer Science or related field",
  createdDate: '2026-08-14',
  totalCandidatesAnalyzed: 25,
};

export const initialCandidates: Candidate[] = [
  {
    id: 1,
    attachmentId: 101,
    rank: 1,
    name: 'Ayan Naresh Gadpal',
    email: 'ayan.gadpal@example.com',
    phone: '+91 98230 45678',
    category: 'Web Development',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    atsScore: 86.66,
    matchTier: 'Strong Match',
    experienceYears: 3.0,
    experienceSummary: '3.0 Years Experience in Full-Stack Python & Backend Engineering',
    educationSummary: 'B.Tech in Computer Science & Engineering, Pune Institute of Computer Technology (2023)',
    scores: {
      skillsScore: 56.0,
      skillsWeight: 60,
      skillsMatchPercentage: 100,
      experienceScore: 20.0,
      experienceWeight: 20,
      experienceYears: 3.0,
      requiredYears: 2.0,
      projectsScore: 9.0,
      projectsWeight: 10,
      educationScore: 9.66,
      educationWeight: 10,
    },
    allSkills: ['Python', 'Django', 'REST API', 'SQL', 'MySQL', 'Git', 'FastAPI', 'Docker', 'PostgreSQL', 'Celery', 'Redis', 'HTML/CSS'],
    matchedSkills: ['Python', 'Django', 'REST API', 'SQL', 'MySQL', 'Git'],
    missingSkills: [],
    experienceDetails: [
      {
        role: 'Software Engineer (Python/Django)',
        company: 'Apex Cloud Solutions',
        duration: 'July 2024 - Present (1.5 yrs)',
        highlights: [
          'Engineered resilient microservices using Python, Django, and Celery processing over 250k daily events.',
          'Designed high-throughput REST APIs and reduced database query response times by 38% on MySQL.',
          'Configured containerized deployments with Docker and automated testing workflows via GitHub Actions.',
        ],
      },
      {
        role: 'Associate Backend Developer',
        company: 'Nexus Infotech',
        duration: 'June 2023 - June 2024 (1 yr)',
        highlights: [
          'Built RESTful API endpoints for consumer web application and managed database schema migrations.',
          'Integrated third-party payment gateways and OAuth2 authentication flows with comprehensive unit test suites.',
        ],
      },
      {
        role: 'Python Developer Intern',
        company: 'Vanguard Labs',
        duration: 'Jan 2023 - May 2023 (6 mos)',
        highlights: [
          'Assisted senior engineers in writing automated scraping pipelines and database scripts using Python & SQL.',
        ],
      },
    ],
    educationDetails: [
      {
        degree: 'Bachelor of Technology in Computer Science & Engineering',
        institution: 'Pune Institute of Computer Technology (PICT)',
        year: '2019 - 2023',
        grade: 'CGPA: 8.85 / 10.0',
      },
    ],
    projects: [
      {
        title: 'Distributed Task & E-commerce Management API',
        technologies: ['Python', 'Django REST Framework', 'MySQL', 'Redis', 'Docker'],
        description: 'Architected an asynchronous order processing backend supporting 5,000 requests/sec with Redis caching, Celery task worker queues, and MySQL relational persistence.',
      },
      {
        title: 'Real-Time Analytics & Telemetry Pipeline',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Git', 'Docker'],
        description: 'Developed a lightweight microservice tracking user behavior events and generating automated analytical reports through secure REST endpoints.',
      },
    ],
    certifications: [
      'Certified Python Professional (PCEP / PCAP)',
      'Meta Backend Developer Professional Certificate',
      'Docker for Developers Certification',
    ],
    rankExplanationSummary: 'Strongest overall match across all candidate submissions with a 100% match on required skills, 3.0 years of verified hands-on industry experience exceeding the 2.0-year requirement, strong university computer science pedigree, and production-grade Django/REST API projects.',
    reasons: [
      { type: 'strength', text: '100% match on all 6 mandatory job skills: Python, Django, REST API, SQL, MySQL, and Git.' },
      { type: 'strength', text: '3.0 years of commercial backend development experience exceeds the 2.0 years requirement.' },
      { type: 'strength', text: 'Highly relevant portfolio showcasing complex distributed Django REST Framework and MySQL systems.' },
      { type: 'strength', text: 'Relevant Bachelor of Technology degree in Computer Science from an accredited institution.' },
      { type: 'strength', text: 'Bonus competencies in FastAPI, Docker containerization, and Celery asynchronous queues.' },
    ],
    rawResumeText: `AYAN NARESH GADPAL
Email: ayan.gadpal@example.com | Phone: +91 98230 45678 | Pune, Maharashtra
LinkedIn: linkedin.com/in/ayan-gadpal | GitHub: github.com/ayan-gadpal

PROFESSIONAL SUMMARY
Results-driven Python Backend Engineer with 3.0 years of experience designing, scaling, and maintaining robust RESTful APIs, high-volume microservices, and database architectures using Python, Django, SQL, MySQL, and Docker.

TECHNICAL SKILLS
- Languages & Frameworks: Python 3.11, Django, Django REST Framework, FastAPI, Flask, SQL, HTML5, CSS3
- Databases & Storage: MySQL, PostgreSQL, SQLite, Redis, MongoDB
- Tools & DevOps: Git, GitHub, Docker, Celery, Linux, Postman, CI/CD, Nginx

PROFESSIONAL EXPERIENCE
Software Engineer | Apex Cloud Solutions (July 2024 - Present)
- Engineered scalable microservices processing 250k daily transaction events with 99.9% uptime.
- Optimized slow MySQL database queries via indexing and ORM refactoring, slashing response latencies by 38%.

Associate Backend Developer | Nexus Infotech (June 2023 - June 2024)
- Built 40+ REST API endpoints and integrated Stripe payment webhooks with automated pytest coverage.

EDUCATION
B.Tech in Computer Science & Engineering | Pune Institute of Computer Technology (2019 - 2023) | CGPA: 8.85`,
  },
  {
    id: 2,
    attachmentId: 102,
    rank: 2,
    name: 'Sahil Kumar',
    email: 'sahil.kumar@example.com',
    phone: '+91 98111 22334',
    category: 'Web Development',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    atsScore: 78.50,
    matchTier: 'Good Match',
    experienceYears: 2.5,
    experienceSummary: '2.5 Years Experience in Python & Flask/Django Backend',
    educationSummary: 'B.E. in Information Technology, Mumbai University (2023)',
    scores: {
      skillsScore: 48.0,
      skillsWeight: 60,
      skillsMatchPercentage: 83.33,
      experienceScore: 19.5,
      experienceWeight: 20,
      experienceYears: 2.5,
      requiredYears: 2.0,
      projectsScore: 8.5,
      projectsWeight: 10,
      educationScore: 9.0,
      educationWeight: 10,
    },
    allSkills: ['Python', 'Django', 'REST API', 'SQL', 'Git', 'Flask', 'PostgreSQL', 'Docker'],
    matchedSkills: ['Python', 'Django', 'REST API', 'SQL', 'Git'],
    missingSkills: ['MySQL'],
    experienceDetails: [
      {
        role: 'Python Backend Developer',
        company: 'CloudSphere Labs',
        duration: 'Oct 2023 - Present (2.0 yrs)',
        highlights: [
          'Developed backend web applications with Django and PostgreSQL.',
          'Implemented secure JWT user authentication and integrated Stripe payment processing.',
        ],
      },
      {
        role: 'Junior Python Developer',
        company: 'Innovate Tech',
        duration: 'Jan 2023 - Sept 2023 (6 mos)',
        highlights: [
          'Built internal data collection scripts and REST API endpoints using Flask.',
        ],
      },
    ],
    educationDetails: [
      {
        degree: 'Bachelor of Engineering in Information Technology',
        institution: 'Mumbai University',
        year: '2019 - 2023',
        grade: 'First Class with Distinction',
      },
    ],
    projects: [
      {
        title: 'Inventory Management REST Service',
        technologies: ['Python', 'Django', 'PostgreSQL', 'Git'],
        description: 'Built a multi-tenant inventory tracking API with automated stock alerts and role-based permissions.',
      },
    ],
    certifications: [
      'Python Data Structures & Backend APIs (Coursera)',
      'PostgreSQL Query Optimization Fundamentals',
    ],
    rankExplanationSummary: 'Strong technical profile with 2.5 years of experience and 5 out of 6 required skills matched. Solid PostgreSQL background makes learning MySQL straightforward.',
    reasons: [
      { type: 'strength', text: 'Matches 5 of 6 required core skills (Python, Django, REST API, SQL, Git).' },
      { type: 'strength', text: '2.5 years experience comfortably exceeds the 2.0-year benchmark.' },
      { type: 'strength', text: 'Accredited Bachelor of Engineering in IT.' },
      { type: 'weakness', text: 'Missing explicit MySQL keywords (has solid PostgreSQL expertise).' },
    ],
  },
  {
    id: 3,
    attachmentId: 103,
    rank: 3,
    name: 'Ashutosh Tiwari',
    email: 'ashutosh.tiwari@example.com',
    phone: '+91 97654 32109',
    category: 'Web Development',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    atsScore: 75.00,
    matchTier: 'Good Match',
    experienceYears: 2.0,
    experienceSummary: '2.0 Years Experience in Python, Django & SQLite/MySQL',
    educationSummary: 'B.Sc. in Computer Science, Delhi University (2024)',
    scores: {
      skillsScore: 45.0,
      skillsWeight: 60,
      skillsMatchPercentage: 83.33,
      experienceScore: 18.0,
      experienceWeight: 20,
      experienceYears: 2.0,
      requiredYears: 2.0,
      projectsScore: 8.0,
      projectsWeight: 10,
      educationScore: 8.5,
      educationWeight: 10,
    },
    allSkills: ['Python', 'Django', 'REST API', 'MySQL', 'SQL', 'HTML/CSS', 'JavaScript'],
    matchedSkills: ['Python', 'Django', 'REST API', 'SQL', 'MySQL'],
    missingSkills: ['Git'],
    experienceDetails: [
      {
        role: 'Full Stack Python Developer',
        company: 'CodeMatrix Solutions',
        duration: 'August 2024 - Present (2.0 yrs)',
        highlights: [
          'Maintained full-stack portal with Django, MySQL, and JavaScript.',
          'Created automated reporting modules and data validation scripts.',
        ],
      },
    ],
    educationDetails: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Delhi University',
        year: '2020 - 2023',
        grade: 'CGPA: 8.2 / 10.0',
      },
    ],
    projects: [
      {
        title: 'Customer Feedback Portal',
        technologies: ['Python', 'Django', 'MySQL'],
        description: 'Dynamic web application with email notification triggers and admin dashboard.',
      },
    ],
    certifications: ['Django Web Framework Specialist (Udemy)'],
    rankExplanationSummary: 'Exact 2.0 years experience match with strong Django and MySQL capabilities. Minor gap in explicit Git workflow documentation.',
    reasons: [
      { type: 'strength', text: 'Matches Python, Django, REST API, SQL, and MySQL.' },
      { type: 'strength', text: 'Meets the 2.0 years minimum experience requirement.' },
      { type: 'strength', text: 'Direct hands-on experience with MySQL schemas.' },
      { type: 'weakness', text: 'Git version control details omitted from parsed resume highlights.' },
    ],
  },
  {
    id: 4,
    attachmentId: 104,
    rank: 4,
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98450 67890',
    category: 'Web Development',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    atsScore: 71.20,
    matchTier: 'Moderate Match',
    experienceYears: 2.0,
    experienceSummary: '2.0 Years Experience in Python, FastAPI & NoSQL/MongoDB',
    educationSummary: 'B.Tech in Information Technology, SRM University (2024)',
    scores: {
      skillsScore: 40.0,
      skillsWeight: 60,
      skillsMatchPercentage: 66.67,
      experienceScore: 18.0,
      experienceWeight: 20,
      experienceYears: 2.0,
      requiredYears: 2.0,
      projectsScore: 8.0,
      projectsWeight: 10,
      educationScore: 8.5,
      educationWeight: 10,
    },
    allSkills: ['Python', 'FastAPI', 'REST API', 'Git', 'MongoDB', 'Docker'],
    matchedSkills: ['Python', 'REST API', 'Git'],
    missingSkills: ['Django', 'SQL', 'MySQL'],
    experienceDetails: [
      {
        role: 'Backend Developer',
        company: 'Velocity Fintech',
        duration: 'July 2024 - Present (2.0 yrs)',
        highlights: [
          'Built high-speed microservices with FastAPI and MongoDB.',
          'Automated CI/CD pipelines with GitHub Actions and Docker.',
        ],
      },
    ],
    educationDetails: [
      {
        degree: 'B.Tech in Information Technology',
        institution: 'SRM Institute of Science and Technology',
        year: '2020 - 2024',
        grade: 'CGPA: 8.4 / 10.0',
      },
    ],
    projects: [
      {
        title: 'Fintech Microservice Gateway',
        technologies: ['Python', 'FastAPI', 'Docker', 'MongoDB'],
        description: 'High concurrency async REST API processing rate-limited currency exchange calculations.',
      },
    ],
    certifications: ['AWS Certified Cloud Practitioner'],
    rankExplanationSummary: 'Strong async Python and FastAPI developer with 2.0 years experience, but lacks Django and relational SQL/MySQL depth.',
    reasons: [
      { type: 'strength', text: 'Proficient in modern Python, REST API design, Git, and Docker.' },
      { type: 'strength', text: 'Meets the 2.0-year experience requirement.' },
      { type: 'weakness', text: 'No demonstrated experience in Django framework.' },
      { type: 'weakness', text: 'Primary database experience is NoSQL (MongoDB) rather than required MySQL/SQL.' },
    ],
  },
  {
    id: 5,
    attachmentId: 105,
    rank: 5,
    name: 'Rohan Mehta',
    email: 'rohan.mehta@example.com',
    phone: '+91 99887 76655',
    category: 'Web Development',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    atsScore: 66.80,
    matchTier: 'Moderate Match',
    experienceYears: 1.5,
    experienceSummary: '1.5 Years Full-Stack Python & React Developer',
    educationSummary: 'BCA & MCA, Bangalore University (2024)',
    scores: {
      skillsScore: 42.0,
      skillsWeight: 60,
      skillsMatchPercentage: 70.0,
      experienceScore: 14.0,
      experienceWeight: 20,
      experienceYears: 1.5,
      requiredYears: 2.0,
      projectsScore: 7.5,
      projectsWeight: 10,
      educationScore: 8.0,
      educationWeight: 10,
    },
    allSkills: ['Python', 'Django', 'SQL', 'MySQL', 'Git', 'React', 'JavaScript'],
    matchedSkills: ['Python', 'Django', 'SQL', 'MySQL', 'Git'],
    missingSkills: ['REST API'],
    experienceDetails: [
      {
        role: 'Junior Full Stack Engineer',
        company: 'PixelSpark Studios',
        duration: 'Jan 2024 - Present (1.5 yrs)',
        highlights: [
          'Developed web pages using Django templates and React frontend components.',
          'Managed MySQL database tables and executed queries.',
        ],
      },
    ],
    educationDetails: [
      {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Bangalore University',
        year: '2022 - 2024',
        grade: 'First Class',
      },
    ],
    projects: [
      {
        title: 'Event Booking Web App',
        technologies: ['Python', 'Django', 'MySQL', 'React'],
        description: 'Full stack ticketing system with user authentication and booking tables.',
      },
    ],
    certifications: ['Full Stack Web Development Bootcamp'],
    rankExplanationSummary: 'Good multi-skill set with Django and MySQL, but experience is 1.5 years (below the 2.0-year requirement).',
    reasons: [
      { type: 'strength', text: 'Matches Python, Django, SQL, MySQL, and Git.' },
      { type: 'weakness', text: '1.5 years experience is below the required 2.0 years threshold.' },
      { type: 'weakness', text: 'Limited documented experience in decoupled REST API architecture.' },
    ],
  },
  {
    id: 6,
    attachmentId: 106,
    rank: 6,
    name: 'Ananya Verma',
    email: 'ananya.verma@example.com',
    phone: '+91 98765 43210',
    category: 'Machine Learning',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    atsScore: 62.40,
    matchTier: 'Moderate Match',
    experienceYears: 2.0,
    experienceSummary: '2.0 Years in Python, Data Pipelines & Machine Learning',
    educationSummary: 'M.Tech in Artificial Intelligence, IIT Hyderabad (2024)',
    scores: {
      skillsScore: 32.0,
      skillsWeight: 60,
      skillsMatchPercentage: 50.0,
      experienceScore: 18.0,
      experienceWeight: 20,
      experienceYears: 2.0,
      requiredYears: 2.0,
      projectsScore: 7.0,
      projectsWeight: 10,
      educationScore: 9.8,
      educationWeight: 10,
    },
    allSkills: ['Python', 'SQL', 'Git', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'FastAPI'],
    matchedSkills: ['Python', 'SQL', 'Git'],
    missingSkills: ['Django', 'REST API', 'MySQL'],
    experienceDetails: [
      {
        role: 'ML Engineer',
        company: 'DeepVision AI',
        duration: 'June 2024 - Present (2.0 yrs)',
        highlights: [
          'Trained neural network models and built data extraction pipelines in Python.',
        ],
      },
    ],
    educationDetails: [
      {
        degree: 'M.Tech in Artificial Intelligence',
        institution: 'IIT Hyderabad',
        year: '2022 - 2024',
        grade: 'CGPA: 9.2 / 10.0',
      },
    ],
    projects: [
      {
        title: 'Automated Resume Classifier',
        technologies: ['Python', 'Transformers', 'FastAPI'],
        description: 'NLP pipeline classifying document attachments and extracting candidate data.',
      },
    ],
    certifications: ['DeepLearning.AI TensorFlow Developer'],
    rankExplanationSummary: 'Outstanding academic credentials and Python mastery, but background is heavily focused on Machine Learning rather than Django web backend development.',
    reasons: [
      { type: 'strength', text: 'Top tier Python, SQL, and Git fundamentals.' },
      { type: 'strength', text: 'Exceptional M.Tech degree from IIT Hyderabad.' },
      { type: 'weakness', text: 'Candidate profile is Machine Learning oriented; lacks Django and MySQL web application experience.' },
    ],
  },
  {
    id: 7,
    attachmentId: 107,
    rank: 7,
    name: 'Vikram Patel',
    email: 'vikram.patel@example.com',
    phone: '+91 97123 45678',
    category: 'Cloud & DevOps',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    atsScore: 58.00,
    matchTier: 'Low Match',
    experienceYears: 3.0,
    experienceSummary: '3.0 Years Cloud & DevOps Engineer (Python Scripting)',
    educationSummary: 'B.Tech in CSE, Gujarat Technological University (2023)',
    scores: {
      skillsScore: 28.0,
      skillsWeight: 60,
      skillsMatchPercentage: 40.0,
      experienceScore: 20.0,
      experienceWeight: 20,
      experienceYears: 3.0,
      requiredYears: 2.0,
      projectsScore: 6.0,
      projectsWeight: 10,
      educationScore: 8.0,
      educationWeight: 10,
    },
    allSkills: ['Python', 'Git', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Linux', 'Bash'],
    matchedSkills: ['Python', 'Git'],
    missingSkills: ['Django', 'REST API', 'SQL', 'MySQL'],
    experienceDetails: [
      {
        role: 'DevOps Engineer',
        company: 'InfraScale Systems',
        duration: 'May 2023 - Present (3.0 yrs)',
        highlights: [
          'Maintained AWS cloud infrastructure, Kubernetes clusters, and automated CI/CD.',
        ],
      },
    ],
    educationDetails: [
      {
        degree: 'B.Tech in Computer Science',
        institution: 'GTU Ahmedabad',
        year: '2019 - 2023',
        grade: 'CGPA: 7.9',
      },
    ],
    projects: [
      {
        title: 'Automated Cloud Provisioning CLI',
        technologies: ['Python', 'AWS SDK', 'Docker'],
        description: 'CLI automation tool built in Python to orchestrate infrastructure deployments.',
      },
    ],
    certifications: ['AWS Certified Solutions Architect', 'CKA Kubernetes Administrator'],
    rankExplanationSummary: 'High infrastructure and scripting experience, but profile does not match the Django web development requirements.',
    reasons: [
      { type: 'strength', text: '3.0 years of professional industry experience in Python scripting and Git.' },
      { type: 'weakness', text: 'Lacks web application development with Django and REST APIs.' },
      { type: 'weakness', text: 'Missing relational database (SQL/MySQL) application design experience.' },
    ],
  },
];

export const initialEmails: EmailItem[] = [
  {
    id: 1,
    sender: 'ayan.gadpal@example.com',
    subject: 'Application for Python Developer Role - Ayan Naresh Gadpal',
    date: '2026-08-14 10:15 AM',
    body: 'Dear HR Team,\n\nPlease find attached my updated resume for the Python Developer position. I have 3 years of hands-on experience with Python, Django, REST APIs, and MySQL. Looking forward to discussing how I can contribute to your engineering goals.\n\nBest regards,\nAyan Naresh Gadpal',
    attachmentsCount: 1,
    status: 'processed',
  },
  {
    id: 2,
    sender: 'sahil.kumar@example.com',
    subject: 'Resume Submission: Python Developer - Sahil Kumar',
    date: '2026-08-14 09:42 AM',
    body: 'Hello Hiring Manager,\n\nI am writing to express my strong interest in the Python Developer opening. Attached is my CV highlighting 2.5 years of backend engineering in Django and PostgreSQL.\n\nThanks,\nSahil Kumar',
    attachmentsCount: 2,
    status: 'processed',
  },
  {
    id: 3,
    sender: 'ashutosh.tiwari@example.com',
    subject: 'Job Application: Python Backend Engineer - Ashutosh Tiwari',
    date: '2026-08-14 08:30 AM',
    body: 'Dear Sir/Madam,\n\nKindly review my enclosed resume for the Python Developer vacancy. I have 2 years of professional experience building web apps with Django, MySQL, and REST APIs.\n\nSincerely,\nAshutosh Tiwari',
    attachmentsCount: 1,
    status: 'processed',
  },
  {
    id: 4,
    sender: 'priya.sharma@example.com',
    subject: 'Resume - Priya Sharma - Python / FastAPI Backend',
    date: '2026-08-13 04:20 PM',
    body: 'Hi Team,\n\nAttaching my resume for the backend opening. I specialize in Python, FastAPI microservices, and Docker deployments.\n\nBest,\nPriya Sharma',
    attachmentsCount: 1,
    status: 'processed',
  },
  {
    id: 5,
    sender: 'newsletter@techdigest.com',
    subject: 'Weekly Developer Trends & Python 3.12 Releases',
    date: '2026-08-13 01:10 PM',
    body: 'Hello HR Team,\n\nCheck out this week’s top articles on async Python, AI integrations, and cloud architectures.\n\nAttached: TechDigest_August_Report.pdf',
    attachmentsCount: 1,
    status: 'scanned',
  },
  {
    id: 6,
    sender: 'rohan.mehta@example.com',
    subject: 'Applying for Python Web Developer - Rohan Mehta',
    date: '2026-08-13 11:05 AM',
    body: 'Hello,\n\nPlease find attached my resume and portfolio link for the Python Developer position.\n\nRegards,\nRohan Mehta',
    attachmentsCount: 1,
    status: 'processed',
  },
];

export const initialAttachments: AttachmentItem[] = [
  {
    id: 101,
    emailId: 1,
    fileName: 'Ayan_Gadpal_Python_Developer_Resume.pdf',
    filePath: '/uploads/resumes/Ayan_Gadpal_Python_Developer_Resume.pdf',
    fileType: 'application/pdf',
    fileSize: '342 KB',
    isResume: true,
    classifiedAt: '2026-08-14 10:16 AM',
    candidateId: 1,
  },
  {
    id: 102,
    emailId: 2,
    fileName: 'Sahil_Kumar_CV_2026.pdf',
    filePath: '/uploads/resumes/Sahil_Kumar_CV_2026.pdf',
    fileType: 'application/pdf',
    fileSize: '280 KB',
    isResume: true,
    classifiedAt: '2026-08-14 09:43 AM',
    candidateId: 2,
  },
  {
    id: 103,
    emailId: 2,
    fileName: 'Portfolio_Cover_Letter.docx',
    filePath: '/uploads/attachments/Portfolio_Cover_Letter.docx',
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileSize: '95 KB',
    isResume: false,
    classifiedAt: '2026-08-14 09:43 AM',
  },
  {
    id: 104,
    emailId: 3,
    fileName: 'Ashutosh_Tiwari_Resume.pdf',
    filePath: '/uploads/resumes/Ashutosh_Tiwari_Resume.pdf',
    fileType: 'application/pdf',
    fileSize: '310 KB',
    isResume: true,
    classifiedAt: '2026-08-14 08:31 AM',
    candidateId: 3,
  },
  {
    id: 105,
    emailId: 4,
    fileName: 'Priya_Sharma_Backend_Resume.pdf',
    filePath: '/uploads/resumes/Priya_Sharma_Backend_Resume.pdf',
    fileType: 'application/pdf',
    fileSize: '295 KB',
    isResume: true,
    classifiedAt: '2026-08-13 04:21 PM',
    candidateId: 4,
  },
  {
    id: 106,
    emailId: 5,
    fileName: 'TechDigest_August_Report.pdf',
    filePath: '/uploads/attachments/TechDigest_August_Report.pdf',
    fileType: 'application/pdf',
    fileSize: '1.4 MB',
    isResume: false,
    classifiedAt: '2026-08-13 01:11 PM',
  },
  {
    id: 107,
    emailId: 6,
    fileName: 'Rohan_Mehta_Resume.pdf',
    filePath: '/uploads/resumes/Rohan_Mehta_Resume.pdf',
    fileType: 'application/pdf',
    fileSize: '260 KB',
    isResume: true,
    classifiedAt: '2026-08-13 11:06 AM',
    candidateId: 5,
  },
];

export const initialActivities: RecentActivity[] = [
  {
    id: 'act-1',
    type: 'ranking_updated',
    title: 'Candidate Ranking Generated',
    description: 'Ranked 25 candidates for Python Developer role (Top: Ayan Naresh Gadpal - 86.66%).',
    timestamp: '10 mins ago',
    badgeType: 'success',
  },
  {
    id: 'act-2',
    type: 'resume_parsed',
    title: 'Resume Parsed & Evaluated',
    description: 'Extracted skills, experience & education from Ayan_Gadpal_Python_Developer_Resume.pdf',
    timestamp: '25 mins ago',
    badgeType: 'primary',
  },
  {
    id: 'act-3',
    type: 'email_scanned',
    title: 'Inbox Scanner Executed',
    description: 'Scanned 6 new recruitment emails and identified 5 valid resume attachments.',
    timestamp: '40 mins ago',
    badgeType: 'info',
  },
  {
    id: 'act-4',
    type: 'job_analyzed',
    title: 'Job Analysis Created',
    description: 'Defined benchmark criteria for Python Developer (2.0 Years, Django, SQL, MySQL).',
    timestamp: '1 hour ago',
    badgeType: 'warning',
  },
];
