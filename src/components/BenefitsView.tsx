import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldPlus, PiggyBank, Briefcase, Activity, CheckCircle2, ChevronRight, AlertCircle, Plus } from 'lucide-react';

export const BenefitsView: React.FC = () => {
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
      <div className="absolute top-20 right-1/3 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-20 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Heart className="w-6 h-6 mr-3 text-rose-500" /> Benefits & Perks
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage health plans, retirement accounts, and employee wellness perks.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-orange-500 hover:shadow-lg hover:shadow-rose-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Plus className="w-4 h-4" />
            <span>Add New Perk</span>
          </button>
        </div>
      </motion.div>

      {/* Notice Banner */}
      <motion.div variants={fadeInUp} className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex items-start sm:items-center space-x-4">
         <div className="bg-amber-100 p-2 rounded-full text-amber-600 shrink-0">
            <AlertCircle className="w-5 h-5" />
         </div>
         <div className="flex-1">
            <h3 className="text-amber-800 font-bold text-sm">Open Enrollment Approaches</h3>
            <p className="text-amber-700/80 text-xs font-medium mt-0.5">Annual benefits enrollment runs from Dec 1 to Dec 15. Ensure all plans are updated.</p>
         </div>
         <button className="hidden sm:block px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm">
            Review Plans
         </button>
      </motion.div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Enrolled Plans (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-white/50 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-800">Current Benefit Plans</h2>
              <span className="bg-rose-50 text-rose-600 text-xs font-bold px-2 py-1 rounded-md">3 Active</span>
            </div>
            
            <div className="divide-y divide-slate-100">
               {/* Health Insurance */}
               <div className="p-6 hover:bg-slate-50/50 transition-colors">
                  <div className="flex flex-col sm:flex-row gap-4">
                     <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
                        <ShieldPlus className="w-8 h-8 text-rose-500" />
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                           <h3 className="text-lg font-bold text-slate-800">BlueCross Gold PPO</h3>
                           <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
                        </div>
                        <p className="text-xs font-medium text-slate-500 mb-4">Comprehensive medical, dental, and vision coverage for employees and dependents.</p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Coverage</p>
                              <p className="text-sm font-bold text-slate-700">Family Tier</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Employer Cost</p>
                              <p className="text-sm font-bold text-slate-700">$850/mo</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Employee Cost</p>
                              <p className="text-sm font-bold text-slate-700">$220/mo</p>
                           </div>
                           <div className="text-right sm:text-left">
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Enrolled</p>
                              <p className="text-sm font-bold text-slate-700">114 / 142</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Retirement */}
               <div className="p-6 hover:bg-slate-50/50 transition-colors">
                  <div className="flex flex-col sm:flex-row gap-4">
                     <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <PiggyBank className="w-8 h-8 text-emerald-500" />
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                           <h3 className="text-lg font-bold text-slate-800">Fidelity 401(k) Match</h3>
                           <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
                        </div>
                        <p className="text-xs font-medium text-slate-500 mb-4">Employer matches 100% of the first 4% of eligible compensation contributed.</p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Match Rule</p>
                              <p className="text-sm font-bold text-slate-700">Up to 4%</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Vesting</p>
                              <p className="text-sm font-bold text-slate-700">Immediate</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Provider</p>
                              <p className="text-sm font-bold text-slate-700">Fidelity</p>
                           </div>
                           <div className="text-right sm:text-left">
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Enrolled</p>
                              <p className="text-sm font-bold text-slate-700">98 / 142</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Wellness */}
               <div className="p-6 hover:bg-slate-50/50 transition-colors">
                  <div className="flex flex-col sm:flex-row gap-4">
                     <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                        <Activity className="w-8 h-8 text-orange-500" />
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                           <h3 className="text-lg font-bold text-slate-800">Monthly Wellness Stipend</h3>
                           <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
                        </div>
                        <p className="text-xs font-medium text-slate-500 mb-4">Flexible $100/mo stipend for gym memberships, fitness apps, or mental health resources.</p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Amount</p>
                              <p className="text-sm font-bold text-slate-700">$100/mo</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Type</p>
                              <p className="text-sm font-bold text-slate-700">Reimbursement</p>
                           </div>
                           <div className="col-span-2 text-right sm:text-left">
                              <button className="text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors bg-orange-100 px-3 py-1 rounded-lg">View Claims</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
        
        {/* Employee Perks & Summary (Right) */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
             <div className="p-5 border-b border-slate-100 bg-white/50 flex justify-between items-center">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Additional Perks</h2>
                <button className="text-rose-500 hover:text-rose-600"><Plus className="w-4 h-4" /></button>
             </div>
             <div className="p-4 space-y-3">
                
                <div className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors cursor-pointer group">
                   <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform"><Briefcase className="w-4 h-4 text-slate-600" /></div>
                   <div>
                      <h4 className="font-bold text-slate-700 text-sm">Commuter Benefits</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">Pre-tax transit & parking</p>
                   </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors cursor-pointer group">
                   <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform"><BookOpen className="w-4 h-4 text-slate-600" /></div>
                   <div>
                      <h4 className="font-bold text-slate-700 text-sm">L&D Budget</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">$500/yr for courses & books</p>
                   </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors cursor-pointer group">
                   <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform"><CheckCircle2 className="w-4 h-4 text-slate-600" /></div>
                   <div>
                      <h4 className="font-bold text-slate-700 text-sm">Flexible Fridays</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">No internal meetings after 1PM</p>
                   </div>
                </div>

             </div>
          </div>
          
          <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-5 rounded-2xl border border-rose-100">
             <h3 className="font-bold text-rose-900 text-sm mb-3">Benefits Support</h3>
             <p className="text-xs text-rose-800/80 font-medium mb-4 leading-relaxed">
               Need help with claims or have questions about coverage? Our HR team is available.
             </p>
             <button className="w-full text-xs font-bold text-rose-700 bg-white/60 hover:bg-white px-3 py-2.5 rounded-xl transition-colors border border-rose-200 shadow-sm">
               Contact Benefits Admin
             </button>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
