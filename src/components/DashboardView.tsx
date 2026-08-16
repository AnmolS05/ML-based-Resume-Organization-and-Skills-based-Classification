import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  FileText, 
  Award, 
  TrendingUp, 
  RefreshCw, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Briefcase,
  Play,
  Filter,
  BarChart2
} from 'lucide-react';
import { Candidate, EmailItem, AttachmentItem, RecentActivity } from '../types';

interface DashboardViewProps {
  candidates: Candidate[];
  emails: EmailItem[];
  attachments: AttachmentItem[];
  activities: RecentActivity[];
  isScanning: boolean;
  isProcessing: boolean;
  onScanEmails: () => void;
  onProcessResumes: () => void;
  onNavigate: (view: string, candidateId?: number) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  candidates,
  emails,
  attachments,
  activities,
  isScanning,
  isProcessing,
  onScanEmails,
  onProcessResumes,
  onNavigate,
}) => {
  const resumeAttachments = attachments.filter((a) => a.isResume);
  const avgScore = candidates.length > 0
    ? (candidates.reduce((acc, c) => acc + c.atsScore, 0) / candidates.length).toFixed(1)
    : '0.0';
  const strongMatchesCount = candidates.filter((c) => c.atsScore >= 75).length;
  const topCandidate = candidates[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8 max-w-7xl mx-auto pb-12"
    >
      {/* Top Welcome & Header */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Real-time monitoring for email ingestion, resume parser classification, and candidate ATS ranking.
          </p>
        </div>

        {/* Quick Actions Row */}
        <div className="flex flex-wrap items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="scan-emails-quick-btn"
            onClick={onScanEmails}
            disabled={isScanning}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#1e50ff] to-blue-600 hover:from-blue-700 hover:to-blue-800 disabled:opacity-60 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? 'Scanning Inbox...' : 'Scan Emails'}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="process-resumes-quick-btn"
            onClick={onProcessResumes}
            disabled={isProcessing}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-white/80 backdrop-blur-sm hover:bg-white border border-slate-200/60 disabled:opacity-60 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Sparkles className={`w-4 h-4 text-indigo-600 ${isProcessing ? 'animate-pulse' : ''}`} />
            <span>{isProcessing ? 'Processing Resumes...' : 'Process Resumes'}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('job_analysis')}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/20 transition-all cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>Create Job Analysis</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Key Metrics 4-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Metric 1: Total Emails */}
        <motion.div variants={itemVariants} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold shadow-inner">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
              Live Inbox
            </span>
          </div>
          <div className="mt-5">
            <div className="text-4xl font-black text-slate-800 tracking-tight">{emails.length}</div>
            <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Total Emails Scanned</div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100/80 flex items-center justify-between text-xs font-medium text-slate-600">
            <span>Classified attachments:</span>
            <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">{attachments.length}</span>
          </div>
        </motion.div>

        {/* Metric 2: Resumes Parsed */}
        <motion.div variants={itemVariants} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold shadow-inner">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 shadow-sm">
              {((resumeAttachments.length / (attachments.length || 1)) * 100).toFixed(0)}% PDF Resumes
            </span>
          </div>
          <div className="mt-5">
            <div className="text-4xl font-black text-slate-800 tracking-tight">{candidates.length}</div>
            <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Total Resumes Parsed</div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100/80 flex items-center justify-between text-xs font-medium text-slate-600">
            <span>Validated attachments:</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{resumeAttachments.length} Resumes</span>
          </div>
        </motion.div>

        {/* Metric 3: Average ATS Score */}
        <motion.div variants={itemVariants} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold shadow-inner">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-sm">
              Python Dev Benchmark
            </span>
          </div>
          <div className="mt-5">
            <div className="text-4xl font-black text-slate-800 tracking-tight">{avgScore}%</div>
            <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Average ATS Score</div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100/80 flex items-center justify-between text-xs font-medium text-slate-600">
            <span>Top candidate score:</span>
            <span className="font-bold text-[#1e50ff] bg-blue-50 px-2 py-0.5 rounded-md">{topCandidate?.atsScore.toFixed(2)}%</span>
          </div>
        </motion.div>

        {/* Metric 4: Strong Matches */}
        <motion.div variants={itemVariants} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold shadow-inner">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100 shadow-sm">
              High Fit (≥75%)
            </span>
          </div>
          <div className="mt-5">
            <div className="text-4xl font-black text-slate-800 tracking-tight">{strongMatchesCount}</div>
            <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Top Tier Candidates</div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100/80 flex items-center justify-between text-xs font-medium text-slate-600">
            <span>Ready for interview:</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{strongMatchesCount} Recommended</span>
          </div>
        </motion.div>
      </div>

      {/* Featured Top Candidate & Active Job Banner */}
      {topCandidate && (
        <motion.div variants={itemVariants} className="relative bg-gradient-to-br from-slate-900 via-[#0a192f] to-[#0d1e3d] rounded-3xl p-1 text-white shadow-2xl shadow-blue-900/20 overflow-hidden group">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          <div className="relative bg-[#0a192f]/90 backdrop-blur-3xl rounded-[22px] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold text-blue-300 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Active Target Role: Python Developer (2.0+ Years Required)</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-3xl font-extrabold text-amber-400 shrink-0 backdrop-blur-sm">
                    🥇
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{topCandidate.name}</h3>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-black border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      Rank #1 • {topCandidate.atsScore.toFixed(2)}%
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-400 mt-1.5">
                    {topCandidate.experienceSummary} • {topCandidate.educationSummary}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 bg-white/5 p-4 rounded-2xl border border-white/10 leading-relaxed backdrop-blur-sm">
                <span className="font-bold text-emerald-400 mr-2">AI Screening Summary:</span>
                {topCandidate.rankExplanationSummary}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('profile', topCandidate.id)}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-[#0a192f] bg-white hover:bg-blue-50 transition-colors shadow-xl shadow-white/10 text-sm cursor-pointer"
              >
                <span>View Full Candidate Profile</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('results')}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm backdrop-blur-md cursor-pointer"
              >
                <span>View All 25 Ranked Candidates</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Two Column Section: Recent Activities & Candidate Quick Table */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 7 Columns: Top 5 Candidates Ranking Preview */}
        <div className="lg:col-span-7 bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="p-6 border-b border-slate-100/80 flex items-center justify-between bg-white/50">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Top Ranked Candidates</h2>
              <p className="text-xs font-medium text-slate-500 mt-0.5">Sorted by calculated weighted ATS score</p>
            </div>
            <button
              onClick={() => onNavigate('results')}
              className="text-sm font-bold text-[#1e50ff] hover:text-blue-700 flex items-center space-x-1 transition-colors cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="divide-y divide-slate-100/80">
            {candidates.slice(0, 5).map((candidate, idx) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => onNavigate('profile', candidate.id)}
                className="p-5 flex items-center justify-between hover:bg-slate-50/80 transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-sm transition-transform group-hover:scale-110 ${
                      candidate.rank === 1
                        ? 'bg-gradient-to-br from-amber-100 to-amber-200 text-amber-800 border border-amber-300'
                        : candidate.rank === 2
                        ? 'bg-gradient-to-br from-slate-200 to-slate-300 text-slate-700 border border-slate-300'
                        : candidate.rank === 3
                        ? 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-800 border border-orange-300'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    #{candidate.rank}
                  </div>

                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                      <span>{candidate.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-100 text-slate-600 border border-slate-200/60">
                        {candidate.category}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-slate-500 mt-1">
                      {candidate.experienceYears.toFixed(1)} yrs exp • {candidate.email}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {candidate.atsScore.toFixed(2)}%
                  </div>
                  <div
                    className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 ${
                      candidate.atsScore >= 75 ? 'text-emerald-600' : 'text-slate-500'
                    }`}
                  >
                    {candidate.matchTier}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right 5 Columns: Recent Activities Table / Log */}
        <div className="lg:col-span-5 bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100/80 flex items-center justify-between bg-white/50">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Recent Activities</h2>
              <p className="text-xs font-medium text-slate-500 mt-0.5">Live ATS audit log & background pipeline</p>
            </div>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>

          <div className="p-6 space-y-6 flex-1 overflow-y-auto">
            {activities.map((act, idx) => (
              <motion.div 
                key={act.id} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-4 relative"
              >
                {/* Vertical connecting line for timeline effect */}
                {idx !== activities.length - 1 && (
                  <div className="absolute left-[15px] top-[30px] bottom-[-24px] w-0.5 bg-slate-100"></div>
                )}
                <div
                  className={`relative z-10 w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                    act.badgeType === 'success'
                      ? 'bg-emerald-100 text-emerald-700'
                      : act.badgeType === 'primary'
                      ? 'bg-blue-100 text-blue-700'
                      : act.badgeType === 'warning'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">{act.title}</span>
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">{act.timestamp}</span>
                  </div>
                  <p className="text-slate-600 mt-1.5 text-xs font-medium leading-relaxed">{act.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-5 bg-slate-50/80 border-t border-slate-100/80 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium flex items-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
              DB: <code className="font-mono text-[11px] text-slate-700 font-bold ml-1">ats_database.db</code>
            </span>
            <button
              onClick={() => onNavigate('emails')}
              className="font-bold text-[#1e50ff] hover:text-blue-700 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <span>View Inboxes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
