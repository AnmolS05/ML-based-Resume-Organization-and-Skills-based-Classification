import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Search, 
  Filter, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  SlidersHorizontal,
  FileSpreadsheet,
  Award,
  ChevronRight,
  RefreshCw,
  BarChart2
} from 'lucide-react';
import { Candidate, JobRequirement } from '../types';

interface ResultsViewProps {
  candidates: Candidate[];
  jobRequirement: JobRequirement;
  onSelectCandidate: (candidateId: number) => void;
  onReAnalyze: () => void;
  onExportReport: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  candidates,
  jobRequirement,
  onSelectCandidate,
  onReAnalyze,
  onExportReport,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [minScore, setMinScore] = useState<number>(0);

  const categories = ['All', 'Web Development', 'Machine Learning', 'Cloud & DevOps', 'Data Science'];

  const filteredCandidates = candidates.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.allSkills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesScore = c.atsScore >= minScore;

    return matchesSearch && matchesCategory && matchesScore;
  });

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
      className="space-y-6 max-w-7xl mx-auto pb-12"
    >
      {/* Page Header */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200/50">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-[#1e50ff] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            <span>AI Automated Ranking Complete</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight">
            Matching Results – {jobRequirement.role}
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            <strong className="text-slate-800">{jobRequirement.totalCandidatesAnalyzed}</strong> candidates analyzed based on weighted ATS metrics.
          </p>
        </div>

        {/* Right-aligned Actions */}
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="download-report-btn"
            onClick={onExportReport}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#1e50ff] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Report</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onReAnalyze}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#1e50ff] to-blue-600 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Re-Analyze</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Filter and Search Controls */}
      <motion.div variants={itemVariants} className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-lg shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full md:w-[350px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search candidate name, skill, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/50 bg-white shadow-inner transition-all font-medium text-slate-700"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Candidate Rankings List / Cards */}
      <motion.div variants={containerVariants} className="space-y-4">
        <AnimatePresence>
          {filteredCandidates.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/50 backdrop-blur-md rounded-3xl p-16 text-center border border-white shadow-xl shadow-slate-200/30 space-y-4"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Search className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-black text-slate-800">No candidates found</h3>
              <p className="text-sm font-medium text-slate-500 max-w-md mx-auto">
                We couldn't find any candidates matching your search term or category filters. Try adjusting your criteria.
              </p>
            </motion.div>
          ) : (
            filteredCandidates.map((candidate, idx) => {
              const isTop1 = candidate.rank === 1;
              const isTop2 = candidate.rank === 2;
              const isTop3 = candidate.rank === 3;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  key={candidate.id}
                  id={`candidate-row-${candidate.id}`}
                  className={`relative group bg-white/80 backdrop-blur-lg rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-5 sm:p-7 ${
                    isTop1
                      ? 'border-amber-300 ring-4 ring-amber-400/20 bg-gradient-to-r from-amber-50/50 via-white to-white'
                      : 'border-white shadow-lg shadow-slate-200/40'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Rank Column & Candidate Info (4 cols) */}
                    <div className="lg:col-span-4 flex items-center space-x-5">
                      {/* Medal / Rank Badge */}
                      <div className="shrink-0 relative">
                        {isTop1 && <div className="absolute -inset-2 bg-amber-400/30 blur-lg rounded-full"></div>}
                        {isTop1 ? (
                          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-400 flex flex-col items-center justify-center shadow-lg shadow-amber-500/20">
                            <span className="text-xl drop-shadow-sm">🥇</span>
                            <span className="text-[11px] font-black text-amber-900 -mt-1">#1</span>
                          </div>
                        ) : isTop2 ? (
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex flex-col items-center justify-center shadow-md">
                            <span className="text-xl">🥈</span>
                            <span className="text-[11px] font-black text-slate-700 -mt-1">#2</span>
                          </div>
                        ) : isTop3 ? (
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 flex flex-col items-center justify-center shadow-md">
                            <span className="text-xl">🥉</span>
                            <span className="text-[11px] font-black text-orange-900 -mt-1">#3</span>
                          </div>
                        ) : (
                          <div className="w-14 h-14 rounded-2xl bg-slate-100/80 border border-slate-200 flex items-center justify-center text-sm font-black text-slate-500 shadow-inner">
                            #{candidate.rank}
                          </div>
                        )}
                      </div>

                      {/* Avatar & Candidate Text */}
                      <div className="overflow-hidden">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-black text-slate-900 truncate">
                            {candidate.name}
                          </h3>
                        </div>
                        <div className="text-sm font-medium text-slate-500 truncate mt-0.5">{candidate.email}</div>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                            {candidate.experienceYears.toFixed(1)} Yrs Exp
                          </span>
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#1e50ff] border border-blue-100">
                            {candidate.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Match Progress Bars (5 cols) */}
                    <div className="lg:col-span-5 space-y-3.5">
                      {/* Skills Match 60% */}
                      <div>
                        <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                          <span className="text-slate-500">Skill Match <span className="font-medium">(60% wgt)</span></span>
                          <span className="text-emerald-600">
                            {candidate.scores.skillsMatchPercentage.toFixed(0)}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${candidate.scores.skillsMatchPercentage}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full rounded-full"
                          ></motion.div>
                        </div>
                      </div>

                      {/* Experience 20% */}
                      <div>
                        <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                          <span className="text-slate-500">Experience <span className="font-medium">(20% wgt)</span></span>
                          <span className="text-[#1e50ff]">
                            {candidate.experienceYears.toFixed(1)} yrs / 2.0 yrs
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${Math.min(100, (candidate.experienceYears / candidate.scores.requiredYears) * 100)}%` 
                            }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="bg-gradient-to-r from-blue-500 to-[#1e50ff] h-full rounded-full"
                          ></motion.div>
                        </div>
                      </div>

                      {/* Sub indicators: Projects (10%) & Education (10%) */}
                      <div className="grid grid-cols-2 gap-5 pt-1">
                        <div>
                          <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                            <span>Projects (10%)</span>
                            <span className="text-amber-600">
                              {candidate.scores.projectsScore * 10}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${candidate.scores.projectsScore * 10}%` }}
                              transition={{ duration: 1, delay: 0.4 }}
                              className="bg-amber-500 h-full rounded-full"
                            ></motion.div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                            <span>Education (10%)</span>
                            <span className="text-purple-600">
                              {(candidate.scores.educationScore * 10).toFixed(0)}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${candidate.scores.educationScore * 10}%` }}
                              transition={{ duration: 1, delay: 0.4 }}
                              className="bg-purple-500 h-full rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Overall Score & Action Button (3 cols) */}
                    <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                      <div className="text-left lg:text-right">
                        <div className={`text-3xl sm:text-4xl font-black tracking-tight ${
                          isTop1 ? 'text-amber-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'
                        }`}>
                          {candidate.atsScore.toFixed(2)}%
                        </div>
                        <div className="text-[11px] font-black text-emerald-600 uppercase tracking-widest mt-1">
                          {candidate.matchTier} Fit
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        id={`view-details-btn-${candidate.id}`}
                        onClick={() => onSelectCandidate(candidate.id)}
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 cursor-pointer shrink-0 group-hover:bg-[#1e50ff] group-hover:shadow-[#1e50ff]/30"
                      >
                        <span>View Full Profile</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>

                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </motion.div>

      {/* Footer Note as specified in requirements */}
      <motion.div variants={itemVariants} className="text-center pt-6 pb-2">
        <p className="text-xs text-slate-400 font-semibold bg-white/50 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-slate-200/60">
          Scores are calculated based on: Skills (60%), Experience (20%), Projects (10%), Education (10%)
        </p>
      </motion.div>
    </motion.div>
  );
};
