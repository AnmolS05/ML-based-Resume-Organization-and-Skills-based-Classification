import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Circle, Clock, Users, FileCheck, ArrowRight, UserPlus } from 'lucide-react';

export const OnboardingView: React.FC = () => {
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
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <UserPlus className="w-6 h-6 mr-3 text-emerald-500" /> Employee Onboarding
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Track progress of new hires through the onboarding checklist.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/30 text-white px-4 py-2 rounded-xl font-bold transition-all">
            <Briefcase className="w-4 h-4" />
            <span>Manage Templates</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <Users className="w-12 h-12 text-emerald-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Active Onboardings</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">12</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">New hires starting this month</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <CheckCircle2 className="w-12 h-12 text-teal-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Avg. Time to Complete</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">4.2</span>
            <span className="text-sm font-bold text-slate-500 mb-1">days</span>
          </div>
          <p className="text-xs font-medium text-emerald-500 mt-2 font-bold">-0.5 days vs last month</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <Clock className="w-12 h-12 text-amber-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Overdue Tasks</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">3</span>
          </div>
          <p className="text-xs font-medium text-amber-600 mt-2 font-bold">Action required across 2 profiles</p>
        </motion.div>
      </div>

      {/* Active Onboardings List */}
      <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
           <h2 className="text-lg font-bold text-slate-800">In Progress</h2>
        </div>
        
        <div className="divide-y divide-slate-100">
          
          {/* Item 1 */}
          <div className="p-6 hover:bg-slate-50/50 transition-colors flex flex-col md:flex-row gap-6">
            <div className="flex-1">
               <div className="flex justify-between items-start mb-2">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">DC</div>
                   <div>
                     <h3 className="font-black text-slate-800 text-lg leading-tight">David Chen</h3>
                     <p className="text-sm text-slate-500 font-medium">Software Engineer • IT Dept</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Start Date</p>
                   <p className="text-sm font-bold text-slate-700">Nov 15, 2026</p>
                 </div>
               </div>
               
               <div className="mt-6 flex items-center space-x-2">
                 <div className="flex-1 bg-slate-100 rounded-full h-2">
                   <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                 </div>
                 <span className="text-xs font-bold text-slate-500 w-10 text-right">60%</span>
               </div>
            </div>
            
            <div className="md:w-64 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Tasks (3 of 5)</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-400 line-through">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Background Check
                </li>
                <li className="flex items-center text-sm text-slate-400 line-through">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> IT Equipment
                </li>
                <li className="flex items-center text-sm text-slate-400 line-through">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Legal Documents
                </li>
                <li className="flex items-center text-sm font-bold text-slate-700">
                  <Circle className="w-4 h-4 mr-2 text-slate-300" /> Setup Payroll
                </li>
                <li className="flex items-center text-sm font-bold text-slate-700">
                  <Circle className="w-4 h-4 mr-2 text-slate-300" /> Team Welcome
                </li>
              </ul>
              <button className="w-full mt-4 bg-white border border-slate-200 text-slate-700 font-bold py-1.5 rounded-lg text-xs hover:bg-slate-50 transition-colors">
                View Details
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-6 hover:bg-slate-50/50 transition-colors flex flex-col md:flex-row gap-6">
            <div className="flex-1">
               <div className="flex justify-between items-start mb-2">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">SM</div>
                   <div>
                     <h3 className="font-black text-slate-800 text-lg leading-tight">Sarah Miller</h3>
                     <p className="text-sm text-slate-500 font-medium">Marketing Manager • Mktg Dept</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Start Date</p>
                   <p className="text-sm font-bold text-slate-700">Nov 10, 2026</p>
                 </div>
               </div>
               
               <div className="mt-6 flex items-center space-x-2">
                 <div className="flex-1 bg-slate-100 rounded-full h-2">
                   <div className="bg-amber-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                 </div>
                 <span className="text-xs font-bold text-slate-500 w-10 text-right">20%</span>
               </div>
            </div>
            
            <div className="md:w-64 bg-rose-50/30 p-4 rounded-xl border border-rose-100">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Tasks (1 of 5)</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-400 line-through">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Welcome Email
                </li>
                <li className="flex items-center text-sm font-bold text-rose-600">
                  <Circle className="w-4 h-4 mr-2 text-rose-500 fill-rose-100" /> Background Check
                  <span className="ml-auto text-[10px] bg-rose-100 px-1.5 py-0.5 rounded text-rose-700">Overdue</span>
                </li>
                <li className="flex items-center text-sm font-bold text-slate-700">
                  <Circle className="w-4 h-4 mr-2 text-slate-300" /> IT Equipment
                </li>
                <li className="flex items-center text-sm font-bold text-slate-700">
                  <Circle className="w-4 h-4 mr-2 text-slate-300" /> Legal Documents
                </li>
                <li className="flex items-center text-sm font-bold text-slate-700">
                  <Circle className="w-4 h-4 mr-2 text-slate-300" /> Setup Payroll
                </li>
              </ul>
              <button className="w-full mt-4 bg-white border border-rose-200 text-rose-700 font-bold py-1.5 rounded-lg text-xs hover:bg-rose-50 transition-colors shadow-sm">
                Send Reminder
              </button>
            </div>
          </div>

        </div>
        
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
           <button className="text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors inline-flex items-center">
              View All 12 Active Onboardings <ArrowRight className="w-4 h-4 ml-1" />
           </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
