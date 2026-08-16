import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Filter, Plus, ChevronRight, TrendingUp, CheckCircle2, Clock, Crosshair } from 'lucide-react';

export const GoalsView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Target className="w-6 h-6 mr-3 text-rose-500" /> OKRs & Goals
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Track company objectives, team goals, and individual key results.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-slate-100 p-1 rounded-xl flex">
             <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white shadow-sm text-slate-800">Q3 2026</button>
             <button className="px-3 py-1.5 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-700 transition-colors">Q4 2026</button>
          </div>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-orange-400 hover:shadow-lg hover:shadow-rose-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Plus className="w-4 h-4" />
            <span>New Goal</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <TrendingUp className="w-16 h-16 text-emerald-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Overall Progress</h3>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-black text-slate-800">68%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-4 overflow-hidden">
             <div className="bg-emerald-500 h-full rounded-full" style={{ width: '68%' }}></div>
          </div>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Clock className="w-16 h-16 text-blue-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">On Track</h3>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-black text-slate-800">12</span>
            <span className="text-sm font-bold text-slate-500 mb-1">/ 15 goals</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-4 overflow-hidden">
             <div className="bg-blue-500 h-full rounded-full" style={{ width: '80%' }}></div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Crosshair className="w-16 h-16 text-amber-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">At Risk</h3>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-black text-slate-800">3</span>
            <span className="text-sm font-bold text-slate-500 mb-1">goals</span>
          </div>
          <p className="text-xs font-medium text-amber-600 mt-2 font-bold">Require immediate attention</p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6">
        
        {/* OKR List */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white/50">
             <h2 className="text-lg font-bold text-slate-800">Engineering Department Goals</h2>
             <div className="flex items-center space-x-2">
               <div className="relative w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                   type="text"
                   placeholder="Search OKRs..."
                   className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-rose-500 shadow-sm"
                 />
               </div>
               <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm">
                 <Filter className="w-4 h-4" />
               </button>
             </div>
          </div>

          <div className="divide-y divide-slate-100">
             
             {/* Objective 1 */}
             <div className="p-6 hover:bg-slate-50/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                   <div className="flex-1">
                      <div className="flex items-center mb-2">
                         <span className="text-[10px] font-bold text-white bg-indigo-600 px-2 py-0.5 rounded mr-2 uppercase tracking-wider">Objective</span>
                         <h3 className="text-lg font-black text-slate-800">Launch the New AI Dashboard</h3>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">Successfully deploy the new Resume Screening Dashboard to production before the end of Q3.</p>
                   </div>
                   <div className="flex flex-col md:items-end min-w-[200px]">
                      <div className="flex justify-between w-full mb-1">
                         <span className="text-xs font-bold text-slate-500">Progress</span>
                         <span className="text-xs font-black text-emerald-600">85%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                         <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <div className="flex -space-x-2">
                         <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-blue-700">DC</div>
                         <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-purple-700">SM</div>
                         <div className="w-6 h-6 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-amber-700">JW</div>
                      </div>
                   </div>
                </div>

                {/* Key Results */}
                <div className="pl-6 space-y-3 relative before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200">
                   
                   <div className="relative pl-6">
                      <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-8 h-0.5 bg-slate-200"></div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm relative z-10">
                         <div className="flex-1">
                            <p className="text-sm font-bold text-slate-700">KR1: Complete all 50 iterations of frontend development.</p>
                         </div>
                         <div className="flex items-center space-x-4 min-w-[200px]">
                            <div className="flex-1">
                               <div className="flex justify-between w-full mb-1">
                                  <span className="text-[10px] font-bold text-slate-400">47 / 50</span>
                                  <span className="text-[10px] font-black text-slate-600">94%</span>
                               </div>
                               <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '94%' }}></div>
                               </div>
                            </div>
                            <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded flex items-center shrink-0">
                               <CheckCircle2 className="w-3 h-3 mr-1" /> On Track
                            </span>
                         </div>
                      </div>
                   </div>

                   <div className="relative pl-6">
                      <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-8 h-0.5 bg-slate-200"></div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm relative z-10">
                         <div className="flex-1">
                            <p className="text-sm font-bold text-slate-700">KR2: Achieve 95% test coverage for all new components.</p>
                         </div>
                         <div className="flex items-center space-x-4 min-w-[200px]">
                            <div className="flex-1">
                               <div className="flex justify-between w-full mb-1">
                                  <span className="text-[10px] font-bold text-slate-400">75% / 95%</span>
                                  <span className="text-[10px] font-black text-slate-600">78%</span>
                               </div>
                               <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '78%' }}></div>
                               </div>
                            </div>
                            <span className="px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded flex items-center shrink-0">
                               <Clock className="w-3 h-3 mr-1" /> At Risk
                            </span>
                         </div>
                      </div>
                   </div>

                </div>
             </div>

             {/* Objective 2 */}
             <div className="p-6 hover:bg-slate-50/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                   <div className="flex-1">
                      <div className="flex items-center mb-2">
                         <span className="text-[10px] font-bold text-white bg-indigo-600 px-2 py-0.5 rounded mr-2 uppercase tracking-wider">Objective</span>
                         <h3 className="text-lg font-black text-slate-800">Improve System Reliability</h3>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">Reduce downtime and improve API response times for core ATS functions.</p>
                   </div>
                   <div className="flex flex-col md:items-end min-w-[200px]">
                      <div className="flex justify-between w-full mb-1">
                         <span className="text-xs font-bold text-slate-500">Progress</span>
                         <span className="text-xs font-black text-blue-600">45%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                         <div className="bg-blue-500 h-full rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <div className="flex -space-x-2">
                         <div className="w-6 h-6 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-emerald-700">RM</div>
                         <div className="w-6 h-6 rounded-full bg-sky-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-sky-700">TL</div>
                      </div>
                   </div>
                </div>

                {/* Key Results */}
                <div className="pl-6 space-y-3 relative before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200">
                   
                   <div className="relative pl-6">
                      <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-8 h-0.5 bg-slate-200"></div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm relative z-10">
                         <div className="flex-1">
                            <p className="text-sm font-bold text-slate-700">KR1: Migrate legacy database to managed PostgreSQL.</p>
                         </div>
                         <div className="flex items-center space-x-4 min-w-[200px]">
                            <div className="flex-1">
                               <div className="flex justify-between w-full mb-1">
                                  <span className="text-[10px] font-bold text-slate-400">Not Started</span>
                                  <span className="text-[10px] font-black text-slate-600">0%</span>
                               </div>
                               <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-slate-300 h-full rounded-full" style={{ width: '0%' }}></div>
                               </div>
                            </div>
                            <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded flex items-center shrink-0">
                               <Clock className="w-3 h-3 mr-1" /> Pending
                            </span>
                         </div>
                      </div>
                   </div>

                </div>
             </div>

          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
