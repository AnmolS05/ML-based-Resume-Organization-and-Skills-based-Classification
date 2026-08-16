import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Mail, 
  FileSpreadsheet, 
  Users, 
  Briefcase, 
  GitCompare, 
  Settings, 
  LogOut, 
  Code2,
  BarChart2,
  KanbanSquare,
  Calendar,
  HelpCircle,
  MessageSquare,
  FileText,
  Link as LinkIcon,
  UserCog,
  Globe,
  FileCode2,
  Files,
  ShieldAlert,
  Palette,
  Bell,
  CreditCard,
  UserPlus,
  PieChart,
  ShieldCheck,
  Target,
  Network,
  ListTodo,
  Umbrella,
  Library,
  Activity,
  GraduationCap,
  DollarSign,
  Heart,
  Monitor,
  Receipt,
  Award,
  Building2,
  LifeBuoy,
  Newspaper,
  HeartPulse
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onLogout: () => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  emailCount?: number;
  candidateCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onNavigate,
  onLogout,
  isOpenMobile = false,
  onCloseMobile,
  emailCount = 6,
  candidateCount = 25,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'messages', label: 'Team Chat', icon: MessageSquare, badge: '3', badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
    { id: 'pipeline', label: 'Hiring Tracker', icon: KanbanSquare, badge: null },
    { id: 'calendar', label: 'Interviews', icon: Calendar, badge: '2', badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { id: 'offers', label: 'Offers & Onboarding', icon: FileText, badge: '4', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart2, badge: 'New', badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
    { id: 'diversity', label: 'DEI Analytics', icon: PieChart, badge: null },
    { id: 'emails', label: 'Email Scanner', icon: Mail, badge: emailCount > 0 ? `${emailCount}` : null, badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { id: 'attachments', label: 'Resumes & Files', icon: FileSpreadsheet, badge: null },
    { id: 'job_analysis', label: 'Jobs (Active)', icon: Briefcase, badge: 'Active', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    { id: 'job_boards', label: 'Job Boards', icon: Globe, badge: null },
    { id: 'assessments', label: 'Skills Tests', icon: FileCode2, badge: null },
    { id: 'results', label: 'Job Matching', icon: GitCompare, badge: null },
    { id: 'candidates', label: 'Candidate Rankings', icon: Users, badge: `${candidateCount}`, badgeColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
    { id: 'flask_code', label: 'Flask & Templates', icon: Code2, badge: 'Source', badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  ];

  const secondaryNavItems = [
    { id: 'careers_page', label: 'Careers Site Builder', icon: Palette },
    { id: 'templates', label: 'Document Templates', icon: Files },
    { id: 'team', label: 'Users & Roles', icon: UserCog },
    { id: 'org_chart', label: 'Company Structure', icon: Network },
    { id: 'performance', label: 'Performance Reviews', icon: Target },
    { id: 'onboarding', label: 'Employee Onboarding', icon: ListTodo },
    { id: 'timeoff', label: 'Time Off & Leave', icon: Umbrella },
    { id: 'surveys', label: 'Pulse Surveys', icon: Activity },
    { id: 'library', label: 'Document Library', icon: Library },
    { id: 'training', label: 'Training & LMS', icon: GraduationCap },
    { id: 'payroll', label: 'Payroll & Comp', icon: DollarSign },
    { id: 'candidates', label: 'Candidates', icon: Users },
    { id: 'interviews', label: 'Interviews', icon: Calendar },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'directory', label: 'Team Directory', icon: Users },
    { id: 'news', label: 'Company News', icon: Newspaper },
    { id: 'goals', label: 'OKRs & Goals', icon: Target },
    { id: 'recognition', label: 'Recognition & Kudos', icon: Award },
    { id: 'referrals', label: 'Employee Referrals', icon: UserPlus },
    { id: 'integrations', label: 'Integrations & API', icon: LinkIcon },
    { id: 'audit', label: 'Security & Audit', icon: ShieldAlert },
    { id: 'compliance', label: 'Compliance & GDPR', icon: ShieldCheck },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing & Subscriptions', icon: CreditCard },
    { id: 'facilities', label: 'Workspace & Facilities', icon: Building2 },
    { id: 'helpdesk', label: 'IT Help Desk', icon: LifeBuoy },
    { id: 'wellness', label: 'Wellness & Health', icon: HeartPulse },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'assets', label: 'IT Assets', icon: Monitor },
  ];

  const sidebarVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%', transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  const isMobileView = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <>
      {/* Mobile overlay backdrop */}
      <AnimatePresence>
        {isOpenMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020817]/60 z-40 lg:hidden backdrop-blur-sm"
            onClick={onCloseMobile}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        initial={isMobileView ? "closed" : false}
        animate={isOpenMobile || !isMobileView ? "open" : "closed"}
        variants={sidebarVariants}
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#0a192f]/95 backdrop-blur-2xl text-slate-300 flex flex-col border-r border-slate-800/80 shadow-2xl shadow-blue-900/10 lg:translate-x-0`}
      >
        {/* Brand Header */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-white/5 bg-white/5 backdrop-blur-md">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => { onNavigate('dashboard'); onCloseMobile?.(); }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1e50ff] to-blue-400 flex items-center justify-center text-white border border-white/20">
                <Mail className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <div className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 tracking-tight">HR ATS Scanner</div>
              <div className="text-[10px] text-blue-400 font-black tracking-widest uppercase">Stage 9 System</div>
            </div>
          </motion.div>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-6 space-y-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div>
            <div className="px-3 mb-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
              Main Menu
            </div>
            <nav className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id || 
                  (item.id === 'job_analysis' && currentView === 'job_analysis') ||
                  (item.id === 'results' && currentView === 'results') ||
                  (item.id === 'candidates' && currentView === 'candidates');

                return (
                  <motion.button
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    key={item.id}
                    id={`nav-${item.id}`}
                    onClick={() => {
                      onNavigate(item.id);
                      onCloseMobile?.();
                    }}
                    className={`relative w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group overflow-hidden ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-gradient-to-r from-[#1e50ff]/20 to-blue-600/10 border border-blue-500/20 rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {!isActive && (
                       <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                    )}

                    <div className="relative flex items-center space-x-3">
                      <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                      <span className={isActive ? 'font-bold' : ''}>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`relative text-[9px] px-2 py-0.5 rounded-full font-bold border ${item.badgeColor || 'bg-slate-700/50 text-slate-300 border-slate-600'}`}>
                        {item.badge}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </nav>
          </div>

          <div>
            <div className="px-3 mb-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
              Configuration
            </div>
            <nav className="space-y-1.5">
              {secondaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <motion.button
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      onCloseMobile?.();
                    }}
                    className={`relative w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group overflow-hidden ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                     {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-gradient-to-r from-[#1e50ff]/20 to-blue-600/10 border border-blue-500/20 rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                       <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                    )}
                    <div className="relative flex items-center space-x-3">
                      <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                      <span className={isActive ? 'font-bold' : ''}>{item.label}</span>
                    </div>
                  </motion.button>
                );
              })}

              <motion.button
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLogout}
                className="relative w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-400/80 hover:text-rose-400 transition-colors group overflow-hidden"
              >
                <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl border border-rose-500/20"></div>
                <LogOut className="relative w-4 h-4" />
                <span className="relative">Logout</span>
              </motion.button>
            </nav>
          </div>
        </div>

        {/* User profile footer */}
        <div className="p-4 border-t border-white/5 bg-white/5 backdrop-blur-md">
          <div className="relative flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-white/10 group cursor-pointer hover:bg-slate-800/80 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-black text-white text-sm border border-white/20 shadow-inner">
                  HA
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="text-sm font-black text-white truncate group-hover:text-blue-400 transition-colors">HR Admin</div>
                <div className="text-[10px] font-medium text-slate-400 truncate">admin@company.com</div>
              </div>
            </div>
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-900"></span>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};
