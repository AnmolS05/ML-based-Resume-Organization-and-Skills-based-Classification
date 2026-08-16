import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Award, 
  FileText, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Info, 
  Mail, 
  Phone,
  Code,
  Check,
  X
} from 'lucide-react';
import { Candidate, JobRequirement } from '../types';

interface ProfileViewProps {
  candidate: Candidate;
  jobRequirement: JobRequirement;
  onBack: () => void;
  onViewResumeModal: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  candidate,
  jobRequirement,
  onBack,
  onViewResumeModal,
}) => {
  const [activeTab, setActiveTab] = useState<
    'Overview' | 'Skills Match' | 'Experience' | 'Projects' | 'Education' | 'Scores Breakdown'
  >('Overview');

  const tabs = [
    'Overview',
    'Skills Match',
    'Experience',
    'Projects',
    'Education',
    'Scores Breakdown',
  ] as const;

  const isRank1 = candidate.rank === 1;
  const isRank2 = candidate.rank === 2;
  const isRank3 = candidate.rank === 3;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6 max-w-7xl mx-auto pb-16"
    >
      {/* Back Button Navigation Breadcrumb */}
      <motion.div variants={itemVariants}>
        <button
          id="back-to-results-btn"
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-bold text-[#1e50ff] hover:text-blue-700 transition-colors group cursor-pointer bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Results</span>
        </button>
      </motion.div>

      {/* Profile Header Card */}
      <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-slate-200/40 p-6 sm:p-8 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
          {/* Left info */}
          <div className="flex items-start sm:items-center space-x-5">
            {/* Rank Medal Indicator */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
              className="shrink-0 relative group"
            >
              {isRank1 ? (
                <>
                  <div className="absolute -inset-2 bg-amber-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-400 flex flex-col items-center justify-center shadow-lg shadow-amber-500/20">
                    <span className="text-2xl drop-shadow-sm">🥇</span>
                    <span className="text-[10px] font-black text-amber-900 uppercase tracking-widest mt-0.5">Rank #1</span>
                  </div>
                </>
              ) : isRank2 ? (
                <>
                   <div className="absolute -inset-2 bg-slate-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex flex-col items-center justify-center shadow-md">
                    <span className="text-2xl drop-shadow-sm">🥈</span>
                    <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest mt-0.5">Rank #2</span>
                  </div>
                </>
              ) : isRank3 ? (
                <>
                  <div className="absolute -inset-2 bg-amber-700/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-600/40 flex flex-col items-center justify-center shadow-md">
                    <span className="text-2xl drop-shadow-sm">🥉</span>
                    <span className="text-[10px] font-black text-amber-900 uppercase tracking-widest mt-0.5">Rank #3</span>
                  </div>
                </>
              ) : (
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex flex-col items-center justify-center shadow-sm">
                  <span className="text-xl font-black text-slate-700">#{candidate.rank}</span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Rank</span>
                </div>
              )}
            </motion.div>

            {/* Candidate details */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-slate-700 tracking-tight">
                  {candidate.name}
                </h1>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-[#1e50ff] text-[10px] font-black uppercase tracking-widest border border-blue-200 shadow-sm">
                  {candidate.category}
                </span>
              </div>

              <div className="text-sm font-bold text-slate-600 mt-1.5 flex items-center">
                <Briefcase className="w-4 h-4 mr-1.5 text-slate-400" />
                {candidate.experienceYears.toFixed(1)} Years Experience
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 mt-3">
                <span className="flex items-center space-x-1.5 bg-white/50 px-2 py-1 rounded-md border border-slate-100">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{candidate.email}</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-white/50 px-2 py-1 rounded-md border border-slate-100">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{candidate.phone}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right score and action buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-5 pt-5 lg:pt-0 border-t lg:border-t-0 border-slate-100/50">
            <div className="text-left lg:text-right relative group">
              <div className="absolute -inset-4 bg-emerald-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center space-x-3 lg:justify-end relative z-10">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0a192f] to-[#1e50ff] tracking-tighter">
                  {candidate.atsScore.toFixed(2)}<span className="text-2xl text-slate-400">%</span>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest border border-emerald-200 shadow-sm shadow-emerald-500/10">
                  {candidate.matchTier}
                </span>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 relative z-10">Calculated Weighted ATS Match</div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="view-resume-modal-btn"
                onClick={onViewResumeModal}
                className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold text-[#1e50ff] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const blob = new Blob([candidate.rawResumeText || `${candidate.name} Resume Details`], {
                    type: 'text/plain;charset=utf-8',
                  });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${candidate.name.replace(/\s+/g, '_')}_Resume.txt`;
                  a.click();
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Horizontal Tab Navigation Bar */}
        <div className="mt-8 flex overflow-x-auto relative">
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-100 rounded-full"></div>
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-4 px-5 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#1e50ff]'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabIndicatorProfile"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e50ff] rounded-t-full shadow-[0_-2px_10px_rgba(30,80,255,0.5)]" 
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Main Tab Content Grid */}
      <motion.div variants={containerVariants} className="space-y-6">
        
        {/* Section 1: "Why is this candidate ranked #[Rank]?" Banner Card (Always visible on Overview or Scores) */}
        <AnimatePresence mode="wait">
          {(activeTab === 'Overview' || activeTab === 'Scores Breakdown') && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gradient-to-r from-emerald-50/90 to-teal-50/50 backdrop-blur-md border border-emerald-200/60 rounded-2xl p-6 shadow-sm space-y-3 relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="flex items-center space-x-2 text-emerald-800 relative z-10">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                <h2 className="text-base font-black">Why is this candidate ranked #{candidate.rank}?</h2>
              </div>
              <p className="text-sm text-emerald-950 leading-relaxed font-medium relative z-10">
                {candidate.rankExplanationSummary}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Tab Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Overview Tab Content */}
            {activeTab === 'Overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left 6 cols: Matched & Missing Skills Cards */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Matched Skills Card */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-lg shadow-slate-200/40 p-6 space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100/80">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-[#0a192f]">Matched Skills ({candidate.matchedSkills.length})</h3>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 shadow-sm">
                        {candidate.scores.skillsMatchPercentage.toFixed(0)}% Match
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {candidate.matchedSkills.map((skill, idx) => (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          key={skill}
                          className="p-3 bg-gradient-to-br from-emerald-50/50 to-white border border-emerald-200/80 rounded-xl flex items-center space-x-2 text-xs font-bold text-emerald-900 shadow-sm"
                        >
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 stroke-[3]" />
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Missing Skills Card */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-lg shadow-slate-200/40 p-6 space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100/80">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                          <XCircle className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-[#0a192f]">
                          Missing Skills ({candidate.missingSkills.length})
                        </h3>
                      </div>
                      {candidate.missingSkills.length === 0 ? (
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                          All Present
                        </span>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-100">
                          {candidate.missingSkills.length} Gap(s)
                        </span>
                      )}
                    </div>

                    {candidate.missingSkills.length === 0 ? (
                      <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/60 text-sm text-emerald-800 font-bold flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span>No missing skills! Candidate matches 100% of required technical competencies.</span>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2.5">
                        {candidate.missingSkills.map((skill, idx) => (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            key={skill}
                            className="px-4 py-2 bg-rose-50/80 border border-rose-200/80 rounded-xl flex items-center space-x-2 text-xs font-bold text-rose-700 shadow-sm"
                          >
                            <X className="w-3.5 h-3.5 text-rose-500 stroke-[3]" />
                            <span>{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Experience Match Card */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-lg shadow-slate-200/40 p-6 space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100/80">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1e50ff]">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-[#0a192f]">Experience Match</h3>
                      </div>
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm border ${
                          candidate.experienceYears >= candidate.scores.requiredYears
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        {candidate.experienceYears >= candidate.scores.requiredYears
                          ? 'Exceeds target'
                          : 'Below target'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -mr-10 -mt-10"></div>
                      <div className="relative z-10">
                        <div className="text-xl font-black text-[#0a192f]">
                          {candidate.experienceYears.toFixed(1)} <span className="text-sm font-bold text-slate-500">Yrs vs Required</span> {candidate.scores.requiredYears.toFixed(1)} <span className="text-sm font-bold text-slate-500">Yrs</span>
                        </div>
                        <div className="text-xs font-bold text-emerald-600 mt-1 flex items-center">
                          {candidate.experienceYears >= candidate.scores.requiredYears
                            ? <><TrendingUp className="w-3.5 h-3.5 mr-1" /> +{(candidate.experienceYears - candidate.scores.requiredYears).toFixed(1)} years bonus tenure</>
                            : <span className="text-amber-600">{(candidate.scores.requiredYears - candidate.experienceYears).toFixed(1)} years below target</span>}
                        </div>
                      </div>
                      <div className="relative z-10 w-12 h-12 rounded-2xl bg-white text-[#1e50ff] flex items-center justify-center border border-slate-100 shadow-sm">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right 6 cols: Education, Projects Summary, AI Score Explanation */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Education Match Card */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-lg shadow-slate-200/40 p-6 space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100/80">
                      <div className="flex items-center space-x-3">
                         <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-[#0a192f]">Education Match</h3>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200 shadow-sm">
                        Perfect Match
                      </span>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                      <div className="text-sm font-bold text-[#0a192f]">{candidate.educationSummary}</div>
                      <div className="text-xs font-medium text-slate-500">
                        Requirement: {jobRequirement.educationRequirement}
                      </div>
                    </div>
                  </div>

                  {/* Projects Summary Card */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-lg shadow-slate-200/40 p-6 space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100/80">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                          <Layers className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-[#0a192f]">Projects Summary</h3>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 shadow-sm">
                        {candidate.projects.length} Verified
                      </span>
                    </div>

                    <div className="space-y-4">
                      {candidate.projects.map((proj, idx) => (
                        <div key={idx} className="p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm space-y-2.5 hover:shadow-md transition-shadow">
                          <div className="text-sm font-bold text-[#0a192f] flex items-center space-x-2">
                            <Code className="w-4 h-4 text-[#1e50ff]" />
                            <span>{proj.title}</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">{proj.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-1.5">
                            {proj.technologies.map((t) => (
                              <span key={t} className="text-[10px] font-bold bg-white border border-slate-200 px-2.5 py-1 rounded-md text-slate-700 shadow-sm">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Score Explanation & AI Rationale Card */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-lg shadow-slate-200/40 p-6 space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100/80">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1e50ff]">
                          <Award className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-[#0a192f]">AI Rationale Points</h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {candidate.reasons.map((r, idx) => (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          key={idx}
                          className={`p-4 rounded-2xl border text-xs flex items-start space-x-3 shadow-sm ${
                            r.type === 'strength'
                              ? 'bg-gradient-to-r from-emerald-50 to-white border-emerald-200 text-emerald-950 font-medium'
                              : 'bg-gradient-to-r from-rose-50 to-white border-rose-200 text-rose-950 font-medium'
                          }`}
                        >
                          {r.type === 'strength' ? (
                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                               <X className="w-3.5 h-3.5 text-rose-600 stroke-[3]" />
                            </div>
                          )}
                          <span className="leading-relaxed mt-0.5 font-bold">{r.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Other tabs use similar glassmorphic structures */}
            {activeTab !== 'Overview' && (
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-lg shadow-slate-200/40 p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
                 <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <Info className="w-10 h-10 text-slate-300" />
                 </div>
                 <h2 className="text-2xl font-black text-slate-800 mb-2">{activeTab} Details</h2>
                 <p className="text-sm font-medium text-slate-500 max-w-md">
                   This view provides deep-dive analytics into the candidate's {activeTab.toLowerCase()}. 
                   (Placeholder for further UI upgrades)
                 </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
};
