import React from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, Link, Copy, CheckCircle2, TrendingUp, UserPlus, Clock } from 'lucide-react';

export const ReferralsView: React.FC = () => {
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
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Employee Referrals</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Track referrals, manage rewards, and generate tracking links.</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:shadow-pink-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
          <UserPlus className="w-5 h-5" />
          <span>Submit a Referral</span>
        </button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-600 text-sm">Total Referrals</h3>
          </div>
          <p className="text-2xl font-black text-slate-800">42</p>
          <p className="text-xs font-bold text-emerald-500 mt-1 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> +12 this month
          </p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-bold text-slate-600 text-sm">In Pipeline</h3>
          </div>
          <p className="text-2xl font-black text-slate-800">15</p>
          <p className="text-xs font-medium text-slate-500 mt-1">Currently interviewing</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-slate-600 text-sm">Successful Hires</h3>
          </div>
          <p className="text-2xl font-black text-slate-800">8</p>
          <p className="text-xs font-medium text-slate-500 mt-1">19% conversion rate</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Gift className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-bold text-slate-600 text-sm">Rewards Paid</h3>
          </div>
          <p className="text-2xl font-black text-slate-800">$12,000</p>
          <p className="text-xs font-medium text-slate-500 mt-1">Total bonuses distributed</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Your Referral Link */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
            <Link className="w-5 h-5 mr-2 text-pink-500" /> Your Referral Link
          </h2>
          <p className="text-sm text-slate-500 mb-4">Share this custom link with your network. Anyone who applies through it will be automatically tracked back to you.</p>
          
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between mb-4">
             <span className="text-sm font-mono text-slate-600 truncate mr-2">https://careers.company.com/ref/alexj</span>
             <button className="p-2 bg-white rounded-lg shadow-sm border border-slate-200 text-slate-500 hover:text-pink-600 transition-colors">
               <Copy className="w-4 h-4" />
             </button>
          </div>
          
          <div className="bg-pink-50 border border-pink-100 rounded-xl p-4">
             <h3 className="font-bold text-pink-800 text-sm mb-1">Current Bounty</h3>
             <p className="text-xs text-pink-600 font-medium">Earn $2,000 for any Engineering or Product hire, and $1,000 for all other roles after 90 days of employment.</p>
          </div>
        </motion.div>

        {/* Recent Referrals List */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50 md:col-span-2">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-lg font-bold text-slate-800">Your Recent Referrals</h2>
             <button className="text-sm font-bold text-pink-600 hover:text-pink-700">View All</button>
          </div>
          
          <div className="space-y-4">
             {/* Item 1 */}
             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                   <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Candidate" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                   <div>
                     <p className="font-bold text-slate-800">Sarah Jenkins</p>
                     <p className="text-xs font-medium text-slate-500">Applied for Senior Frontend Developer</p>
                   </div>
                </div>
                <div className="text-right">
                   <span className="inline-flex items-center text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">Interviewing</span>
                   <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Referred Oct 12</p>
                </div>
             </div>

             {/* Item 2 */}
             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                   <img src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="Candidate" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                   <div>
                     <p className="font-bold text-slate-800">Michael Chang</p>
                     <p className="text-xs font-medium text-slate-500">Applied for Product Manager</p>
                   </div>
                </div>
                <div className="text-right">
                   <span className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">Offer Accepted</span>
                   <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Referred Sep 28</p>
                </div>
             </div>

             {/* Item 3 */}
             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 shadow-sm border-2 border-white">
                     DT
                   </div>
                   <div>
                     <p className="font-bold text-slate-800">David Torres</p>
                     <p className="text-xs font-medium text-slate-500">Applied for DevOps Engineer</p>
                   </div>
                </div>
                <div className="text-right">
                   <span className="inline-flex items-center text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">Rejected</span>
                   <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Referred Sep 15</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
