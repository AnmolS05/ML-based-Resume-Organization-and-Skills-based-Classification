import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, FileCode2, Brain, UserCheck, Play, Pause, MoreVertical, Copy, ArrowUpRight } from 'lucide-react';

const mockAssessments = [
  { id: 1, title: 'Senior Frontend Developer Test', category: 'Technical', type: 'React/TypeScript', duration: '90 mins', candidates: 45, completed: 32, passRate: '68%', status: 'Active', icon: <FileCode2 className="w-5 h-5" />, color: 'from-blue-500 to-[#1e50ff]' },
  { id: 2, title: 'Cognitive Ability & Logic', category: 'Cognitive', type: 'Multiple Choice', duration: '45 mins', candidates: 120, completed: 115, passRate: '82%', status: 'Active', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-indigo-500' },
  { id: 3, title: 'Leadership & Behavioral Profile', category: 'Behavioral', type: 'Psychometric', duration: '30 mins', candidates: 25, completed: 25, passRate: 'N/A', status: 'Paused', icon: <UserCheck className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' },
  { id: 4, title: 'Backend Systems Design (Go)', category: 'Technical', type: 'Architecture', duration: '120 mins', candidates: 15, completed: 8, passRate: '45%', status: 'Active', icon: <FileCode2 className="w-5 h-5" />, color: 'from-rose-500 to-orange-500' },
];

export const AssessmentsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredAssessments = mockAssessments.filter(assessment => 
    assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    assessment.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Skills Assessments</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage technical tests, coding challenges, and cognitive evaluations.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold transition-all shadow-sm">
            <span>Template Library</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all group">
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            <span>Create Test</span>
          </button>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
           <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Invites Sent</p>
           <h3 className="text-3xl font-black text-slate-800">205</h3>
           <p className="text-xs font-bold text-emerald-500 mt-2">↑ 24% this month</p>
        </div>
        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
           <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Completion Rate</p>
           <h3 className="text-3xl font-black text-slate-800">87.8%</h3>
           <p className="text-xs font-bold text-emerald-500 mt-2">↑ 2.1% this month</p>
        </div>
        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
           <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Avg. Time to Complete</p>
           <h3 className="text-3xl font-black text-slate-800">2.4 Days</h3>
           <p className="text-xs font-bold text-rose-500 mt-2">↓ 0.3 days slower</p>
        </div>
      </motion.div>

      {/* Toolbar */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-slate-200/50">
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search tests and assessments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all shadow-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 hover:text-purple-600 hover:border-purple-200 transition-all shadow-sm flex items-center space-x-2 px-4">
            <Filter className="w-4 h-4" />
            <span className="font-bold text-sm">Filter</span>
          </button>
        </div>
      </motion.div>

      {/* Assessment Cards */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAssessments.map((assessment) => (
          <div key={assessment.id} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-6 flex flex-col group hover:shadow-md hover:border-purple-200 transition-all">
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${assessment.color} flex items-center justify-center text-white shadow-inner`}>
                  {assessment.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{assessment.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-full">{assessment.category}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-full">{assessment.type}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-full">⏱ {assessment.duration}</span>
                  </div>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 my-6 py-4 border-t border-b border-slate-100">
              <div className="text-center">
                <p className="text-2xl font-black text-slate-700">{assessment.candidates}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Invited</p>
              </div>
              <div className="text-center border-l border-r border-slate-100">
                <p className="text-2xl font-black text-slate-700">{assessment.completed}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-purple-600">{assessment.passRate}</p>
                <p className="text-[10px] font-bold text-purple-600/70 uppercase tracking-wider">Pass Rate</p>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {assessment.status === 'Active' ? (
                  <button className="flex items-center text-xs font-bold text-slate-600 bg-slate-100 hover:bg-amber-50 hover:text-amber-600 px-3 py-1.5 rounded-lg transition-colors">
                    <Pause className="w-3.5 h-3.5 mr-1" /> Pause
                  </button>
                ) : (
                  <button className="flex items-center text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 px-3 py-1.5 rounded-lg transition-colors shadow-sm">
                    <Play className="w-3.5 h-3.5 mr-1" /> Resume
                  </button>
                )}
                <button className="flex items-center text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors">
                  <Copy className="w-3.5 h-3.5 mr-1" /> Copy Link
                </button>
              </div>
              <button className="flex items-center text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors">
                View Results <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>
        ))}
      </motion.div>
      
      {filteredAssessments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 font-medium">No assessments found.</p>
        </div>
      )}
    </motion.div>
  );
};
