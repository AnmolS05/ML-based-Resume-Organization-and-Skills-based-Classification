import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Sun, Umbrella, Plane, ChevronLeft, ChevronRight, MoreHorizontal, Plus } from 'lucide-react';

export const TimeOffView: React.FC = () => {
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
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Umbrella className="w-6 h-6 mr-3 text-orange-500" /> Time Off & Leave
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage team availability, vacation requests, and sick leave.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg hover:shadow-orange-500/30 text-white px-4 py-2 rounded-xl font-bold transition-all">
            <Plus className="w-4 h-4" />
            <span>Request Time Off</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Plane className="w-12 h-12 text-slate-800" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Total PTO Balance</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">18.5</span>
            <span className="text-sm font-bold text-slate-500 mb-1">days</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">Accrued up to today</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Sun className="w-12 h-12 text-orange-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Used Vacation</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">6.5</span>
            <span className="text-sm font-bold text-slate-500 mb-1">days</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3">
            <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: '35%' }}></div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Clock className="w-12 h-12 text-blue-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Pending Requests</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">2</span>
            <span className="text-sm font-bold text-slate-500 mb-1">requests</span>
          </div>
          <p className="text-xs font-medium text-amber-500 mt-2 font-bold">Awaiting manager approval</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border-none">
          <h3 className="text-sm font-bold text-slate-300 mb-1">Upcoming Holidays</h3>
          <ul className="space-y-3 mt-3">
             <li className="flex justify-between items-center text-sm">
                <span className="text-white font-bold">Thanksgiving</span>
                <span className="text-slate-400 font-medium text-xs bg-slate-700/50 px-2 py-0.5 rounded">Nov 26</span>
             </li>
             <li className="flex justify-between items-center text-sm">
                <span className="text-white font-bold">Winter Break</span>
                <span className="text-slate-400 font-medium text-xs bg-slate-700/50 px-2 py-0.5 rounded">Dec 24-31</span>
             </li>
          </ul>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Calendar View (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white/50">
             <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-slate-800">November 2026</h2>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">Team Calendar</span>
             </div>
             <div className="flex space-x-1">
                <button className="p-1.5 hover:bg-slate-100 rounded-md transition-colors text-slate-600"><ChevronLeft className="w-5 h-5" /></button>
                <button className="px-3 py-1.5 hover:bg-slate-100 rounded-md transition-colors text-slate-700 font-bold text-sm">Today</button>
                <button className="p-1.5 hover:bg-slate-100 rounded-md transition-colors text-slate-600"><ChevronRight className="w-5 h-5" /></button>
             </div>
          </div>
          
          <div className="p-5">
             <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-400 mb-2">
                <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
             </div>
             <div className="grid grid-cols-7 gap-2">
                {/* Simulated Calendar Grid for Nov 2026 */}
                {[...Array(30)].map((_, i) => (
                  <div key={i} className={`h-24 border rounded-xl p-1 relative flex flex-col ${[14, 15, 25, 26, 27].includes(i+1) ? 'bg-orange-50/30 border-orange-100' : 'bg-white border-slate-100 hover:border-slate-200'}`}>
                    <span className={`text-xs font-bold p-1 w-6 h-6 flex items-center justify-center rounded-full ${[14, 15, 25, 26, 27].includes(i+1) ? 'bg-orange-100 text-orange-700' : 'text-slate-500'}`}>
                      {i + 1}
                    </span>
                    
                    {/* Mock Events */}
                    {i + 1 === 12 && (
                       <div className="mt-1 bg-blue-100 border border-blue-200 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded mx-1 truncate">
                          MC - Sick
                       </div>
                    )}
                    {(i + 1 === 14 || i + 1 === 15) && (
                       <div className="mt-1 bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold px-1.5 py-0.5 rounded mx-1 truncate">
                          ED - OOO
                       </div>
                    )}
                    {i + 1 === 26 && (
                       <div className="mt-1 bg-slate-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mx-1 truncate">
                          Holiday
                       </div>
                    )}
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
        
        {/* Requests & Approvals (Right) */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
             <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white/50">
               <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Pending Approvals</h2>
               <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold">2</span>
             </div>
             <div className="divide-y divide-slate-100">
                <div className="p-4 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center space-x-2">
                       <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">AS</div>
                       <div>
                         <p className="font-bold text-slate-800 text-sm">Anna Smith</p>
                         <p className="text-[10px] text-slate-500 font-medium">Vacation (3 days)</p>
                       </div>
                     </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100">"Taking a long weekend to visit family."</p>
                  <p className="text-xs font-bold text-slate-400 mb-3"><CalendarIcon className="w-3 h-3 inline mr-1" /> Nov 18 - Nov 20</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-1.5 rounded-lg text-xs transition-colors border border-emerald-200">Approve</button>
                    <button className="flex-1 bg-white hover:bg-slate-50 text-slate-600 font-bold py-1.5 rounded-lg text-xs transition-colors border border-slate-200">Deny</button>
                  </div>
                </div>
                
                <div className="p-4 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center space-x-2">
                       <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs">CW</div>
                       <div>
                         <p className="font-bold text-slate-800 text-sm">Chloe Wong</p>
                         <p className="text-[10px] text-slate-500 font-medium">Sick Leave (1 day)</p>
                       </div>
                     </div>
                  </div>
                  <p className="text-xs font-bold text-slate-400 mb-3"><CalendarIcon className="w-3 h-3 inline mr-1" /> Today</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-1.5 rounded-lg text-xs transition-colors border border-emerald-200">Approve</button>
                    <button className="flex-1 bg-white hover:bg-slate-50 text-slate-600 font-bold py-1.5 rounded-lg text-xs transition-colors border border-slate-200">Deny</button>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 relative overflow-hidden">
             <div className="absolute -right-4 -bottom-4 opacity-10">
               <Plane className="w-24 h-24 text-blue-600" />
             </div>
             <h3 className="font-black text-blue-900 mb-2 relative z-10">Company Policy Update</h3>
             <p className="text-xs text-blue-800/80 font-medium relative z-10 mb-4 leading-relaxed">
               Unlimited PTO is transitioning to a flexible tiered system starting Jan 1st. Please review the new handbook.
             </p>
             <button className="text-xs font-bold text-blue-700 bg-white/50 hover:bg-white px-3 py-1.5 rounded-lg transition-colors border border-blue-200 relative z-10">
               Read Policy
             </button>
          </div>
          
        </motion.div>
        
      </div>
    </motion.div>
  );
};
