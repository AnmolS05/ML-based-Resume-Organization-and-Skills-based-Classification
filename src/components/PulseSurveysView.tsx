import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BarChart, Activity, ThumbsUp, Send, Users, ChevronRight, TrendingUp } from 'lucide-react';

export const PulseSurveysView: React.FC = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-6xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Activity className="w-6 h-6 mr-3 text-pink-500" /> Pulse Surveys
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Measure employee engagement, satisfaction, and gather actionable feedback.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:shadow-pink-500/30 text-white px-4 py-2 rounded-xl font-bold transition-all">
            <Send className="w-4 h-4" />
            <span>Launch Survey</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <ThumbsUp className="w-12 h-12 text-pink-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">eNPS Score</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">42</span>
          </div>
          <p className="text-xs font-medium text-emerald-500 mt-2 font-bold flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> +5 pts since last quarter
          </p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Users className="w-12 h-12 text-indigo-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Participation Rate</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">84%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3">
            <div className="bg-indigo-400 h-1.5 rounded-full" style={{ width: '84%' }}></div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <MessageSquare className="w-12 h-12 text-amber-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Active Surveys</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">1</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2 font-bold">Closes in 2 days</p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Active & Recent Surveys (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-white/50 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-800">Active Surveys</h2>
            </div>
            <div className="p-5">
              <div className="border border-pink-200 bg-pink-50/30 rounded-xl p-5 flex flex-col md:flex-row items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-white border border-pink-100 shadow-sm flex items-center justify-center shrink-0">
                    <BarChart className="w-8 h-8 text-pink-500" />
                 </div>
                 <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-1">
                      <h3 className="font-bold text-slate-800 text-lg">Q4 Employee Wellbeing Check-in</h3>
                      <span className="bg-pink-100 text-pink-700 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">Live</span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium mb-3">Understanding team workload, burnout levels, and remote work challenges as we approach year-end.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                       <span className="text-slate-500 font-bold"><strong className="text-slate-800">112/142</strong> Responses (78%)</span>
                       <span className="text-slate-500 font-bold"><strong className="text-amber-600">Closes in:</strong> 2 Days</span>
                    </div>
                 </div>
                 <button className="w-full md:w-auto bg-white border border-slate-200 text-slate-700 font-bold py-2 px-4 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                   View Live Results
                 </button>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-white/50">
              <h2 className="text-lg font-bold text-slate-800">Recent Results</h2>
            </div>
            <div className="divide-y divide-slate-100">
               <div className="p-5 hover:bg-slate-50/50 transition-colors flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center mr-4">
                       <MessageSquare className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Return to Office Feedback</h4>
                      <p className="text-xs font-medium text-slate-400">Conducted: Sep 2026 • 92% Participation</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
               </div>
               
               <div className="p-5 hover:bg-slate-50/50 transition-colors flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mr-4">
                       <BarChart className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">Q3 eNPS & Culture</h4>
                      <p className="text-xs font-medium text-slate-400">Conducted: Jul 2026 • 88% Participation</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
               </div>
            </div>
          </div>
        </motion.div>
        
        {/* Survey Templates (Right) */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden h-fit">
          <div className="p-5 border-b border-slate-100 bg-white/50">
             <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Quick Launch Templates</h2>
          </div>
          <div className="p-4 space-y-3">
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-pink-200 hover:shadow-sm transition-all cursor-pointer group">
                <h4 className="font-bold text-slate-700 text-sm mb-1 group-hover:text-pink-600">Weekly Team Check-in</h4>
                <p className="text-xs text-slate-500 mb-3">5 quick questions on workload and roadblocks.</p>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Est. Time: 2 mins</span>
             </div>
             
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-pink-200 hover:shadow-sm transition-all cursor-pointer group">
                <h4 className="font-bold text-slate-700 text-sm mb-1 group-hover:text-pink-600">Manager Effectiveness</h4>
                <p className="text-xs text-slate-500 mb-3">Anonymous feedback on leadership support and communication.</p>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Est. Time: 5 mins</span>
             </div>

             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-pink-200 hover:shadow-sm transition-all cursor-pointer group">
                <h4 className="font-bold text-slate-700 text-sm mb-1 group-hover:text-pink-600">Diversity & Inclusion</h4>
                <p className="text-xs text-slate-500 mb-3">Assess feelings of belonging and equity within the org.</p>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Est. Time: 7 mins</span>
             </div>
             
             <button className="w-full py-2 text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors bg-pink-50 rounded-lg">
                View All Templates
             </button>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
