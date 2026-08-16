import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShieldAlert, Key, UserPlus, LogIn, FileDown, Eye, AlertTriangle, ShieldCheck } from 'lucide-react';

const mockLogs = [
  { id: 1, action: 'User Login', user: 'Alex Johnson', role: 'Super Admin', ip: '192.168.1.45', location: 'New York, US', date: '2026-08-15 09:12:33', status: 'Success', icon: <LogIn className="w-4 h-4" />, type: 'Auth' },
  { id: 2, action: 'Exported Candidate Data', user: 'Sarah Connor', role: 'Hiring Manager', ip: '10.0.0.12', location: 'London, UK', date: '2026-08-15 10:45:11', status: 'Success', icon: <FileDown className="w-4 h-4" />, type: 'Data' },
  { id: 3, action: 'Failed Login Attempt', user: 'Unknown', role: 'None', ip: '45.22.11.90', location: 'Moscow, RU', date: '2026-08-15 11:20:05', status: 'Failed', icon: <ShieldAlert className="w-4 h-4" />, type: 'Security' },
  { id: 4, action: 'API Key Generated', user: 'Alex Johnson', role: 'Super Admin', ip: '192.168.1.45', location: 'New York, US', date: '2026-08-15 13:05:44', status: 'Success', icon: <Key className="w-4 h-4" />, type: 'Admin' },
  { id: 5, action: 'Viewed NDA Template', user: 'Michael Chen', role: 'Recruiter', ip: '192.168.1.88', location: 'San Francisco, US', date: '2026-08-15 14:30:22', status: 'Success', icon: <Eye className="w-4 h-4" />, type: 'View' },
  { id: 6, action: 'Invited New User', user: 'Alex Johnson', role: 'Super Admin', ip: '192.168.1.45', location: 'New York, US', date: '2026-08-15 15:10:10', status: 'Success', icon: <UserPlus className="w-4 h-4" />, type: 'Admin' },
  { id: 7, action: 'Deleted Offer Template', user: 'Sarah Connor', role: 'Hiring Manager', ip: '10.0.0.12', location: 'London, UK', date: '2026-08-15 16:45:00', status: 'Warning', icon: <AlertTriangle className="w-4 h-4" />, type: 'Data' },
];

export const AuditLogsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredLogs = mockLogs.filter(log => 
    log.action.toLowerCase().includes(searchQuery.toLowerCase()) || 
    log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-400/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Security & Audit Logs</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Track system activity, user actions, and security events for compliance.</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="flex items-center text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
             <ShieldCheck className="w-4 h-4 mr-2" /> System Secure
          </span>
          <button className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl font-bold transition-all shadow-sm">
            <FileDown className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </motion.div>

      {/* Toolbar */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-slate-200/50">
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by action, user, or IP..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500 transition-all shadow-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all shadow-sm flex items-center space-x-2 px-4">
            <Filter className="w-4 h-4" />
            <span className="font-bold text-sm">Filter </span>
          </button>
        </div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
           Showing {filteredLogs.length} events
        </div>
      </motion.div>

      {/* Logs Table */}
      <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Timestamp</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Action / Event</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">IP / Location</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-slate-600">{log.date}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg flex items-center justify-center ${
                        log.type === 'Security' ? 'bg-rose-50 text-rose-600' :
                        log.type === 'Admin' ? 'bg-purple-50 text-purple-600' :
                        log.type === 'Data' ? 'bg-blue-50 text-blue-600' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {log.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{log.action}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{log.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-bold text-slate-800">{log.user}</p>
                    <p className="text-xs font-medium text-slate-500">{log.role}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-medium text-slate-600 font-mono">{log.ip}</p>
                    <p className="text-xs font-medium text-slate-400">{log.location}</p>
                  </td>
                  <td className="py-4 px-6">
                    {log.status === 'Success' && <span className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">Success</span>}
                    {log.status === 'Failed' && <span className="inline-flex items-center text-xs font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full">Failed</span>}
                    {log.status === 'Warning' && <span className="inline-flex items-center text-xs font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full">Warning</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredLogs.length === 0 && (
          <div className="text-center py-12">
            <ShieldAlert className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">No logs match your search.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
