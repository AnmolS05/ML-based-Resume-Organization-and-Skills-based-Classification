import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useOutletContext, useNavigate, useParams } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { MainLayout } from './components/layout/MainLayout';
import { HomeView } from './components/HomeView';
import { LoginView } from './components/LoginView';
import { SignupView } from './components/SignupView';
import { DashboardView } from './components/DashboardView';
import { EmailsView } from './components/EmailsView';
import { AttachmentsView } from './components/AttachmentsView';
import { JobAnalysisView } from './components/JobAnalysisView';
import { ResultsView } from './components/ResultsView';
import { ProfileView } from './components/ProfileView';
import { SettingsView } from './components/SettingsView';
import { FlaskCodeViewer } from './components/FlaskCodeViewer';
import { ResumeModal } from './components/ResumeModal';
import { AnalyticsView } from './components/AnalyticsView';
import { KanbanView } from './components/KanbanView';
import { CalendarView } from './components/CalendarView';
import { HelpView } from './components/HelpView';
import { MessagesView } from './components/MessagesView';
import { OffersView } from './components/OffersView';
import { IntegrationsView } from './components/IntegrationsView';
import { TeamDirectoryView } from './components/TeamDirectoryView';
import { JobBoardsView } from './components/JobBoardsView';
import { AssessmentsView } from './components/AssessmentsView';
import { TemplatesView } from './components/TemplatesView';
import { AuditLogsView } from './components/AuditLogsView';
import { CareersPageView } from './components/CareersPageView';
import { NotificationSettingsView } from './components/NotificationSettingsView';
import { BillingView } from './components/BillingView';
import { ReferralsView } from './components/ReferralsView';
import { DiversityAnalyticsView } from './components/DiversityAnalyticsView';
import { ComplianceView } from './components/ComplianceView';
import { PerformanceReviewsView } from './components/PerformanceReviewsView';
import { OrgChartView } from './components/OrgChartView';
import { OnboardingView } from './components/OnboardingView';
import { TimeOffView } from './components/TimeOffView';
import { PulseSurveysView } from './components/PulseSurveysView';
import { DocumentLibraryView } from './components/DocumentLibraryView';
import { TrainingView } from './components/TrainingView';
import { PayrollView } from './components/PayrollView';
import { BenefitsView } from './components/BenefitsView';
import { AssetManagementView } from './components/AssetManagementView';
import { ExpensesView } from './components/ExpensesView';
import { DirectoryView } from './components/DirectoryView';
import { HelpDeskView } from './components/HelpDeskView';
import { RecognitionView } from './components/RecognitionView';
import { FacilitiesView } from './components/FacilitiesView';
import { GoalsView } from './components/GoalsView';
import { NewsView } from './components/NewsView';
import { WellnessView } from './components/WellnessView';

import { initialCandidates, initialEmails, initialAttachments, initialJobRequirement, initialActivities } from './data/mockData';
import { Candidate, EmailItem, AttachmentItem, JobRequirement, RecentActivity } from './types';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

function AppContent() {
  // Application Data State
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [emails, setEmails] = useState<EmailItem[]>(initialEmails);
  const [attachments, setAttachments] = useState<AttachmentItem[]>(initialAttachments);
  const [jobRequirement, setJobRequirement] = useState<JobRequirement>(initialJobRequirement);
  const [activities, setActivities] = useState<RecentActivity[]>(initialActivities);
  
  // Interactive Action States
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  // Resume Modal State
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [modalResumeCandidate, setModalResumeCandidate] = useState<Candidate | undefined>(undefined);
  const [modalAttachment, setModalAttachment] = useState<AttachmentItem | undefined>(undefined);

  // Actions
  const handleScanEmails = (showToast: (msg: string) => void) => {
    if (isScanning) return;
    setIsScanning(true);
    showToast('Connecting to IMAP server and retrieving mailbox...');
    
    setTimeout(() => {
      setIsScanning(false);
      showToast('IMAP Inbox Scanner synchronized: 6 candidate emails scanned and classified.');
      const newActivity: RecentActivity = {
        id: Date.now(),
        type: 'email_scanned',
        title: 'Inbox Scan Complete',
        description: 'Synchronized latest candidate submissions from IMAP stream.',
        timestamp: 'Just now',
        badgeType: 'success',
      };
      setActivities((prev) => [newActivity, ...prev]);
    }, 1200);
  };

  const handleProcessResumes = (showToast: (msg: string) => void) => {
    if (isProcessing) return;
    setIsProcessing(true);
    showToast('Executing AI OCR and ATS scoring pipeline across 25 candidates...');
    
    setTimeout(() => {
      setIsProcessing(false);
      showToast('AI Parsing Pipeline executed: 25 resumes evaluated and scored against active job profile.');
      const newActivity: RecentActivity = {
        id: Date.now(),
        type: 'resumes_processed',
        title: 'ATS Scoring Pipeline Run',
        description: 'Recalculated weighted match criteria across all candidate profiles.',
        timestamp: 'Just now',
        badgeType: 'primary',
      };
      setActivities((prev) => [newActivity, ...prev]);
    }, 1200);
  };

  const handleViewCandidateResume = (candidateId: number) => {
    const cand = candidates.find((c) => c.id === candidateId) || candidates[0];
    const att = attachments.find((a) => a.id === cand.attachmentId);
    setModalResumeCandidate(cand);
    setModalAttachment(att);
    setIsResumeModalOpen(true);
  };

  const handleViewAttachmentResume = (attachmentId: number) => {
    const att = attachments.find((a) => a.id === attachmentId);
    const cand = candidates.find((c) => c.attachmentId === attachmentId || c.id === att?.candidateId);
    setModalAttachment(att);
    setModalResumeCandidate(cand || candidates[0]);
    setIsResumeModalOpen(true);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView onStartMatching={() => {}} onNavigate={() => {}} />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignupView />} />
        
        {/* Protected Dashboard Routes wrapped in MainLayout */}
        <Route 
          element={
            <ProtectedRoute>
              <MainLayout emails={emails} candidates={candidates} />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={
            <DashboardRoute 
              candidates={candidates} emails={emails} attachments={attachments} activities={activities}
              isScanning={isScanning} isProcessing={isProcessing}
              onScanEmails={handleScanEmails} onProcessResumes={handleProcessResumes}
            />
          } />
          
          <Route path="/emails" element={
            <EmailsRoute 
              emails={emails} attachments={attachments} isScanning={isScanning}
              onScanEmails={handleScanEmails} onViewResume={handleViewAttachmentResume}
            />
          } />

          <Route path="/attachments" element={
            <AttachmentsRoute 
              attachments={attachments} emails={emails} onViewResume={handleViewAttachmentResume}
            />
          } />

          <Route path="/job_analysis" element={
            <JobAnalysisRoute 
              jobRequirement={jobRequirement} isAnalyzing={isAnalyzing}
              onSaveAndAnalyze={(updatedReq, navigate, showToast) => {
                setIsAnalyzing(true);
                showToast(`Analyzing & ranking 25 resumes for "${updatedReq.role}"...`);
                setTimeout(() => {
                  setIsAnalyzing(false);
                  setJobRequirement(updatedReq);
                  showToast(`Job criteria updated for "${updatedReq.role}". Matching candidates complete!`);
                  navigate('/results');
                }, 800);
              }}
            />
          } />
          
          <Route path="/job_boards" element={<JobBoardsView />} />
          <Route path="/assessments" element={<AssessmentsView />} />

          <Route path="/results" element={
            <ResultsRoute 
              candidates={candidates} jobRequirement={jobRequirement}
            />
          } />
          
          <Route path="/candidates" element={<Navigate to="/results" replace />} />
          
          <Route path="/profile/:candidateId" element={
            <ProfileRoute 
              candidates={candidates} jobRequirement={jobRequirement}
              onViewResumeModal={handleViewCandidateResume}
            />
          } />

          <Route path="/pipeline" element={<KanbanView />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/offers" element={<OffersView />} />
          <Route path="/analytics" element={<AnalyticsView />} />
          <Route path="/diversity" element={<DiversityAnalyticsView />} />
          <Route path="/messages" element={<MessagesView />} />
          <Route path="/integrations" element={<IntegrationsView />} />
          <Route path="/team" element={<TeamDirectoryView />} />
          <Route path="/org_chart" element={<OrgChartView />} />
          <Route path="/performance" element={<PerformanceReviewsView />} />
          <Route path="/onboarding" element={<OnboardingView />} />
          <Route path="/timeoff" element={<TimeOffView />} />
          <Route path="/surveys" element={<PulseSurveysView />} />
          <Route path="/library" element={<DocumentLibraryView />} />
          <Route path="/training" element={<TrainingView />} />
          <Route path="/payroll" element={<PayrollView />} />
          <Route path="/expenses" element={<ExpensesView />} />
          <Route path="/benefits" element={<BenefitsView />} />
          <Route path="/assets" element={<AssetManagementView />} />
          <Route path="/directory" element={<DirectoryView />} />
          <Route path="/news" element={<NewsView />} />
          <Route path="/goals" element={<GoalsView />} />
          <Route path="/facilities" element={<FacilitiesView />} />
          <Route path="/helpdesk" element={<HelpDeskView />} />
          <Route path="/wellness" element={<WellnessView />} />
          <Route path="/recognition" element={<RecognitionView />} />
          <Route path="/referrals" element={<ReferralsView />} />
          <Route path="/careers_page" element={<CareersPageView />} />
          <Route path="/templates" element={<TemplatesView />} />
          <Route path="/audit" element={<AuditLogsView />} />
          <Route path="/compliance" element={<ComplianceView />} />
          <Route path="/notifications" element={<NotificationSettingsView />} />
          <Route path="/billing" element={<BillingView />} />
          <Route path="/help" element={<HelpView />} />

          <Route path="/settings" element={<SettingsRoute />} />
          
          <Route path="/flask_code" element={<FlaskCodeViewer />} />
        </Route>
      </Routes>
      
      {/* Global Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        candidate={modalResumeCandidate}
        attachment={modalAttachment}
      />
    </>
  );
}

// Wrapper components to pass Context (like showToast) into existing Views 
// This keeps the refactor simpler without completely rewriting all views

function DashboardRoute({ candidates, emails, attachments, activities, isScanning, isProcessing, onScanEmails, onProcessResumes }: any) {
  const { showToast } = useOutletContext<{ showToast: (msg: string) => void }>();
  return <DashboardView 
    candidates={candidates} emails={emails} attachments={attachments} activities={activities}
    isScanning={isScanning} isProcessing={isProcessing}
    onScanEmails={() => onScanEmails(showToast)} onProcessResumes={() => onProcessResumes(showToast)}
    onNavigate={() => {}}
  />;
}

function EmailsRoute({ emails, attachments, isScanning, onScanEmails, onViewResume }: any) {
  const { showToast } = useOutletContext<{ showToast: (msg: string) => void }>();
  return <EmailsView 
    emails={emails} attachments={attachments} isScanning={isScanning}
    onScanEmails={() => onScanEmails(showToast)} onViewResume={onViewResume}
    onNavigate={() => {}}
  />;
}

function AttachmentsRoute({ attachments, emails, onViewResume }: any) {
  return <AttachmentsView 
    attachments={attachments} emails={emails} onViewResume={onViewResume} onNavigate={() => {}}
  />;
}

function JobAnalysisRoute({ jobRequirement, isAnalyzing, onSaveAndAnalyze }: any) {
  const { showToast } = useOutletContext<{ showToast: (msg: string) => void }>();
  // We need navigate inside the route wrapper
  const navigate = useNavigate();
  return <JobAnalysisView 
    jobRequirement={jobRequirement} isAnalyzing={isAnalyzing}
    onSaveAndAnalyze={(updatedReq: any) => onSaveAndAnalyze(updatedReq, navigate, showToast)}
  />;
}

function ResultsRoute({ candidates, jobRequirement }: any) {
  const { showToast } = useOutletContext<{ showToast: (msg: string) => void }>();
  const navigate = useNavigate();
  return <ResultsView 
    candidates={candidates} jobRequirement={jobRequirement}
    onSelectCandidate={(id: number) => navigate(`/profile/${id}`)}
    onReAnalyze={() => navigate('/job_analysis')}
    onExportReport={() => showToast('Candidate ATS Evaluation Report exported as CSV/PDF.')}
  />;
}

function ProfileRoute({ candidates, jobRequirement, onViewResumeModal }: any) {
  const navigate = useNavigate();
  const { candidateId } = useParams();
  const activeCandidate = candidates.find((c: any) => c.id === Number(candidateId)) || candidates[0];
  return <ProfileView 
    candidate={activeCandidate} jobRequirement={jobRequirement}
    onBack={() => navigate('/results')} onViewResumeModal={() => onViewResumeModal(activeCandidate.id)}
  />;
}

function SettingsRoute() {
  const { showToast } = useOutletContext<{ showToast: (msg: string) => void }>();
  return <SettingsView onSaveToast={(msg: string) => showToast(msg)} />;
}
