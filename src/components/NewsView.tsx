import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Search, Filter, Plus, Megaphone, Bell, Calendar, ChevronRight, MessageCircle } from 'lucide-react';

export const NewsView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Newspaper className="w-6 h-6 mr-3 text-blue-500" /> Company News
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Stay updated with the latest announcements, events, and updates.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg hover:shadow-blue-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Megaphone className="w-4 h-4" />
            <span>Post Announcement</span>
          </button>
        </div>
      </motion.div>

      {/* Featured News Carousel (Mock) */}
      <motion.div variants={fadeInUp} className="bg-slate-900 rounded-3xl overflow-hidden relative shadow-xl border border-slate-800">
         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>
         <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Featured News" className="w-full h-[300px] object-cover opacity-60" />
         
         <div className="absolute bottom-0 left-0 p-8 z-20 w-full max-w-2xl">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-lg">Company Update</span>
            <h2 className="text-3xl font-black text-white mb-3">Q3 All-Hands Meeting: Record Breaking Quarter!</h2>
            <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">
               Join our CEO for a review of our Q3 performance, celebrating key wins across all departments, and a sneak peek at the product roadmap for Q4.
            </p>
            <button className="bg-white text-slate-900 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors shadow-lg">
               Read Full Summary
            </button>
         </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* News Feed (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white/50">
             <div className="flex bg-slate-100 p-1 rounded-xl">
                <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-white shadow-sm text-slate-800">Latest</button>
                <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-700 transition-colors">Engineering</button>
                <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-700 transition-colors">Events</button>
             </div>
             <div className="flex items-center space-x-2">
               <div className="relative w-48">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                   type="text"
                   placeholder="Search news..."
                   className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-blue-500 shadow-sm"
                 />
               </div>
             </div>
          </div>

          <div className="divide-y divide-slate-100">
             
             {/* News Item 1 */}
             <div className="p-6 hover:bg-slate-50/50 transition-colors flex gap-6 cursor-pointer group">
                <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-200">
                   <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=300" alt="News thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                   <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">Engineering</span>
                      <span className="text-[10px] font-medium text-slate-400 flex items-center">
                         <Calendar className="w-3 h-3 mr-1" /> Aug 14, 2026
                      </span>
                   </div>
                   <h3 className="text-lg font-black text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Migrating our Core Monolith to Microservices</h3>
                   <p className="text-xs text-slate-500 font-medium line-clamp-2 mb-3">
                      The engineering team has successfully completed phase 1 of breaking down the legacy core architecture into scalable, independent microservices...
                   </p>
                   <div className="flex items-center text-[10px] font-bold text-slate-400 mt-auto">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-2">TL</div>
                      <span>Tom Lee</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center hover:text-blue-600 transition-colors"><MessageCircle className="w-3 h-3 mr-1" /> 14 comments</span>
                   </div>
                </div>
             </div>

             {/* News Item 2 */}
             <div className="p-6 hover:bg-slate-50/50 transition-colors flex gap-6 cursor-pointer group">
                <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-200">
                   <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300" alt="News thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                   <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Culture</span>
                      <span className="text-[10px] font-medium text-slate-400 flex items-center">
                         <Calendar className="w-3 h-3 mr-1" /> Aug 12, 2026
                      </span>
                   </div>
                   <h3 className="text-lg font-black text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Welcome to our Summer 2026 Intern Class!</h3>
                   <p className="text-xs text-slate-500 font-medium line-clamp-2 mb-3">
                      We are thrilled to welcome 45 new interns across 8 different departments globally. Be sure to say hello and make them feel at home...
                   </p>
                   <div className="flex items-center text-[10px] font-bold text-slate-400 mt-auto">
                      <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center mr-2">JT</div>
                      <span>Jessica Taylor</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center hover:text-blue-600 transition-colors"><MessageCircle className="w-3 h-3 mr-1" /> 42 comments</span>
                   </div>
                </div>
             </div>
             
          </div>
        </motion.div>
        
        {/* Sidebar Widgets (Right) */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
                <Bell className="w-4 h-4 mr-2 text-amber-500" /> Important Notices
             </h3>
             <ul className="space-y-3">
                <li className="flex items-start bg-amber-50/50 p-3 rounded-xl border border-amber-100/50">
                   <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 shrink-0 animate-pulse"></div>
                   <div>
                      <p className="text-xs text-slate-800 font-bold mb-1">Scheduled IT Maintenance</p>
                      <p className="text-[10px] text-slate-500 font-medium leading-relaxed">VPN and internal network will be down for maintenance this Saturday from 2AM to 4AM PST.</p>
                   </div>
                </li>
                <li className="flex items-start bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div>
                   <div>
                      <p className="text-xs text-slate-800 font-bold mb-1">Benefits Open Enrollment</p>
                      <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Action required: Please review and select your 2027 benefits options by November 15th.</p>
                   </div>
                </li>
             </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center">
                   <Calendar className="w-4 h-4 mr-2 text-indigo-500" /> Upcoming Events
                </h3>
             </div>
             
             <div className="space-y-4">
                <div className="flex items-start group cursor-pointer">
                   <div className="bg-slate-100 rounded-lg p-2 text-center min-w-[50px] mr-3 group-hover:bg-indigo-50 transition-colors">
                      <p className="text-[10px] font-bold text-slate-400 uppercase group-hover:text-indigo-400">Aug</p>
                      <p className="text-lg font-black text-slate-700 group-hover:text-indigo-600">20</p>
                   </div>
                   <div className="pt-1">
                      <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Product Launch Party</p>
                      <p className="text-[10px] font-medium text-slate-400 mt-0.5">HQ Cafeteria • 4:00 PM</p>
                   </div>
                </div>
                
                <div className="flex items-start group cursor-pointer">
                   <div className="bg-slate-100 rounded-lg p-2 text-center min-w-[50px] mr-3 group-hover:bg-indigo-50 transition-colors">
                      <p className="text-[10px] font-bold text-slate-400 uppercase group-hover:text-indigo-400">Aug</p>
                      <p className="text-lg font-black text-slate-700 group-hover:text-indigo-600">28</p>
                   </div>
                   <div className="pt-1">
                      <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Diversity & Inclusion Workshop</p>
                      <p className="text-[10px] font-medium text-slate-400 mt-0.5">Virtual (Zoom) • 10:00 AM</p>
                   </div>
                </div>
             </div>
             <button className="w-full mt-4 py-2 bg-slate-50 text-indigo-600 hover:text-indigo-700 hover:bg-slate-100 text-xs font-bold rounded-lg transition-colors flex items-center justify-center">
               View Full Calendar <ChevronRight className="w-3 h-3 ml-1" />
             </button>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
