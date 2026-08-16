import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Users, TrendingUp, Filter, AlertTriangle, CheckCircle, BarChart2, Globe } from 'lucide-react';

export const DiversityAnalyticsView: React.FC = () => {
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
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-indigo-500" /> DEI Analytics
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Monitor diversity metrics across your hiring pipeline.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-bold transition-all shadow-sm">
            <Filter className="w-4 h-4" />
            <span>Filter by Q3 2026</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-500/30 text-white px-4 py-2 rounded-xl font-bold transition-all">
            <BarChart2 className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <Users className="w-12 h-12 text-indigo-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Female Representation</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">42%</span>
            <span className="text-xs font-bold text-emerald-500 flex items-center mb-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +3%
            </span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">Goal: 50% by 2027</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <PieChart className="w-12 h-12 text-purple-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Underrepresented Groups</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">28%</span>
            <span className="text-xs font-bold text-emerald-500 flex items-center mb-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +5%
            </span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">Across all engineering roles</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <AlertTriangle className="w-12 h-12 text-amber-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Bias Flags Triggered</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">12</span>
            <span className="text-xs font-bold text-emerald-500 flex items-center mb-1">
              <TrendingUp className="w-3 h-3 mr-1 rotate-180" /> -4
            </span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">In job descriptions this month</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <CheckCircle className="w-12 h-12 text-emerald-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Pay Equity Score</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">98/100</span>
          </div>
          <p className="text-xs font-medium text-emerald-600 mt-2 font-bold bg-emerald-50 inline-block px-2 py-0.5 rounded border border-emerald-100">Industry Leader</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pipeline Dropoff */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Pipeline Diversity Dropoff</h2>
          
          <div className="space-y-5">
             <div>
               <div className="flex justify-between text-sm font-bold text-slate-600 mb-2">
                 <span>Applied</span>
                 <span>45% URG</span>
               </div>
               <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                 <div className="bg-indigo-500 h-full" style={{ width: '45%' }}></div>
                 <div className="bg-slate-300 h-full flex-1"></div>
               </div>
             </div>
             
             <div>
               <div className="flex justify-between text-sm font-bold text-slate-600 mb-2">
                 <span>Interviewing</span>
                 <span>38% URG</span>
               </div>
               <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                 <div className="bg-indigo-400 h-full" style={{ width: '38%' }}></div>
                 <div className="bg-slate-300 h-full flex-1"></div>
               </div>
             </div>

             <div>
               <div className="flex justify-between text-sm font-bold text-slate-600 mb-2">
                 <span>Offer Extended</span>
                 <span>35% URG</span>
               </div>
               <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                 <div className="bg-purple-500 h-full" style={{ width: '35%' }}></div>
                 <div className="bg-slate-300 h-full flex-1"></div>
               </div>
             </div>

             <div>
               <div className="flex justify-between text-sm font-bold text-slate-600 mb-2">
                 <span>Hired</span>
                 <span>32% URG</span>
               </div>
               <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                 <div className="bg-purple-600 h-full" style={{ width: '32%' }}></div>
                 <div className="bg-slate-300 h-full flex-1"></div>
               </div>
             </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
            <h4 className="font-bold text-indigo-800 text-sm flex items-center mb-1">
               <AlertTriangle className="w-4 h-4 mr-1.5" /> Insight
            </h4>
            <p className="text-xs text-indigo-700 font-medium leading-relaxed">
              There is a significant drop in URG representation between the Application and Interview stages (-7%). Consider reviewing initial screening criteria or implementing anonymized resume screening.
            </p>
          </div>
        </motion.div>

        {/* Demographics */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Current Workforce Demographics</h2>
          
          <div className="space-y-4">
             {/* Gender */}
             <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Gender Identity</h3>
                <div className="flex h-6 rounded-md overflow-hidden shadow-sm">
                   <div className="bg-indigo-500 text-xs font-bold text-white flex items-center justify-center" style={{ width: '56%' }}>56% M</div>
                   <div className="bg-rose-500 text-xs font-bold text-white flex items-center justify-center" style={{ width: '42%' }}>42% F</div>
                   <div className="bg-purple-400 text-xs font-bold text-white flex items-center justify-center" style={{ width: '2%' }}>2% NB</div>
                </div>
             </div>
             
             {/* Ethnicity */}
             <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Ethnicity Breakdown</h3>
                <div className="space-y-2">
                   <div className="flex items-center text-sm">
                      <div className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></div>
                      <span className="flex-1 font-medium text-slate-600">White / Caucasian</span>
                      <span className="font-bold text-slate-800">55%</span>
                   </div>
                   <div className="flex items-center text-sm">
                      <div className="w-3 h-3 rounded-sm bg-indigo-500 mr-2"></div>
                      <span className="flex-1 font-medium text-slate-600">Asian</span>
                      <span className="font-bold text-slate-800">22%</span>
                   </div>
                   <div className="flex items-center text-sm">
                      <div className="w-3 h-3 rounded-sm bg-purple-500 mr-2"></div>
                      <span className="flex-1 font-medium text-slate-600">Hispanic / Latino</span>
                      <span className="font-bold text-slate-800">12%</span>
                   </div>
                   <div className="flex items-center text-sm">
                      <div className="w-3 h-3 rounded-sm bg-rose-500 mr-2"></div>
                      <span className="flex-1 font-medium text-slate-600">Black / African American</span>
                      <span className="font-bold text-slate-800">8%</span>
                   </div>
                   <div className="flex items-center text-sm">
                      <div className="w-3 h-3 rounded-sm bg-amber-500 mr-2"></div>
                      <span className="flex-1 font-medium text-slate-600">Other</span>
                      <span className="font-bold text-slate-800">3%</span>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
