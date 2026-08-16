import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, AlertOctagon, FileCheck, Search, Download, Trash2, ArrowRight } from 'lucide-react';

export const ComplianceView: React.FC = () => {
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
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <ShieldCheck className="w-6 h-6 mr-3 text-emerald-500" /> Compliance & Privacy
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage GDPR, CCPA requests, and data retention policies.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/30 text-white px-4 py-2 rounded-xl font-bold transition-all">
            <Download className="w-4 h-4" />
            <span>Export Compliance Report</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <AlertOctagon className="w-12 h-12 text-rose-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Active Subject Requests</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">4</span>
          </div>
          <p className="text-xs font-medium text-rose-500 mt-2 flex items-center">
            <span className="w-2 h-2 rounded-full bg-rose-500 mr-1.5 animate-pulse"></span>
            2 requests due within 48 hours
          </p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <Trash2 className="w-12 h-12 text-slate-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Auto-Deletions Pending</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">142</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">Profiles exceeding 24-month retention</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <FileCheck className="w-12 h-12 text-emerald-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Compliance Status</h3>
          <div className="flex items-end space-x-2">
            <span className="text-2xl font-black text-emerald-600">Compliant</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2">Last automated scan: 2 hours ago</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Data Subject Requests */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Data Subject Requests</h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search by email..." className="pl-9 pr-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 w-48" />
            </div>
          </div>
          
          <div className="space-y-3">
             {/* Request 1 */}
             <div className="p-4 bg-slate-50 rounded-xl border border-rose-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700">Deletion (Right to be Forgotten)</span>
                  </div>
                  <p className="font-bold text-slate-700">m.zhang@example.com</p>
                  <p className="text-xs text-slate-500">Requested: Oct 10 • Deadline: Nov 10</p>
                </div>
                <button className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg transition-colors">
                  Process Deletion
                </button>
             </div>
             
             {/* Request 2 */}
             <div className="p-4 bg-slate-50 rounded-xl border border-amber-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">Data Access (Portability)</span>
                  </div>
                  <p className="font-bold text-slate-700">j.smith@email.com</p>
                  <p className="text-xs text-slate-500">Requested: Oct 28 • Deadline: Nov 28</p>
                </div>
                <button className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-lg transition-colors">
                  Generate Archive
                </button>
             </div>
             
             {/* Request 3 */}
             <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between opacity-70">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">Completed</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700">Deletion</span>
                  </div>
                  <p className="font-bold text-slate-700">a.cooper@test.com</p>
                  <p className="text-xs text-slate-500">Processed by System on Oct 25</p>
                </div>
                <CheckCircle className="w-5 h-5 text-emerald-500" />
             </div>
          </div>
          
          <button className="w-full mt-4 py-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
            View Request History <ArrowRight className="w-4 h-4 inline ml-1" />
          </button>
        </motion.div>

        {/* Data Retention Policies */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Data Retention Settings</h2>
          
          <div className="space-y-6">
             <div>
                <div className="flex justify-between items-center mb-2">
                   <h3 className="text-sm font-bold text-slate-700">Candidate Profiles (Inactive)</h3>
                   <span className="text-sm font-bold text-slate-800">24 Months</span>
                </div>
                <p className="text-xs text-slate-500 mb-3">Automatically anonymize or delete candidates who have not had any activity or applications for this duration.</p>
                <div className="flex items-center space-x-4">
                   <input type="range" min="6" max="36" defaultValue="24" className="w-full accent-emerald-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                </div>
             </div>
             
             <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center mb-2">
                   <h3 className="text-sm font-bold text-slate-700">Application Documents (Resumes/Portfolios)</h3>
                   <span className="text-sm font-bold text-slate-800">12 Months</span>
                </div>
                <p className="text-xs text-slate-500 mb-3">Permanently delete attached files for rejected candidates.</p>
                <div className="flex items-center space-x-4">
                   <input type="range" min="1" max="24" defaultValue="12" className="w-full accent-emerald-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                </div>
             </div>
             
             <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-bold text-blue-900 text-sm">Automated Anonymization</p>
                      <p className="text-xs text-blue-700">Scrub PII from analytics when deleted</p>
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" defaultChecked/>
                    <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-blue-500 cursor-pointer"></label>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
