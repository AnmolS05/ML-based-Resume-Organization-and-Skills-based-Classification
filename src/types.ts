export interface EmailItem {
  id: number;
  sender: string;
  subject: string;
  date: string;
  body: string;
  attachmentsCount: number;
  status: 'scanned' | 'processed' | 'pending';
}

export interface AttachmentItem {
  id: number;
  emailId: number;
  fileName: string;
  filePath: string;
  fileType: string;
  fileSize: string;
  isResume: boolean;
  classifiedAt: string;
  candidateId?: number;
}

export interface ScoreBreakdown {
  skillsScore: number; // Max 60 (or scaled 50)
  skillsWeight: number; // 60%
  skillsMatchPercentage: number; // 0-100%
  
  experienceScore: number; // Max 20
  experienceWeight: number; // 20%
  experienceYears: number;
  requiredYears: number;
  
  projectsScore: number; // Max 10
  projectsWeight: number; // 10%
  
  educationScore: number; // Max 10
  educationWeight: number; // 10%
  
  certificationsScore?: number; // Optional bonus
}

export interface ExplanationReason {
  type: 'strength' | 'weakness' | 'neutral';
  text: string;
}

export interface Candidate {
  id: number;
  attachmentId: number;
  rank: number;
  name: string;
  email: string;
  phone: string;
  category: 'Web Development' | 'Machine Learning' | 'Cloud & DevOps' | 'Data Science' | 'Mobile Development';
  avatarUrl: string;
  
  // Overall ATS scoring
  atsScore: number; // e.g., 86.66
  matchTier: 'Strong Match' | 'Good Match' | 'Moderate Match' | 'Low Match';
  
  // Breakdown
  scores: ScoreBreakdown;
  
  // Parsed Resume Details
  experienceYears: number;
  experienceSummary: string;
  experienceDetails: Array<{
    role: string;
    company: string;
    duration: string;
    highlights: string[];
  }>;
  
  educationSummary: string;
  educationDetails: Array<{
    degree: string;
    institution: string;
    year: string;
    grade?: string;
  }>;
  
  allSkills: string[];
  matchedSkills: string[];
  missingSkills: string[];
  
  projects: Array<{
    title: string;
    technologies: string[];
    description: string;
  }>;
  
  certifications: string[];
  
  // AI Explanation
  rankExplanationSummary: string;
  reasons: ExplanationReason[];
  
  rawResumeText?: string;
}

export interface JobRequirement {
  id: string;
  role: string;
  requiredExperience: string;
  requiredExperienceYears: number;
  description: string;
  requiredSkills: string[];
  optionalSkills: string[];
  educationRequirement: string;
  createdDate: string;
  totalCandidatesAnalyzed: number;
}

export interface RecentActivity {
  id: string | number;
  type: 'email_scanned' | 'resume_parsed' | 'resumes_processed' | 'job_analyzed' | 'ranking_updated';
  title: string;
  description: string;
  timestamp: string;
  badgeType?: 'success' | 'info' | 'primary' | 'warning';
}
