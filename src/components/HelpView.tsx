import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, FileText, Video, MessageSquare, ExternalLink, ChevronRight, BookOpen, AlertCircle } from 'lucide-react';

export const HelpView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header & Search */}
      <motion.div variants={fadeInUp} className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-10 shadow-lg text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
         <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-3xl font-black text-white mb-4">How can we help you today?</h1>
            <p className="text-purple-100 font-medium mb-8">Search for articles, tutorials, and FAQs to get the most out of your HR dashboard.</p>
            
            <div className="relative max-w-xl mx-auto">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
               <input 
                  type="text" 
                  placeholder="e.g. How to approve a time off request..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl shadow-lg border-0 focus:ring-4 focus:ring-purple-300 transition-shadow text-slate-800 font-medium"
               />
               <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                  Search
               </button>
            </div>
         </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Quick Links Categories */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow cursor-pointer group">
           <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
           </div>
           <h3 className="text-lg font-bold text-slate-800 mb-2">Knowledge Base</h3>
           <p className="text-sm text-slate-500 font-medium mb-4">Detailed guides on every feature in the ATS and HRIS platform.</p>
           <span className="text-blue-600 text-xs font-bold flex items-center group-hover:text-blue-700">Browse Articles <ChevronRight className="w-3 h-3 ml-1" /></span>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow cursor-pointer group">
           <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
           </div>
           <h3 className="text-lg font-bold text-slate-800 mb-2">Video Tutorials</h3>
           <p className="text-sm text-slate-500 font-medium mb-4">Step-by-step video walkthroughs for onboarding and workflows.</p>
           <span className="text-rose-600 text-xs font-bold flex items-center group-hover:text-rose-700">Watch Videos <ChevronRight className="w-3 h-3 ml-1" /></span>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow cursor-pointer group">
           <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
           </div>
           <h3 className="text-lg font-bold text-slate-800 mb-2">Contact Support</h3>
           <p className="text-sm text-slate-500 font-medium mb-4">Can't find what you're looking for? Reach out to our team.</p>
           <span className="text-emerald-600 text-xs font-bold flex items-center group-hover:text-emerald-700">Open a Ticket <ChevronRight className="w-3 h-3 ml-1" /></span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* Popular Articles */}
         <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
               <BookOpen className="w-5 h-5 mr-2 text-indigo-500" /> Popular Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="flex items-start space-x-3 group cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-indigo-50 p-2 rounded-lg mt-0.5">
                     <FileText className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-700 text-sm group-hover:text-indigo-600">How to request Time Off</h4>
                     <p className="text-[10px] text-slate-500 mt-1">Learn how to submit PTO and track approvals.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-3 group cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-indigo-50 p-2 rounded-lg mt-0.5">
                     <FileText className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-700 text-sm group-hover:text-indigo-600">Setting up 2FA Security</h4>
                     <p className="text-[10px] text-slate-500 mt-1">Secure your account with two-factor authentication.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-3 group cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-indigo-50 p-2 rounded-lg mt-0.5">
                     <FileText className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-700 text-sm group-hover:text-indigo-600">Navigating the Org Chart</h4>
                     <p className="text-[10px] text-slate-500 mt-1">How to use the interactive organization directory.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-3 group cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-indigo-50 p-2 rounded-lg mt-0.5">
                     <FileText className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-700 text-sm group-hover:text-indigo-600">Submitting an IT Expense</h4>
                     <p className="text-[10px] text-slate-500 mt-1">Upload receipts and request hardware reimbursements.</p>
                  </div>
               </div>
            </div>
         </motion.div>

         {/* System Status */}
         <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-6 flex flex-col justify-between">
            <div>
               <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2 text-slate-400" /> System Status
               </h2>
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-sm font-bold text-slate-700">Core ATS Services</span>
                     <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></div> Operational
                     </span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-sm font-bold text-slate-700">Email Integrations</span>
                     <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></div> Operational
                     </span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-sm font-bold text-slate-700">Analytics Engine</span>
                     <span className="flex items-center text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></div> Degraded
                     </span>
                  </div>
               </div>
            </div>
            <a href="#" className="flex items-center justify-center space-x-2 w-full mt-6 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold rounded-lg transition-colors border border-slate-200">
               <span>View Status Page</span>
               <ExternalLink className="w-3 h-3" />
            </a>
         </motion.div>
      </div>

    </motion.div>
  );
};
