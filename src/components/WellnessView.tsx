import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Activity, Coffee, Smile, Headphones, BookOpen, Calendar, ArrowRight, Video, Flame } from 'lucide-react';

export const WellnessView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <HeartPulse className="w-6 h-6 mr-3 text-emerald-500" /> Wellness & Mental Health
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Resources, benefits, and support for your physical and mental well-being.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Activity className="w-4 h-4" />
            <span>Book Therapy Session</span>
          </button>
        </div>
      </motion.div>

      {/* Wellness Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Flame className="w-12 h-12 text-orange-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Wellness Subsidy</h3>
          <div className="flex items-end space-x-2 mt-2">
            <span className="text-3xl font-black text-slate-800">$150</span>
            <span className="text-sm font-bold text-slate-400 mb-1">remaining</span>
          </div>
          <p className="text-[10px] font-bold text-emerald-600 mt-3 uppercase tracking-wider">Refills next month</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Smile className="w-12 h-12 text-emerald-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Mental Health Days</h3>
          <div className="flex items-end space-x-2 mt-2">
            <span className="text-3xl font-black text-slate-800">2</span>
            <span className="text-sm font-bold text-slate-400 mb-1">/ 5 days</span>
          </div>
          <p className="text-[10px] font-bold text-slate-400 mt-3 uppercase tracking-wider">No questions asked</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden flex flex-col justify-between lg:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Headphones className="w-24 h-24 text-white" />
          </div>
          <div>
             <span className="bg-indigo-500/50 text-indigo-100 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Modern Health</span>
             <h3 className="text-lg font-black text-white mb-1">Confidential Therapy & Coaching</h3>
             <p className="text-xs font-medium text-indigo-200">You have 8 free sessions available this year.</p>
          </div>
          <button className="mt-4 w-max px-4 py-2 bg-white text-indigo-900 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors">
             Access Portal
          </button>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Classes & Events (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
           
           <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                 <h2 className="text-lg font-bold text-slate-800">Live Virtual Classes</h2>
                 <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700">View Schedule</button>
              </div>
              
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                 
                 {/* Class 1 */}
                 <div className="group cursor-pointer">
                    <div className="h-32 rounded-xl overflow-hidden mb-3 relative">
                       <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400" alt="Yoga" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                       <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
                          <Video className="w-3 h-3 inline mr-1" /> Live
                       </div>
                    </div>
                    <div className="flex justify-between items-start">
                       <div>
                          <p className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 transition-colors">Mid-Day Mindfulness Yoga</p>
                          <p className="text-[10px] font-bold uppercase text-slate-400 mt-1">Today • 12:00 PM EST</p>
                       </div>
                       <button className="bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white p-2 rounded-lg transition-colors">
                          <Plus className="w-4 h-4" />
                       </button>
                    </div>
                 </div>

                 {/* Class 2 */}
                 <div className="group cursor-pointer">
                    <div className="h-32 rounded-xl overflow-hidden mb-3 relative">
                       <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" alt="Meditation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                       <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
                          <Video className="w-3 h-3 inline mr-1" /> Zoom
                       </div>
                    </div>
                    <div className="flex justify-between items-start">
                       <div>
                          <p className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 transition-colors">Guided Meditation for Focus</p>
                          <p className="text-[10px] font-bold uppercase text-slate-400 mt-1">Tomorrow • 9:00 AM EST</p>
                       </div>
                       <button className="bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white p-2 rounded-lg transition-colors">
                          <Plus className="w-4 h-4" />
                       </button>
                    </div>
                 </div>

              </div>
           </div>

           {/* Curated Resources */}
           <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-5">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Curated Resources</h2>
              
              <div className="space-y-3">
                 <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                    <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                          <BookOpen className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">Managing Burnout in a Remote World</p>
                          <p className="text-[10px] font-medium text-slate-500">5 min read • Article</p>
                       </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                 </div>

                 <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                    <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                          <Headphones className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">Deep Work Playlist & Ambient Sounds</p>
                          <p className="text-[10px] font-medium text-slate-500">Spotify Integration • Audio</p>
                       </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                 </div>

                 <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                    <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Coffee className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">Ergonomics Assessment Guide</p>
                          <p className="text-[10px] font-medium text-slate-500">Interactive checklist • Tool</p>
                       </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                 </div>
              </div>
           </div>

        </motion.div>
        
        {/* Partners & Challenges (Right) */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
                <Activity className="w-4 h-4 mr-2 text-rose-500" /> Active Challenge
             </h3>
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-slate-800 text-sm">Step Challenge: August</h4>
                   <span className="text-[10px] font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded">Active</span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium mb-3">Goal: 300,000 steps this month.</p>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                   <span>142k steps</span>
                   <span>47%</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-gradient-to-r from-rose-400 to-pink-500 h-full rounded-full" style={{ width: '47%' }}></div>
                </div>
             </div>
             <button className="w-full py-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold rounded-lg transition-colors shadow-sm">
               Log Activity
             </button>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Partner Discounts</h3>
             
             <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                   <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center shrink-0">
                         <span className="text-white font-black text-xs">PELO</span>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-800">Peloton</p>
                         <p className="text-[10px] text-slate-500">Free App Access</p>
                      </div>
                   </div>
                   <ArrowRight className="w-3 h-3 text-slate-400" />
                </div>
                
                <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                   <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-sky-500 flex items-center justify-center shrink-0">
                         <span className="text-white font-black text-xs">CALM</span>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-800">Calm App</p>
                         <p className="text-[10px] text-slate-500">Premium Subscription</p>
                      </div>
                   </div>
                   <ArrowRight className="w-3 h-3 text-slate-400" />
                </div>
                
                <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                   <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center shrink-0">
                         <span className="text-white font-black text-xs">GYM</span>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-800">Gympass</p>
                         <p className="text-[10px] text-slate-500">70% Off Subscriptions</p>
                      </div>
                   </div>
                   <ArrowRight className="w-3 h-3 text-slate-400" />
                </div>
             </div>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
