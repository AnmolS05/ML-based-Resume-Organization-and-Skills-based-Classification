import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Download, Check, ShieldCheck, Zap, Receipt, AlertCircle } from 'lucide-react';

export const BillingView: React.FC = () => {
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
      className="space-y-6 max-w-5xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Billing & Subscription</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage your plan, payment methods, and invoices.</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
          <Zap className="w-5 h-5" />
          <span>Upgrade Plan</span>
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Current Plan Overview */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50 md:col-span-2">
          <div className="flex justify-between items-start mb-6">
             <div>
               <h2 className="text-lg font-bold text-slate-800 flex items-center">
                 Pro Plan <span className="ml-3 px-2.5 py-0.5 text-xs bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">Active</span>
               </h2>
               <p className="text-sm text-slate-500 mt-1">Next billing date: September 15, 2026</p>
             </div>
             <div className="text-right">
               <span className="text-3xl font-black text-slate-800">$199</span>
               <span className="text-sm font-medium text-slate-500"> / month</span>
             </div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
             <div className="flex justify-between items-center mb-2">
               <span className="text-sm font-bold text-slate-700">Active Jobs Quota</span>
               <span className="text-sm font-bold text-indigo-600">8 / 15</span>
             </div>
             <div className="w-full bg-slate-200 rounded-full h-2">
               <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '53%' }}></div>
             </div>
             <p className="text-xs text-slate-500 mt-2">You can publish 7 more active jobs this billing cycle.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="flex items-start space-x-3">
               <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
               <span className="text-sm font-medium text-slate-600">Unlimited candidate profiles</span>
             </div>
             <div className="flex items-start space-x-3">
               <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
               <span className="text-sm font-medium text-slate-600">AI-powered resume parsing</span>
             </div>
             <div className="flex items-start space-x-3">
               <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
               <span className="text-sm font-medium text-slate-600">Advanced analytics & reporting</span>
             </div>
             <div className="flex items-start space-x-3">
               <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
               <span className="text-sm font-medium text-slate-600">5 Team member accounts</span>
             </div>
          </div>
        </motion.div>

        {/* Payment Method */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Payment Method</h2>
          
          <div className="bg-slate-800 text-white p-5 rounded-xl mb-4 relative overflow-hidden shadow-lg shadow-slate-800/20">
             {/* Card decoration */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
             
             <div className="flex justify-between items-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <span className="font-black italic text-xl">VISA</span>
             </div>
             <div className="font-mono text-lg tracking-widest mb-2">
                •••• •••• •••• 4242
             </div>
             <div className="flex justify-between items-center text-sm font-medium text-slate-300">
                <span>Alex Johnson</span>
                <span>12/28</span>
             </div>
          </div>
          
          <button className="w-full py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors mb-2">
            Update Payment Method
          </button>
          
          <div className="flex items-start mt-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
             <AlertCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
             <p className="text-xs text-amber-700 font-medium">
               Your card will be automatically charged on Sep 15.
             </p>
          </div>
        </motion.div>

        {/* Invoice History */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50 md:col-span-3">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-lg font-bold text-slate-800">Billing History</h2>
             <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700">View All Invoices</button>
          </div>
          
          <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-slate-100">
                   <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                   <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                   <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                   <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                   <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Invoice</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 <tr className="hover:bg-slate-50/50 transition-colors">
                   <td className="py-4 px-4 text-sm font-bold text-slate-700">Aug 15, 2026</td>
                   <td className="py-4 px-4 text-sm font-medium text-slate-600">Pro Plan - Monthly Subscription</td>
                   <td className="py-4 px-4 text-sm font-bold text-slate-800">$199.00</td>
                   <td className="py-4 px-4">
                     <span className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Paid</span>
                   </td>
                   <td className="py-4 px-4 text-right">
                     <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                       <Download className="w-4 h-4" />
                     </button>
                   </td>
                 </tr>
                 <tr className="hover:bg-slate-50/50 transition-colors">
                   <td className="py-4 px-4 text-sm font-bold text-slate-700">Jul 15, 2026</td>
                   <td className="py-4 px-4 text-sm font-medium text-slate-600">Pro Plan - Monthly Subscription</td>
                   <td className="py-4 px-4 text-sm font-bold text-slate-800">$199.00</td>
                   <td className="py-4 px-4">
                     <span className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Paid</span>
                   </td>
                   <td className="py-4 px-4 text-right">
                     <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                       <Download className="w-4 h-4" />
                     </button>
                   </td>
                 </tr>
                 <tr className="hover:bg-slate-50/50 transition-colors">
                   <td className="py-4 px-4 text-sm font-bold text-slate-700">Jun 15, 2026</td>
                   <td className="py-4 px-4 text-sm font-medium text-slate-600">Pro Plan - Monthly Subscription</td>
                   <td className="py-4 px-4 text-sm font-bold text-slate-800">$199.00</td>
                   <td className="py-4 px-4">
                     <span className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Paid</span>
                   </td>
                   <td className="py-4 px-4 text-right">
                     <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                       <Download className="w-4 h-4" />
                     </button>
                   </td>
                 </tr>
               </tbody>
             </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
