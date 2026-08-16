import React from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, Search, Filter, Plus, MessageSquare, Clock, CheckCircle2, AlertCircle, Laptop, Shield, User } from 'lucide-react';

export const HelpDeskView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <LifeBuoy className="w-6 h-6 mr-3 text-cyan-500" /> IT Support & Help Desk
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Submit tickets, track requests, and access internal knowledge base.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Plus className="w-4 h-4" />
            <span>New Ticket</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <MessageSquare className="w-12 h-12 text-blue-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Open Tickets</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">12</span>
          </div>
          <p className="text-xs font-medium text-blue-500 mt-2 font-bold">In queue</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Clock className="w-12 h-12 text-amber-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Avg Resolution Time</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">4.2h</span>
          </div>
          <p className="text-xs font-medium text-emerald-500 mt-2 font-bold">-0.5h vs last week</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Resolved Today</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">8</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2 font-bold">Great work!</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden bg-rose-50/30 border-rose-100">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <AlertCircle className="w-12 h-12 text-rose-500" />
          </div>
          <h3 className="text-sm font-bold text-rose-700 mb-1">High Priority</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-rose-800">2</span>
          </div>
          <p className="text-xs font-medium text-rose-600 mt-2 font-bold">Needs immediate action</p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Ticket List (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white/50">
             <h2 className="text-lg font-bold text-slate-800">Ticket Queue</h2>
             <div className="flex items-center space-x-2">
               <div className="relative w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                   type="text"
                   placeholder="Search tickets..."
                   className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-cyan-500 shadow-sm"
                 />
               </div>
               <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm">
                 <Filter className="w-4 h-4" />
               </button>
             </div>
          </div>

          <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-slate-50/50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                   <th className="p-4">Ticket</th>
                   <th className="p-4">Requester</th>
                   <th className="p-4">Priority</th>
                   <th className="p-4">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 
                 <tr className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                   <td className="p-4">
                     <p className="font-bold text-slate-800 text-sm">VPN Access Denied</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 flex items-center">
                        <Shield className="w-3 h-3 mr-1" /> TKT-1042 • Access
                     </p>
                   </td>
                   <td className="p-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0">DC</div>
                       <p className="font-bold text-slate-700 text-sm">David Chen</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-1 rounded-md">High</span>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-md flex items-center inline-flex">
                        <Clock className="w-3 h-3 mr-1" /> Investigating
                     </span>
                   </td>
                 </tr>

                 <tr className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                   <td className="p-4">
                     <p className="font-bold text-slate-800 text-sm">Monitor Flicker</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 flex items-center">
                        <Laptop className="w-3 h-3 mr-1" /> TKT-1041 • Hardware
                     </p>
                   </td>
                   <td className="p-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px] shrink-0">SM</div>
                       <p className="font-bold text-slate-700 text-sm">Sarah Miller</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-md">Medium</span>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded-md flex items-center inline-flex">
                        <User className="w-3 h-3 mr-1" /> Unassigned
                     </span>
                   </td>
                 </tr>

                 <tr className="hover:bg-slate-50/50 transition-colors cursor-pointer opacity-60 hover:opacity-100">
                   <td className="p-4">
                     <p className="font-bold text-slate-800 text-sm line-through">Adobe CC License request</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 flex items-center">
                        <Shield className="w-3 h-3 mr-1" /> TKT-1040 • Software
                     </p>
                   </td>
                   <td className="p-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px] shrink-0">JW</div>
                       <p className="font-bold text-slate-700 text-sm">James Wilson</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">Low</span>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md flex items-center inline-flex">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Closed
                     </span>
                   </td>
                 </tr>
                 
               </tbody>
             </table>
          </div>
        </motion.div>
        
        {/* Knowledge Base & FAQs (Right) */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-gradient-to-br from-cyan-900 to-blue-900 p-6 rounded-2xl shadow-lg relative overflow-hidden text-white">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>
             <h3 className="font-bold text-lg mb-2">Need quick help?</h3>
             <p className="text-xs text-cyan-100 font-medium mb-4 leading-relaxed">
               90% of issues can be resolved using our self-service IT portal and knowledge base.
             </p>
             <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
               <input 
                 type="text"
                 placeholder="Search articles..."
                 className="w-full pl-9 pr-3 py-2 bg-white/20 border border-white/30 rounded-xl text-xs font-medium focus:outline-none focus:bg-white focus:text-slate-800 placeholder-cyan-200 transition-all shadow-sm"
               />
             </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Top Articles</h3>
             <ul className="space-y-3">
                <li className="flex items-start cursor-pointer group">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                   <p className="text-xs text-slate-600 font-bold group-hover:text-cyan-600 transition-colors">How to reset your Okta password</p>
                </li>
                <li className="flex items-start cursor-pointer group">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                   <p className="text-xs text-slate-600 font-bold group-hover:text-cyan-600 transition-colors">Connecting to the Office Printer</p>
                </li>
                <li className="flex items-start cursor-pointer group">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                   <p className="text-xs text-slate-600 font-bold group-hover:text-cyan-600 transition-colors">Requesting software licenses</p>
                </li>
                <li className="flex items-start cursor-pointer group">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                   <p className="text-xs text-slate-600 font-bold group-hover:text-cyan-600 transition-colors">VPN Troubleshooting Guide</p>
                </li>
             </ul>
             <button className="w-full mt-4 py-2 bg-slate-50 text-cyan-600 hover:text-cyan-700 hover:bg-slate-100 text-xs font-bold rounded-lg transition-colors">
               Browse Knowledge Base
             </button>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
