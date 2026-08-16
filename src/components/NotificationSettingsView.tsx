import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Mail, Smartphone, Slack, MessageSquare, Save, Settings, ToggleLeft, ToggleRight } from 'lucide-react';

export const NotificationSettingsView: React.FC = () => {
  const [settings, setSettings] = useState({
    email_new_candidate: true,
    email_interview_scheduled: true,
    email_offer_accepted: true,
    email_weekly_digest: false,
    push_new_message: true,
    push_interview_reminder: true,
    push_task_assigned: true,
    slack_new_application: false,
    slack_offer_status: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Notification Preferences</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage how and when you receive alerts from the platform.</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-orange-500 hover:shadow-lg hover:shadow-rose-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
          <Save className="w-5 h-5" />
          <span>Save Preferences</span>
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Notifications */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
          <div className="flex items-center mb-6">
             <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mr-4">
               <Mail className="w-6 h-6" />
             </div>
             <div>
               <h2 className="text-lg font-bold text-slate-800">Email Alerts</h2>
               <p className="text-sm text-slate-500">Sent to alex@company.com</p>
             </div>
          </div>
          
          <div className="space-y-4">
             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100">
               <div>
                 <p className="font-bold text-slate-700">New Candidates</p>
                 <p className="text-xs text-slate-500 mt-0.5">When a candidate applies to your jobs.</p>
               </div>
               <button onClick={() => toggleSetting('email_new_candidate')} className="text-blue-500 focus:outline-none">
                 {settings.email_new_candidate ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
               </button>
             </div>
             
             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100">
               <div>
                 <p className="font-bold text-slate-700">Interview Scheduled</p>
                 <p className="text-xs text-slate-500 mt-0.5">When a calendar event is created.</p>
               </div>
               <button onClick={() => toggleSetting('email_interview_scheduled')} className="text-blue-500 focus:outline-none">
                 {settings.email_interview_scheduled ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
               </button>
             </div>

             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100">
               <div>
                 <p className="font-bold text-slate-700">Offer Accepted</p>
                 <p className="text-xs text-slate-500 mt-0.5">When a candidate signs the offer.</p>
               </div>
               <button onClick={() => toggleSetting('email_offer_accepted')} className="text-blue-500 focus:outline-none">
                 {settings.email_offer_accepted ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
               </button>
             </div>

             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100">
               <div>
                 <p className="font-bold text-slate-700">Weekly Digest</p>
                 <p className="text-xs text-slate-500 mt-0.5">Summary of hiring metrics on Mondays.</p>
               </div>
               <button onClick={() => toggleSetting('email_weekly_digest')} className="text-blue-500 focus:outline-none">
                 {settings.email_weekly_digest ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
               </button>
             </div>
          </div>
        </motion.div>

        {/* Push & Web Notifications */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
          <div className="flex items-center mb-6">
             <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mr-4">
               <Bell className="w-6 h-6" />
             </div>
             <div>
               <h2 className="text-lg font-bold text-slate-800">Push & In-App Alerts</h2>
               <p className="text-sm text-slate-500">Delivered directly in your browser.</p>
             </div>
          </div>
          
          <div className="space-y-4">
             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100">
               <div>
                 <p className="font-bold text-slate-700">New Direct Messages</p>
                 <p className="text-xs text-slate-500 mt-0.5">When a team member messages you.</p>
               </div>
               <button onClick={() => toggleSetting('push_new_message')} className="text-purple-500 focus:outline-none">
                 {settings.push_new_message ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
               </button>
             </div>
             
             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100">
               <div>
                 <p className="font-bold text-slate-700">Interview Reminders</p>
                 <p className="text-xs text-slate-500 mt-0.5">15 minutes before an interview starts.</p>
               </div>
               <button onClick={() => toggleSetting('push_interview_reminder')} className="text-purple-500 focus:outline-none">
                 {settings.push_interview_reminder ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
               </button>
             </div>

             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100">
               <div>
                 <p className="font-bold text-slate-700">Tasks Assigned to You</p>
                 <p className="text-xs text-slate-500 mt-0.5">When someone assigns you a pipeline task.</p>
               </div>
               <button onClick={() => toggleSetting('push_task_assigned')} className="text-purple-500 focus:outline-none">
                 {settings.push_task_assigned ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
               </button>
             </div>
          </div>
        </motion.div>

        {/* Third Party */}
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50 md:col-span-2">
          <div className="flex items-center mb-6">
             <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mr-4">
               <Slack className="w-6 h-6" />
             </div>
             <div>
               <h2 className="text-lg font-bold text-slate-800">Slack Integration</h2>
               <p className="text-sm text-slate-500">Route notifications to your workspace channels.</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100">
               <div>
                 <p className="font-bold text-slate-700">New Applications (#hiring)</p>
                 <p className="text-xs text-slate-500 mt-0.5">Post a message when someone applies.</p>
               </div>
               <button onClick={() => toggleSetting('slack_new_application')} className="text-emerald-500 focus:outline-none">
                 {settings.slack_new_application ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
               </button>
             </div>
             
             <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100">
               <div>
                 <p className="font-bold text-slate-700">Offer Status Updates (#recruiting)</p>
                 <p className="text-xs text-slate-500 mt-0.5">Post when offers are sent, signed, or rejected.</p>
               </div>
               <button onClick={() => toggleSetting('slack_offer_status')} className="text-emerald-500 focus:outline-none">
                 {settings.slack_offer_status ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
               </button>
             </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
