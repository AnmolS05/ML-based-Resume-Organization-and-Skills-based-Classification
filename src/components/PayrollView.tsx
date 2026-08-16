import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Download, Search, Filter, TrendingUp, CreditCard, Receipt, FileText, CheckCircle2 } from 'lucide-react';

export const PayrollView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <DollarSign className="w-6 h-6 mr-3 text-green-500" /> Payroll & Compensation
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage employee salaries, run payroll cycles, and track expenses.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <CheckCircle2 className="w-4 h-4" />
            <span>Run Payroll</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <DollarSign className="w-12 h-12 text-green-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Next Payroll Date</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">Nov 30</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2 font-bold">Standard Semi-Monthly Cycle</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <TrendingUp className="w-12 h-12 text-emerald-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Estimated Total Run</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">$452.4K</span>
          </div>
          <p className="text-xs font-medium text-amber-500 mt-2 font-bold">+2.4% vs last period (New Hires)</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Receipt className="w-12 h-12 text-blue-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Pending Expenses</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">14</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2 font-bold">Totaling $4,250.00 to reimburse</p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Payroll Roster (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white/50">
             <h2 className="text-lg font-bold text-slate-800">Compensation Roster</h2>
             <div className="flex items-center space-x-2">
               <div className="relative w-48">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                   type="text"
                   placeholder="Search employee..."
                   className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-green-500 shadow-sm"
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
                   <th className="p-4 font-bold">Employee</th>
                   <th className="p-4 font-bold">Role / Dept</th>
                   <th className="p-4 font-bold text-right">Base Salary</th>
                   <th className="p-4 font-bold text-center">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 
                 <tr className="hover:bg-green-50/30 transition-colors">
                   <td className="p-4">
                     <div className="flex items-center space-x-3">
                       <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">DC</div>
                       <p className="font-bold text-slate-800 text-sm whitespace-nowrap">David Chen</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <p className="text-sm font-medium text-slate-700">Senior Engineer</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Engineering</p>
                   </td>
                   <td className="p-4 text-right">
                     <p className="font-black text-slate-800">$145,000</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Per Year</p>
                   </td>
                   <td className="p-4 text-center">
                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">Active</span>
                   </td>
                 </tr>

                 <tr className="hover:bg-green-50/30 transition-colors">
                   <td className="p-4">
                     <div className="flex items-center space-x-3">
                       <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">SM</div>
                       <p className="font-bold text-slate-800 text-sm whitespace-nowrap">Sarah Miller</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <p className="text-sm font-medium text-slate-700">Marketing Lead</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Marketing</p>
                   </td>
                   <td className="p-4 text-right">
                     <p className="font-black text-slate-800">$115,000</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Per Year</p>
                   </td>
                   <td className="p-4 text-center">
                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">Active</span>
                   </td>
                 </tr>

                 <tr className="hover:bg-green-50/30 transition-colors">
                   <td className="p-4">
                     <div className="flex items-center space-x-3">
                       <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">JW</div>
                       <p className="font-bold text-slate-800 text-sm whitespace-nowrap">James Wilson</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <p className="text-sm font-medium text-slate-700">Sales Exec</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Sales</p>
                   </td>
                   <td className="p-4 text-right">
                     <p className="font-black text-slate-800">$95,000</p>
                     <p className="text-[10px] text-emerald-500 font-bold uppercase">+ Commission</p>
                   </td>
                   <td className="p-4 text-center">
                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">Active</span>
                   </td>
                 </tr>
                 
               </tbody>
             </table>
          </div>
        </motion.div>
        
        {/* Quick Actions & Recent Runs (Right) */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
             <div className="p-5 border-b border-slate-100 bg-white/50">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Recent Payroll Runs</h2>
             </div>
             <div className="divide-y divide-slate-100">
                
                <div className="p-4 hover:bg-slate-50/50 transition-colors flex justify-between items-center cursor-pointer">
                   <div>
                      <p className="font-bold text-slate-800 text-sm">Nov 1 - Nov 15</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Paid Nov 15, 2026</p>
                   </div>
                   <div className="text-right flex items-center space-x-3">
                      <p className="font-black text-slate-800 text-sm">$442.1K</p>
                      <button className="text-slate-400 hover:text-green-600 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                   </div>
                </div>

                <div className="p-4 hover:bg-slate-50/50 transition-colors flex justify-between items-center cursor-pointer">
                   <div>
                      <p className="font-bold text-slate-800 text-sm">Oct 16 - Oct 31</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Paid Oct 31, 2026</p>
                   </div>
                   <div className="text-right flex items-center space-x-3">
                      <p className="font-black text-slate-800 text-sm">$440.5K</p>
                      <button className="text-slate-400 hover:text-green-600 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                   </div>
                </div>
                
             </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-100">
             <h3 className="font-bold text-green-900 text-sm mb-3">Quick Actions</h3>
             <div className="space-y-2">
                <button className="w-full flex items-center justify-between bg-white border border-green-200 px-4 py-2.5 rounded-xl hover:shadow-sm hover:border-green-300 transition-all text-sm font-bold text-green-800 group">
                   <span className="flex items-center"><Receipt className="w-4 h-4 mr-2 text-green-600" /> Review Expenses</span>
                   <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded">14 Pending</span>
                </button>
                <button className="w-full flex items-center justify-between bg-white border border-green-200 px-4 py-2.5 rounded-xl hover:shadow-sm hover:border-green-300 transition-all text-sm font-bold text-green-800">
                   <span className="flex items-center"><FileText className="w-4 h-4 mr-2 text-green-600" /> Year-End Tax Docs</span>
                </button>
                <button className="w-full flex items-center justify-between bg-white border border-green-200 px-4 py-2.5 rounded-xl hover:shadow-sm hover:border-green-300 transition-all text-sm font-bold text-green-800">
                   <span className="flex items-center"><CreditCard className="w-4 h-4 mr-2 text-green-600" /> Manage Direct Deposit</span>
                </button>
             </div>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
