import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, Briefcase, Globe, BarChart, ExternalLink, MoreHorizontal, CheckCircle2, AlertCircle } from 'lucide-react';

const mockBoards = [
  { id: 1, name: 'LinkedIn', type: 'Professional Network', status: 'Active', posts: 12, clicks: 1245, applicants: 156, color: 'bg-blue-600', icon: 'in' },
  { id: 2, name: 'Indeed', type: 'Job Search Engine', status: 'Active', posts: 15, clicks: 3420, applicants: 420, color: 'bg-[#2164f4]', icon: 'I' },
  { id: 3, name: 'Glassdoor', type: 'Company Reviews', status: 'Paused', posts: 5, clicks: 890, applicants: 45, color: 'bg-[#0caa41]', icon: 'G' },
  { id: 4, name: 'Wellfound', type: 'Startup Jobs', status: 'Active', posts: 8, clicks: 650, applicants: 112, color: 'bg-slate-900', icon: 'W' },
  { id: 5, name: 'Monster', type: 'Job Board', status: 'Error', posts: 3, clicks: 0, applicants: 0, color: 'bg-purple-600', icon: 'M' },
  { id: 6, name: 'Company Careers Page', type: 'Internal', status: 'Active', posts: 25, clicks: 5600, applicants: 890, color: 'bg-indigo-600', icon: 'C' },
];

export const JobBoardsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredBoards = mockBoards.filter(board => 
    board.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    board.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Job Boards & Sourcing</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Distribute job postings across multiple platforms and track performance.</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all group">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span>New Campaign</span>
        </button>
      </motion.div>

      {/* Stats Overview */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
           <div className="flex items-center space-x-3 mb-2">
             <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
               <Briefcase className="w-4 h-4 text-emerald-600" />
             </div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Posts</p>
           </div>
           <h3 className="text-2xl font-black text-slate-800">68</h3>
           <p className="text-xs font-bold text-emerald-500 mt-1 flex items-center"><span className="text-emerald-500 mr-1">↑ 12%</span> vs last month</p>
        </div>
        
        <div className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
           <div className="flex items-center space-x-3 mb-2">
             <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
               <Globe className="w-4 h-4 text-blue-600" />
             </div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Views</p>
           </div>
           <h3 className="text-2xl font-black text-slate-800">11.8k</h3>
           <p className="text-xs font-bold text-emerald-500 mt-1 flex items-center"><span className="text-emerald-500 mr-1">↑ 8%</span> vs last month</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
           <div className="flex items-center space-x-3 mb-2">
             <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
               <BarChart className="w-4 h-4 text-indigo-600" />
             </div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Applicants</p>
           </div>
           <h3 className="text-2xl font-black text-slate-800">1,623</h3>
           <p className="text-xs font-bold text-rose-500 mt-1 flex items-center"><span className="text-rose-500 mr-1">↓ 3%</span> vs last month</p>
        </div>
        
        <div className="bg-gradient-to-br from-[#0a192f] to-[#1e50ff] p-5 rounded-2xl shadow-lg border border-blue-500/20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
           <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2 relative z-10">Best Channel</p>
           <h3 className="text-xl font-black relative z-10">Indeed</h3>
           <p className="text-xs font-medium text-blue-100 mt-1 relative z-10">Delivered 45% of high-quality candidates this week.</p>
        </div>
      </motion.div>

      {/* Toolbar */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-slate-200/50">
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search platforms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm flex items-center space-x-2 px-4">
            <Filter className="w-4 h-4" />
            <span className="font-bold text-sm">Filter</span>
          </button>
        </div>
      </motion.div>

      {/* Boards Grid */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBoards.map((board) => (
          <div key={board.id} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-6 hover:shadow-md hover:border-emerald-200 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 rounded-2xl ${board.color} flex items-center justify-center font-black text-2xl text-white shadow-inner shadow-black/10`}>
                {board.icon}
              </div>
              <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-slate-800">{board.name}</h3>
                {board.status === 'Active' && <span className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full"><CheckCircle2 className="w-3 h-3 mr-1" /> Active</span>}
                {board.status === 'Paused' && <span className="flex items-center text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">Paused</span>}
                {board.status === 'Error' && <span className="flex items-center text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full"><AlertCircle className="w-3 h-3 mr-1" /> Sync Error</span>}
              </div>
              <p className="text-sm font-medium text-slate-500">{board.type}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-slate-100 mb-4">
              <div className="text-center">
                <p className="text-xl font-black text-slate-700">{board.posts}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Posts</p>
              </div>
              <div className="text-center border-l border-r border-slate-100">
                <p className="text-xl font-black text-slate-700">{board.clicks}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clicks</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black text-emerald-600">{board.applicants}</p>
                <p className="text-[10px] font-bold text-emerald-600/70 uppercase tracking-wider">Apps</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
               <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Manage Sync</button>
               <button className="flex items-center space-x-1 text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors">
                 <span>View Portal</span>
                 <ExternalLink className="w-3 h-3" />
               </button>
            </div>
          </div>
        ))}
      </motion.div>
      
      {filteredBoards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 font-medium">No job boards found.</p>
        </div>
      )}
    </motion.div>
  );
};
