import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, TrendingUp, Calendar, Search, Star, MessageSquare, Download, Filter } from 'lucide-react';

export const PerformanceReviewsView: React.FC = () => {
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
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Award className="w-6 h-6 mr-3 text-rose-500" /> Performance Reviews
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage employee evaluations, goals, and 360 feedback.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-bold transition-all shadow-sm">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-orange-500 hover:shadow-lg hover:shadow-rose-500/30 text-white px-4 py-2 rounded-xl font-bold transition-all">
            <Calendar className="w-4 h-4" />
            <span>Start Review Cycle</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <Target className="w-12 h-12 text-rose-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Active Cycles</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">Q3 '26</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2 flex items-center">
             Ends in 14 days
          </p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <Award className="w-12 h-12 text-orange-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Completion Rate</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">68%</span>
            <span className="text-xs font-bold text-emerald-500 flex items-center mb-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +12%
            </span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">120/176 submitted</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <Star className="w-12 h-12 text-amber-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Top Performers</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">14</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">Rated "Exceeds Expectations"</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <MessageSquare className="w-12 h-12 text-purple-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">360 Feedback</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">842</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">Comments received</p>
        </motion.div>
      </div>

      {/* Review List */}
      <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-lg font-bold text-slate-800">Employee Reviews</h2>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search employee..." className="pl-9 pr-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-rose-500 w-64" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-4">Employee</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Manager</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Score</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-4">
                     <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">SL</div>
                        <div>
                           <p className="font-bold text-slate-800 text-sm">Sarah Lee</p>
                           <p className="text-xs text-slate-500">Senior Engineer</p>
                        </div>
                     </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-slate-600">Engineering</td>
                  <td className="py-4 px-4 text-sm font-medium text-slate-600">David Kim</td>
                  <td className="py-4 px-4">
                     <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        Completed
                     </span>
                  </td>
                  <td className="py-4 px-4">
                     <div className="flex text-amber-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 text-slate-200" />
                     </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                     <button className="text-rose-600 hover:text-rose-800 text-sm font-bold transition-colors">View</button>
                  </td>
               </tr>

               <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-4">
                     <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">MJ</div>
                        <div>
                           <p className="font-bold text-slate-800 text-sm">Michael Johnson</p>
                           <p className="text-xs text-slate-500">Product Manager</p>
                        </div>
                     </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-slate-600">Product</td>
                  <td className="py-4 px-4 text-sm font-medium text-slate-600">Anna Smith</td>
                  <td className="py-4 px-4">
                     <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                        Manager Review
                     </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-400 italic">Pending</td>
                  <td className="py-4 px-4 text-right">
                     <button className="text-rose-600 hover:text-rose-800 text-sm font-bold transition-colors">Remind</button>
                  </td>
               </tr>

               <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-4">
                     <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs">EW</div>
                        <div>
                           <p className="font-bold text-slate-800 text-sm">Emily Wong</p>
                           <p className="text-xs text-slate-500">UX Designer</p>
                        </div>
                     </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-slate-600">Design</td>
                  <td className="py-4 px-4 text-sm font-medium text-slate-600">Anna Smith</td>
                  <td className="py-4 px-4">
                     <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        Self-Evaluation
                     </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-400 italic">Pending</td>
                  <td className="py-4 px-4 text-right">
                     <button className="text-rose-600 hover:text-rose-800 text-sm font-bold transition-colors">Remind</button>
                  </td>
               </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};
