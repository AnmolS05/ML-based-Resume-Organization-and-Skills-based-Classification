import React from 'react';
import { motion } from 'framer-motion';
import { Award, Search, Filter, Plus, Heart, Star, ThumbsUp, Gift, Zap, MessageSquare } from 'lucide-react';

export const RecognitionView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Award className="w-6 h-6 mr-3 text-pink-500" /> Recognition & Kudos
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Celebrate wins, give shoutouts, and redeem reward points.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-orange-400 hover:shadow-lg hover:shadow-pink-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Heart className="w-4 h-4 fill-white" />
            <span>Give Kudos</span>
          </button>
        </div>
      </motion.div>

      {/* KPI / Points Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div variants={fadeInUp} className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-2xl shadow-lg relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>
          <div className="flex justify-between items-start mb-4">
             <div>
               <h3 className="text-sm font-bold text-indigo-200 mb-1">My Reward Balance</h3>
               <div className="flex items-end space-x-2">
                 <span className="text-4xl font-black">2,450</span>
                 <span className="text-sm font-bold text-indigo-300 mb-1">pts</span>
               </div>
             </div>
             <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                <Gift className="w-6 h-6 text-white" />
             </div>
          </div>
          <button className="w-full py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold rounded-lg transition-colors">
            Redeem Rewards
          </button>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Star className="w-16 h-16 text-yellow-500" />
          </div>
          <div>
             <h3 className="text-sm font-bold text-slate-500 mb-1">Kudos Received</h3>
             <div className="flex items-end space-x-2">
               <span className="text-3xl font-black text-slate-800">18</span>
             </div>
          </div>
          <p className="text-xs font-medium text-emerald-500 mt-4 font-bold">+3 this month</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <ThumbsUp className="w-16 h-16 text-blue-500" />
          </div>
          <div>
             <h3 className="text-sm font-bold text-slate-500 mb-1">Kudos Given</h3>
             <div className="flex items-end space-x-2">
               <span className="text-3xl font-black text-slate-800">42</span>
             </div>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-4 font-bold">You're a great team player!</p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kudos Feed (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white/50">
             <h2 className="text-lg font-bold text-slate-800">Company Recognition Feed</h2>
             <div className="flex items-center space-x-2">
               <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button className="px-3 py-1 text-xs font-bold rounded-lg bg-white shadow-sm text-slate-800">All</button>
                  <button className="px-3 py-1 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-700 transition-colors">My Team</button>
                  <button className="px-3 py-1 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-700 transition-colors">Me</button>
               </div>
               <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm">
                 <Filter className="w-4 h-4" />
               </button>
             </div>
          </div>

          <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
             
             {/* Feed Item 1 */}
             <div className="p-5 border border-slate-100 rounded-xl bg-white shadow-sm">
                <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">DC</div>
                      <div>
                         <p className="font-bold text-slate-800 text-sm">David Chen <span className="text-slate-400 font-medium mx-1">recognized</span> <span className="text-indigo-600 cursor-pointer hover:underline">Sarah Miller</span></p>
                         <p className="text-xs text-slate-400 font-medium">2 hours ago</p>
                      </div>
                   </div>
                   <div className="bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-full border border-yellow-200 flex items-center text-xs font-bold">
                      <Star className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" /> +50 pts
                   </div>
                </div>
                <div className="mt-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
                   <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      Huge shoutout to Sarah for jumping in at the last minute to help us prepare the Q3 marketing presentation! Your slides looked amazing and really helped us land the message. True team player! 🚀
                   </p>
                </div>
                <div className="mt-4 flex items-center space-x-4 border-t border-slate-100 pt-3">
                   <button className="flex items-center text-xs font-bold text-slate-500 hover:text-pink-600 transition-colors">
                      <Heart className="w-4 h-4 mr-1.5" /> 12 Likes
                   </button>
                   <button className="flex items-center text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
                      <MessageSquare className="w-4 h-4 mr-1.5" /> 3 Comments
                   </button>
                </div>
             </div>

             {/* Feed Item 2 */}
             <div className="p-5 border border-slate-100 rounded-xl bg-white shadow-sm">
                <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">ED</div>
                      <div>
                         <p className="font-bold text-slate-800 text-sm">Emily Davis <span className="text-slate-400 font-medium mx-1">recognized</span> <span className="text-indigo-600 cursor-pointer hover:underline">James Wilson</span></p>
                         <p className="text-xs text-slate-400 font-medium">Yesterday</p>
                      </div>
                   </div>
                   <div className="bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-full border border-yellow-200 flex items-center text-xs font-bold">
                      <Zap className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" /> +100 pts
                   </div>
                </div>
                <div className="mt-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
                   <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      Congratulations to James for crushing his sales quota this month! Not only did you hit 120%, but you also took the time to mentor the new SDRs. Inspiring leadership! 🏆
                   </p>
                </div>
                <div className="mt-4 flex items-center space-x-4 border-t border-slate-100 pt-3">
                   <button className="flex items-center text-xs font-bold text-slate-500 hover:text-pink-600 transition-colors">
                      <Heart className="w-4 h-4 mr-1.5" /> 24 Likes
                   </button>
                   <button className="flex items-center text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
                      <MessageSquare className="w-4 h-4 mr-1.5" /> 5 Comments
                   </button>
                </div>
             </div>
             
          </div>
        </motion.div>
        
        {/* Leaderboard & Rewards (Right) */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Top Contributors</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase">This Month</span>
             </div>
             
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-3">
                      <div className="relative">
                         <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 border-2 border-amber-400">JW</div>
                         <div className="absolute -bottom-1 -right-1 bg-amber-400 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">1</div>
                      </div>
                      <p className="font-bold text-slate-700 text-sm">James Wilson</p>
                   </div>
                   <p className="font-black text-slate-800 text-sm">850 <span className="text-[10px] font-bold text-slate-400">pts</span></p>
                </div>
                
                <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-3">
                      <div className="relative">
                         <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 border-2 border-slate-300">DC</div>
                         <div className="absolute -bottom-1 -right-1 bg-slate-400 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">2</div>
                      </div>
                      <p className="font-bold text-slate-700 text-sm">David Chen</p>
                   </div>
                   <p className="font-black text-slate-800 text-sm">620 <span className="text-[10px] font-bold text-slate-400">pts</span></p>
                </div>

                <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-3">
                      <div className="relative">
                         <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 border-2 border-amber-600">ED</div>
                         <div className="absolute -bottom-1 -right-1 bg-amber-600 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">3</div>
                      </div>
                      <p className="font-bold text-slate-700 text-sm">Emily Davis</p>
                   </div>
                   <p className="font-black text-slate-800 text-sm">450 <span className="text-[10px] font-bold text-slate-400">pts</span></p>
                </div>
             </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Featured Rewards</h3>
             <ul className="space-y-3">
                <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                   <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mr-3">
                         <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-800">Starbucks $25 Card</p>
                      </div>
                   </div>
                   <p className="text-xs font-black text-indigo-600">500 pts</p>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                   <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mr-3">
                         <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-800">Extra PTO Day</p>
                      </div>
                   </div>
                   <p className="text-xs font-black text-indigo-600">5,000 pts</p>
                </li>
             </ul>
             <button className="w-full mt-4 py-2 bg-slate-50 text-indigo-600 hover:text-indigo-700 hover:bg-slate-100 text-xs font-bold rounded-lg transition-colors">
               View Reward Catalog
             </button>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
