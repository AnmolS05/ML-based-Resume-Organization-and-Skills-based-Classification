import React from 'react';
import { motion } from 'framer-motion';
import { Network, Users, User, ZoomIn, ZoomOut, Download, Filter, Search } from 'lucide-react';

export const OrgChartView: React.FC = () => {
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
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Network className="w-6 h-6 mr-3 text-cyan-500" /> Organization Chart
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Visualize company structure, reporting lines, and department sizes.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
            <button className="p-1.5 hover:bg-white rounded-md transition-colors text-slate-600 shadow-sm"><ZoomOut className="w-4 h-4" /></button>
            <span className="text-xs font-bold px-2 text-slate-500">100%</span>
            <button className="p-1.5 hover:bg-white rounded-md transition-colors text-slate-600 shadow-sm"><ZoomIn className="w-4 h-4" /></button>
          </div>
          <button className="flex items-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-bold transition-all shadow-sm">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30 text-white px-4 py-2 rounded-xl font-bold transition-all">
            <Download className="w-4 h-4" />
            <span>Export PDF</span>
          </button>
        </div>
      </motion.div>

      {/* Org Chart Area */}
      <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-sm border border-slate-200/50 min-h-[600px] relative overflow-hidden flex flex-col items-center">
        
        {/* Search */}
        <div className="absolute top-6 left-6 relative w-64 z-10">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search employee..." className="pl-9 pr-3 py-2 text-sm font-medium bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 w-full shadow-sm" />
        </div>

        {/* Tree Container (Simplified Visual Mockup) */}
        <div className="mt-8 flex flex-col items-center">
          
          {/* CEO */}
          <div className="bg-slate-800 text-white p-4 rounded-xl shadow-lg border border-slate-700 w-64 flex flex-col items-center relative z-10">
             <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-cyan-400 mb-3 flex items-center justify-center">
               <span className="font-bold">ED</span>
             </div>
             <h3 className="font-black text-lg">Elena Davis</h3>
             <p className="text-xs text-cyan-400 font-bold tracking-widest uppercase mt-1">Chief Executive Officer</p>
             <div className="mt-3 flex items-center text-xs text-slate-400 font-medium">
               <Users className="w-3 h-3 mr-1" /> 142 Total Reports
             </div>
          </div>

          {/* Vertical Line */}
          <div className="w-0.5 h-12 bg-slate-300"></div>

          {/* Horizontal Line Connector */}
          <div className="w-[800px] h-0.5 bg-slate-300 relative">
             <div className="absolute left-0 top-0 w-0.5 h-6 bg-slate-300"></div>
             <div className="absolute left-1/3 top-0 w-0.5 h-6 bg-slate-300 -translate-x-1/2"></div>
             <div className="absolute left-2/3 top-0 w-0.5 h-6 bg-slate-300 -translate-x-1/2"></div>
             <div className="absolute right-0 top-0 w-0.5 h-6 bg-slate-300"></div>
          </div>

          {/* VPs Level */}
          <div className="flex justify-between w-[800px] mt-6">
             {/* Engineering */}
             <div className="flex flex-col items-center relative">
                <div className="absolute top-[-24px] left-1/2 w-0.5 h-6 bg-slate-300 -translate-x-1/2"></div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 hover:border-cyan-400 transition-colors cursor-pointer w-52 flex flex-col items-center z-10 hover:-translate-y-1 transform duration-200">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 mb-2 flex items-center justify-center font-bold text-sm">MR</div>
                  <h3 className="font-bold text-slate-800 text-center">Marcus Reynolds</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">VP of Engineering</p>
                  <p className="text-xs text-blue-600 font-bold mt-2">64 Reports</p>
                </div>
             </div>

             {/* Product */}
             <div className="flex flex-col items-center relative">
                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 hover:border-cyan-400 transition-colors cursor-pointer w-52 flex flex-col items-center z-10 hover:-translate-y-1 transform duration-200">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 mb-2 flex items-center justify-center font-bold text-sm">AS</div>
                  <h3 className="font-bold text-slate-800 text-center">Anna Smith</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">VP of Product</p>
                  <p className="text-xs text-purple-600 font-bold mt-2">28 Reports</p>
                </div>
             </div>

             {/* Sales */}
             <div className="flex flex-col items-center relative">
                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 hover:border-cyan-400 transition-colors cursor-pointer w-52 flex flex-col items-center z-10 hover:-translate-y-1 transform duration-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mb-2 flex items-center justify-center font-bold text-sm">JT</div>
                  <h3 className="font-bold text-slate-800 text-center">James Taylor</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">VP of Sales</p>
                  <p className="text-xs text-emerald-600 font-bold mt-2">35 Reports</p>
                </div>
             </div>

             {/* HR */}
             <div className="flex flex-col items-center relative">
                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 hover:border-cyan-400 transition-colors cursor-pointer w-52 flex flex-col items-center z-10 hover:-translate-y-1 transform duration-200">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 mb-2 flex items-center justify-center font-bold text-sm">CW</div>
                  <h3 className="font-bold text-slate-800 text-center">Chloe Wong</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">VP of HR</p>
                  <p className="text-xs text-rose-600 font-bold mt-2">14 Reports</p>
                </div>
             </div>
          </div>

          <div className="mt-16 bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-center max-w-md backdrop-blur-sm">
             <User className="w-6 h-6 text-blue-500 mx-auto mb-2 opacity-50" />
             <p className="text-sm font-medium text-slate-500">Interactive org chart capabilities allows you to click on any node to expand their direct reports and view detailed employee profiles.</p>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
