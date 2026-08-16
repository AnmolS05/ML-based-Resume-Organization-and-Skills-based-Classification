import React from 'react';
import { motion } from 'framer-motion';
import { Settings, User, Bell, Shield, Key, Paintbrush, Globe, Save } from 'lucide-react';

export const SettingsView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-slate-500" /> Account Settings
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage your preferences, security, and profile details.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg hover:shadow-blue-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Settings Navigation */}
        <motion.div variants={fadeInUp} className="md:col-span-1 space-y-2">
           <button className="w-full flex items-center space-x-3 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl font-bold text-sm transition-colors border border-blue-100">
              <User className="w-5 h-5" />
              <span>My Profile</span>
           </button>
           <button className="w-full flex items-center space-x-3 text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-xl font-bold text-sm transition-colors border border-transparent">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
           </button>
           <button className="w-full flex items-center space-x-3 text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-xl font-bold text-sm transition-colors border border-transparent">
              <Shield className="w-5 h-5" />
              <span>Privacy & Security</span>
           </button>
           <button className="w-full flex items-center space-x-3 text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-xl font-bold text-sm transition-colors border border-transparent">
              <Paintbrush className="w-5 h-5" />
              <span>Appearance</span>
           </button>
           <button className="w-full flex items-center space-x-3 text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-xl font-bold text-sm transition-colors border border-transparent">
              <Globe className="w-5 h-5" />
              <span>Language & Region</span>
           </button>
        </motion.div>

        {/* Settings Content Area */}
        <motion.div variants={fadeInUp} className="md:col-span-3 space-y-6">
           
           {/* Profile Picture */}
           <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Profile Picture</h2>
              <div className="flex items-center space-x-6">
                 <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 border-4 border-white shadow-md">
                    <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff&size=200" alt="Profile" className="w-full h-full object-cover" />
                 </div>
                 <div className="space-y-2">
                    <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 shadow-sm transition-colors">
                       Upload New Photo
                    </button>
                    <p className="text-xs font-medium text-slate-500">JPG, GIF or PNG. Max size of 800K</p>
                 </div>
              </div>
           </div>

           {/* Personal Information */}
           <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Personal Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input type="text" defaultValue="Admin" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input type="text" defaultValue="User" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm" />
                 </div>
                 <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" defaultValue="admin@company.com" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Role</label>
                    <input type="text" defaultValue="System Administrator" disabled className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-500 shadow-inner cursor-not-allowed" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Department</label>
                    <input type="text" defaultValue="IT & Engineering" disabled className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-500 shadow-inner cursor-not-allowed" />
                 </div>
                 <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bio</label>
                    <textarea rows={4} defaultValue="Managing the core ATS infrastructure and overseeing platform security." className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm resize-none"></textarea>
                 </div>
              </div>
           </div>

           {/* Quick Actions (Security preview) */}
           <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Account Security</h2>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl">
                    <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                          <Key className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">Change Password</p>
                          <p className="text-[10px] font-medium text-slate-500">Last changed 3 months ago</p>
                       </div>
                    </div>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold rounded-lg transition-colors">
                       Update
                    </button>
                 </div>

                 <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl">
                    <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Shield className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">Two-Factor Authentication (2FA)</p>
                          <p className="text-[10px] font-medium text-emerald-600">Enabled</p>
                       </div>
                    </div>
                    <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold rounded-lg transition-colors shadow-sm">
                       Manage
                    </button>
                 </div>
              </div>
           </div>

        </motion.div>
      </div>
    </motion.div>
  );
};
