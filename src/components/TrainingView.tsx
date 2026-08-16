import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, PlayCircle, BookOpen, Award, CheckCircle, Clock, Search, Filter } from 'lucide-react';

export const TrainingView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-sky-500" /> Training & Development
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage employee learning paths, courses, and certifications.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 shadow-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 shadow-sm">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Hero / Featured Course */}
      <motion.div variants={fadeInUp} className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl overflow-hidden shadow-lg relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-500/20 to-transparent"></div>
         <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-white">
               <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Mandatory Training</span>
               <h2 className="text-3xl md:text-4xl font-black mb-4">Security Awareness 2026</h2>
               <p className="text-slate-300 text-sm mb-6 max-w-lg leading-relaxed">
                 Annual compliance training covering phishing, data protection (GDPR/CCPA), and secure remote work practices. Required for all employees.
               </p>
               <div className="flex items-center space-x-6 text-sm font-medium text-slate-300 mb-8">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-sky-400" /> 45 Mins</span>
                  <span className="flex items-center"><BookOpen className="w-4 h-4 mr-2 text-sky-400" /> 3 Modules</span>
                  <span className="flex items-center"><Award className="w-4 h-4 mr-2 text-sky-400" /> Certificate</span>
               </div>
               <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-sky-500/30 flex items-center">
                 <PlayCircle className="w-5 h-5 mr-2" /> Start Course
               </button>
            </div>
            
            <div className="hidden md:block w-64 h-64 relative">
               {/* Mock Video Thumbnail */}
               <div className="absolute inset-0 bg-slate-800 rounded-2xl border-4 border-slate-700 overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer">
                  <div className="w-full h-full bg-indigo-900/40 absolute inset-0 group-hover:bg-indigo-900/20 transition-colors"></div>
                  <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all z-10" />
               </div>
            </div>
         </div>
      </motion.div>

      {/* Course Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         
         <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 hover:border-sky-300 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <GraduationCap className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Leadership</h3>
            <p className="text-xs text-slate-500 font-medium mb-3">Management & Strategy</p>
            <div className="flex justify-between items-center text-xs font-bold">
               <span className="text-sky-600 bg-sky-50 px-2 py-1 rounded">12 Courses</span>
            </div>
         </motion.div>

         <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 hover:border-indigo-300 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Technical Skills</h3>
            <p className="text-xs text-slate-500 font-medium mb-3">Engineering & Data</p>
            <div className="flex justify-between items-center text-xs font-bold">
               <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded">34 Courses</span>
            </div>
         </motion.div>

         <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 hover:border-emerald-300 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Compliance</h3>
            <p className="text-xs text-slate-500 font-medium mb-3">HR & Legal Requirements</p>
            <div className="flex justify-between items-center text-xs font-bold">
               <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded">8 Courses</span>
            </div>
         </motion.div>

         <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 hover:border-amber-300 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <Award className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Certifications</h3>
            <p className="text-xs text-slate-500 font-medium mb-3">External Prep & Exams</p>
            <div className="flex justify-between items-center text-xs font-bold">
               <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded">15 Courses</span>
            </div>
         </motion.div>

      </div>
      
      {/* My Learning Path */}
      <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
         <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/50">
            <h2 className="text-lg font-bold text-slate-800">My Learning Path</h2>
            <button className="text-sm font-bold text-sky-600 hover:text-sky-700">View History</button>
         </div>
         
         <div className="divide-y divide-slate-100">
            
            <div className="p-6 hover:bg-slate-50/50 transition-colors flex flex-col md:flex-row gap-6 items-center">
               <div className="w-32 h-20 bg-slate-200 rounded-lg relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80"></div>
                  <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-90" />
               </div>
               <div className="flex-1 w-full text-center md:text-left">
                  <h3 className="font-bold text-slate-800 mb-1">Advanced React Patterns</h3>
                  <p className="text-xs text-slate-500 mb-3">Learn state machines, compound components, and render props.</p>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                     <div className="flex-1 max-w-[200px] bg-slate-100 rounded-full h-1.5">
                        <div className="bg-sky-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                     </div>
                     <span className="text-xs font-bold text-slate-500">45%</span>
                  </div>
               </div>
               <button className="w-full md:w-auto bg-white border border-slate-200 text-slate-700 font-bold px-4 py-2 rounded-xl text-sm shadow-sm hover:bg-slate-50 transition-colors">
                  Resume
               </button>
            </div>
            
            <div className="p-6 hover:bg-slate-50/50 transition-colors flex flex-col md:flex-row gap-6 items-center">
               <div className="w-32 h-20 bg-slate-200 rounded-lg relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-80"></div>
                  <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-90" />
               </div>
               <div className="flex-1 w-full text-center md:text-left">
                  <h3 className="font-bold text-slate-800 mb-1">Effective 1-on-1s</h3>
                  <p className="text-xs text-slate-500 mb-3">Management series: Coaching and feedback strategies.</p>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                     <div className="flex-1 max-w-[200px] bg-slate-100 rounded-full h-1.5">
                        <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '0%' }}></div>
                     </div>
                     <span className="text-xs font-bold text-slate-500">0%</span>
                  </div>
               </div>
               <button className="w-full md:w-auto bg-sky-50 border border-sky-100 text-sky-700 font-bold px-4 py-2 rounded-xl text-sm shadow-sm hover:bg-sky-100 transition-colors">
                  Start
               </button>
            </div>

         </div>
      </motion.div>
      
    </motion.div>
  );
};
