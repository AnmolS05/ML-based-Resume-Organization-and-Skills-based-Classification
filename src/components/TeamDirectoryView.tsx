import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Filter, UserCog, Mail, Phone, MoreVertical, Shield, ShieldAlert, Edit, Trash2 } from 'lucide-react';

const mockTeam = [
  { id: 1, name: 'Alex Johnson', email: 'alex.j@company.com', role: 'Super Admin', department: 'Executive', status: 'Active', avatar: 'AJ', joined: 'Jan 15, 2025' },
  { id: 2, name: 'Sarah Connor', email: 'sarah.c@company.com', role: 'Hiring Manager', department: 'Engineering', status: 'Active', avatar: 'SC', joined: 'Mar 10, 2025' },
  { id: 3, name: 'Michael Chen', email: 'michael.c@company.com', role: 'Recruiter', department: 'Human Resources', status: 'Active', avatar: 'MC', joined: 'Jun 22, 2025' },
  { id: 4, name: 'Emily Davis', email: 'emily.d@company.com', role: 'Interviewer', department: 'Design', status: 'Invited', avatar: 'ED', joined: 'Pending' },
  { id: 5, name: 'David Miller', email: 'david.m@company.com', role: 'Viewer', department: 'Marketing', status: 'Inactive', avatar: 'DM', joined: 'Nov 05, 2025' },
];

export const TeamDirectoryView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredTeam = mockTeam.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRoleBadge = (role: string) => {
    if (role === 'Super Admin') return <span className="flex items-center text-xs font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-1 rounded-md"><ShieldAlert className="w-3 h-3 mr-1" /> {role}</span>;
    if (role === 'Hiring Manager') return <span className="flex items-center text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-md"><Shield className="w-3 h-3 mr-1" /> {role}</span>;
    return <span className="text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md">{role}</span>;
  };

  const getStatusIndicator = (status: string) => {
    if (status === 'Active') return <span className="flex items-center text-xs font-bold text-emerald-600"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div> Active</span>;
    if (status === 'Invited') return <span className="flex items-center text-xs font-bold text-amber-600"><div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div> Invited</span>;
    return <span className="flex items-center text-xs font-bold text-slate-500"><div className="w-2 h-2 rounded-full bg-slate-400 mr-2"></div> Inactive</span>;
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Team & Roles</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage workspace users, permissions, and department access.</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-[#1e50ff] to-blue-500 hover:shadow-lg hover:shadow-blue-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all group">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span>Invite Member</span>
        </button>
      </motion.div>

      {/* Stats Overview */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 flex items-center space-x-4">
           <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
             <UserCog className="w-6 h-6 text-blue-600" />
           </div>
           <div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Users</p>
             <h3 className="text-2xl font-black text-slate-800">12</h3>
           </div>
        </div>
        <div className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 flex items-center space-x-4">
           <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
             <Shield className="w-6 h-6 text-emerald-600" />
           </div>
           <div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Admins</p>
             <h3 className="text-2xl font-black text-slate-800">3</h3>
           </div>
        </div>
        <div className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 flex items-center space-x-4">
           <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
             <Mail className="w-6 h-6 text-amber-600" />
           </div>
           <div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pending Invites</p>
             <h3 className="text-2xl font-black text-slate-800">2</h3>
           </div>
        </div>
      </motion.div>

      {/* Toolbar */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-slate-200/50">
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by name, email, or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 hover:text-[#1e50ff] hover:border-blue-200 transition-all shadow-sm flex items-center space-x-2 px-4">
            <Filter className="w-4 h-4" />
            <span className="font-bold text-sm">Filter</span>
          </button>
        </div>
      </motion.div>

      {/* Team Grid */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredTeam.map((member) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white shadow-inner ${
                        member.id % 2 === 0 ? 'bg-gradient-to-tr from-[#1e50ff] to-blue-400' : 'bg-gradient-to-tr from-purple-600 to-indigo-400'
                      }`}>
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                        <p className="text-sm font-medium text-slate-500">{member.department}</p>
                      </div>
                   </div>
                   <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                     <MoreVertical className="w-5 h-5" />
                   </button>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Mail className="w-4 h-4 mr-3 text-slate-400" />
                    {member.email}
                  </div>
                  <div className="flex items-center justify-between">
                    {getRoleBadge(member.role)}
                    {getStatusIndicator(member.status)}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Joined: {member.joined}</span>
                   <div className="flex space-x-2">
                     <button className="p-1.5 text-slate-400 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-lg transition-colors">
                       <Edit className="w-4 h-4" />
                     </button>
                     <button className="p-1.5 text-slate-400 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 rounded-lg transition-colors">
                       <Trash2 className="w-4 h-4" />
                     </button>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredTeam.length === 0 && (
        <div className="text-center py-12">
          <UserCog className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500 font-medium">No team members found.</p>
        </div>
      )}
    </motion.div>
  );
};
