import React from 'react';
import { motion } from 'framer-motion';
import { Receipt, Search, Filter, Plus, FileText, CheckCircle, Clock, XCircle, CreditCard, DollarSign } from 'lucide-react';

export const ExpensesView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Receipt className="w-6 h-6 mr-3 text-indigo-500" /> Expenses & Travel
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Submit, track, and approve employee expense reports and corporate cards.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Plus className="w-4 h-4" />
            <span>New Expense</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Clock className="w-12 h-12 text-amber-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Pending Approval</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">14</span>
          </div>
          <p className="text-xs font-medium text-amber-500 mt-2 font-bold">$4,250.00 total</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <CheckCircle className="w-12 h-12 text-emerald-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Approved & Processing</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">8</span>
          </div>
          <p className="text-xs font-medium text-emerald-500 mt-2 font-bold">Awaiting next payroll run</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <DollarSign className="w-12 h-12 text-blue-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">YTD Processed</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">$112K</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2 font-bold">Across 420 reports</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden bg-rose-50/30 border-rose-100">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <XCircle className="w-12 h-12 text-rose-500" />
          </div>
          <h3 className="text-sm font-bold text-rose-700 mb-1">Rejected / Returned</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-rose-800">3</span>
          </div>
          <p className="text-xs font-medium text-rose-600 mt-2 font-bold">Action required by employee</p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Expenses Table (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white/50">
             <h2 className="text-lg font-bold text-slate-800">Expense Reports</h2>
             <div className="flex items-center space-x-2">
               <div className="relative w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                   type="text"
                   placeholder="Search by ID, name, or category..."
                   className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-indigo-500 shadow-sm"
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
                   <th className="p-4">Report Details</th>
                   <th className="p-4">Submitted By</th>
                   <th className="p-4">Amount</th>
                   <th className="p-4">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 
                 <tr className="hover:bg-slate-50/50 transition-colors">
                   <td className="p-4">
                     <p className="font-bold text-slate-800 text-sm">Q4 Client Dinner - NYC</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 flex items-center">
                        <FileText className="w-3 h-3 mr-1" /> EXP-2026-8942 • Meals
                     </p>
                   </td>
                   <td className="p-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0">DC</div>
                       <p className="font-bold text-slate-700 text-sm">David Chen</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <p className="font-black text-slate-800 text-sm">$485.20</p>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-md flex items-center inline-flex">
                        <Clock className="w-3 h-3 mr-1" /> Pending Approval
                     </span>
                   </td>
                 </tr>

                 <tr className="hover:bg-slate-50/50 transition-colors">
                   <td className="p-4">
                     <p className="font-bold text-slate-800 text-sm">Flight - AWS re:Invent</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 flex items-center">
                        <FileText className="w-3 h-3 mr-1" /> EXP-2026-8941 • Travel
                     </p>
                   </td>
                   <td className="p-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px] shrink-0">SM</div>
                       <p className="font-bold text-slate-700 text-sm">Sarah Miller</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <p className="font-black text-slate-800 text-sm">$842.00</p>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md flex items-center inline-flex">
                        <CheckCircle className="w-3 h-3 mr-1" /> Approved
                     </span>
                   </td>
                 </tr>

                 <tr className="hover:bg-slate-50/50 transition-colors">
                   <td className="p-4">
                     <p className="font-bold text-slate-800 text-sm">Home Office Monitor</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 flex items-center">
                        <FileText className="w-3 h-3 mr-1" /> EXP-2026-8939 • Equipment
                     </p>
                   </td>
                   <td className="p-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px] shrink-0">JW</div>
                       <p className="font-bold text-slate-700 text-sm">James Wilson</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <p className="font-black text-slate-800 text-sm">$350.00</p>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-1 rounded-md flex items-center inline-flex">
                        <XCircle className="w-3 h-3 mr-1" /> Missing Receipt
                     </span>
                   </td>
                 </tr>
                 
               </tbody>
             </table>
          </div>
        </motion.div>
        
        {/* Corporate Cards & Policies (Right) */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-2xl shadow-lg relative overflow-hidden text-white">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-sm tracking-wider uppercase text-indigo-200">Corporate Card</h3>
                <CreditCard className="w-6 h-6 text-indigo-300" />
             </div>
             <p className="text-xl font-mono tracking-widest mb-1 shadow-sm">**** **** **** 4289</p>
             <p className="text-xs text-indigo-300 font-medium mb-6">Brex Virtual Card</p>
             <div className="flex justify-between items-end">
                <div>
                   <p className="text-[10px] text-indigo-300 uppercase tracking-wider font-bold mb-1">Available Limit</p>
                   <p className="text-xl font-black">$4,500.00</p>
                </div>
                <button className="text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors backdrop-blur-md">Manage</button>
             </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Quick Policies</h3>
             <ul className="space-y-3">
                <li className="flex items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2 shrink-0"></div>
                   <p className="text-xs text-slate-600 font-medium leading-relaxed">Meals are capped at <strong className="text-slate-800">$75/day</strong> for domestic travel.</p>
                </li>
                <li className="flex items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2 shrink-0"></div>
                   <p className="text-xs text-slate-600 font-medium leading-relaxed">Receipts are strictly required for all expenses over <strong className="text-slate-800">$25</strong>.</p>
                </li>
                <li className="flex items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2 shrink-0"></div>
                   <p className="text-xs text-slate-600 font-medium leading-relaxed">Software subscriptions must be pre-approved by IT.</p>
                </li>
             </ul>
             <button className="w-full mt-4 py-2 bg-slate-50 text-indigo-600 hover:text-indigo-700 hover:bg-slate-100 text-xs font-bold rounded-lg transition-colors">
               Read Full Policy Guide
             </button>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
