import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Sparkles, FileText, Bell, Search, LayoutDashboard } from 'lucide-react';
import { Sidebar } from '../Sidebar';
import { useAuth } from '../../contexts/AuthContext';
import { EmailItem, Candidate } from '../../types';

interface MainLayoutProps {
  emails: EmailItem[];
  candidates: Candidate[];
}

export function MainLayout({ emails, candidates }: MainLayoutProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  
  // A simple toast mechanism for the layout
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };
  
  const currentView = location.pathname.split('/')[1] || 'dashboard';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans antialiased relative overflow-hidden">
      {/* Dynamic Background Elements for Dashboard Area */}
      <div className="fixed top-0 left-64 right-0 bottom-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4"></div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-5 right-5 z-[100] bg-gradient-to-r from-[#0a192f] to-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl shadow-blue-900/20 border border-slate-700/50 flex items-center space-x-3 backdrop-blur-xl"
          >
            <div className="p-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            </div>
            <div className="text-sm font-bold tracking-wide">{toastMessage}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Sidebar */}
      <Sidebar
        currentView={currentView}
        onNavigate={(view) => navigate(`/${view}`)}
        onLogout={() => {
          logout();
          navigate('/login');
        }}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        emailCount={emails.length}
        candidateCount={candidates.length}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[280px]">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 h-[72px] bg-white/70 backdrop-blur-xl border-b border-white/50 px-4 sm:px-8 flex items-center justify-between shadow-sm transition-all duration-300">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-2.5 rounded-xl text-slate-600 bg-white/50 border border-slate-200/50 hover:bg-white lg:hidden cursor-pointer shadow-sm transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2.5 text-sm">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="text-slate-400 hover:text-[#1e50ff] cursor-pointer font-black flex items-center space-x-1.5 transition-colors bg-white/50 px-3 py-1.5 rounded-lg border border-transparent hover:border-blue-100 hover:bg-blue-50/50"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Home</span>
              </motion.span>
              <span className="text-slate-300 font-black">/</span>
              <span className="font-black text-[#0a192f] capitalize tracking-wide px-3 py-1.5 rounded-lg bg-white shadow-sm border border-slate-100">
                {currentView.replace('_', ' ')}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Bar - Visual Only */}
            <div className="hidden md:flex items-center relative group">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 group-focus-within:text-[#1e50ff] transition-colors" />
              <input 
                type="text" 
                placeholder="Search dashboard..." 
                className="pl-9 pr-4 py-2 w-48 focus:w-64 transition-all duration-300 bg-white/50 border border-slate-200/60 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/20 focus:border-[#1e50ff]/40 shadow-sm"
              />
            </div>

            <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>

            <div className="hidden sm:inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl text-[10px] uppercase tracking-widest font-black bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border border-emerald-100 shadow-sm">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <span>ATS Model Online</span>
            </div>
            
            {user && (
              <div className="hidden md:flex items-center space-x-3 bg-white/60 backdrop-blur-sm border border-white shadow-sm px-3 py-1.5 rounded-2xl cursor-pointer hover:bg-white hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0a192f] to-[#1e50ff] flex items-center justify-center text-white font-black text-xs shadow-inner">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col text-left pr-2">
                  <span className="text-xs font-black text-slate-800 leading-tight">{user.username}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{user.role}</span>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl text-slate-500 hover:text-[#0a192f] bg-white/50 hover:bg-white border border-slate-200/50 hover:border-slate-300 transition-all shadow-sm relative cursor-pointer"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-rose-500 border-2 border-white"></span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/flask_code')}
                className="px-4 py-2 rounded-xl text-xs font-black text-[#1e50ff] bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-100 transition-all flex items-center space-x-2 cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Flask Code</span>
              </motion.button>
            </div>
          </div>
        </header>

        {/* Dynamic View Body from React Router */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto custom-scrollbar relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <Outlet context={{ showToast }} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
