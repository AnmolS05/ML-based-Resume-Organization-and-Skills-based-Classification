import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Filter, FileText, CheckCircle2, Clock, XCircle, ChevronRight, Mail, Download, ArrowUpRight } from 'lucide-react';

const mockOffers = [
  { id: 1, candidate: 'Alex Chen', role: 'Senior Frontend Developer', status: 'Accepted', date: 'Oct 15, 2026', salary: '$145,000', equity: '0.1%', avatar: 'AC' },
  { id: 2, candidate: 'Sarah Connor', role: 'Product Manager', status: 'Pending', date: 'Oct 14, 2026', salary: '$135,000', equity: '0.05%', avatar: 'SC' },
  { id: 3, candidate: 'Michael Chang', role: 'DevOps Engineer', status: 'Draft', date: 'Oct 16, 2026', salary: '$155,000', equity: '0.15%', avatar: 'MC' },
  { id: 4, candidate: 'Emily Davis', role: 'UX Designer', status: 'Declined', date: 'Oct 10, 2026', salary: '$120,000', equity: 'None', avatar: 'ED' },
  { id: 5, candidate: 'David Miller', role: 'Backend Developer', status: 'Pending', date: 'Oct 12, 2026', salary: '$130,000', equity: '0.05%', avatar: 'DM' },
];

export const OffersView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tabs = ['All', 'Draft', 'Pending', 'Accepted', 'Declined'];

  const filteredOffers = mockOffers.filter(offer => {
    const matchesSearch = offer.candidate.toLowerCase().includes(searchQuery.toLowerCase()) || offer.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'All' || offer.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Accepted':
        return <span className="flex items-center px-2.5 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-600 rounded-full border border-emerald-500/20"><CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Accepted</span>;
      case 'Pending':
        return <span className="flex items-center px-2.5 py-1 text-xs font-bold bg-amber-500/10 text-amber-600 rounded-full border border-amber-500/20"><Clock className="w-3.5 h-3.5 mr-1" /> Pending</span>;
      case 'Declined':
        return <span className="flex items-center px-2.5 py-1 text-xs font-bold bg-rose-500/10 text-rose-600 rounded-full border border-rose-500/20"><XCircle className="w-3.5 h-3.5 mr-1" /> Declined</span>;
      default:
        return <span className="flex items-center px-2.5 py-1 text-xs font-bold bg-slate-500/10 text-slate-600 rounded-full border border-slate-500/20"><FileText className="w-3.5 h-3.5 mr-1" /> Draft</span>;
    }
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Offers & Onboarding</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage candidate offers, contracts, and onboarding status.</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-[#1e50ff] to-blue-500 hover:shadow-lg hover:shadow-blue-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all group">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span>Create Offer</span>
        </button>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
           { label: 'Total Offers', value: '24', trend: '+12%', color: 'text-blue-600', bg: 'bg-blue-50' },
           { label: 'Accepted', value: '18', trend: '+5%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
           { label: 'Pending', value: '4', trend: '-2%', color: 'text-amber-600', bg: 'bg-amber-50' },
           { label: 'Acceptance Rate', value: '85%', trend: '+4%', color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, idx) => (
           <div key={idx} className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                <div className="flex items-end space-x-2 mt-1">
                  <h3 className={`text-2xl font-black ${stat.color}`}>{stat.value}</h3>
                  <span className="text-xs font-bold text-emerald-500 mb-1">{stat.trend}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                <FileText className={`w-6 h-6 ${stat.color}`} />
              </div>
           </div>
        ))}
      </motion.div>

      {/* Toolbar */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-slate-200/50">
        <div className="flex space-x-1 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab 
                  ? 'bg-white shadow-sm text-[#1e50ff] border border-blue-100' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search candidate or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 hover:text-[#1e50ff] hover:border-blue-200 transition-all shadow-sm">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Offers Table */}
      <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="py-4 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Candidate</th>
                <th className="py-4 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Role</th>
                <th className="py-4 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Compensation</th>
                <th className="py-4 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Status</th>
                <th className="py-4 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Date Sent</th>
                <th className="py-4 px-6 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <AnimatePresence>
                {filteredOffers.map((offer) => (
                  <motion.tr 
                    key={offer.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="hover:bg-blue-50/30 transition-colors group cursor-pointer"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white ${
                            offer.id % 2 === 0 ? 'bg-gradient-to-tr from-blue-500 to-cyan-400' : 'bg-gradient-to-tr from-purple-500 to-indigo-400'
                          }`}>
                            {offer.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">{offer.candidate}</p>
                            <p className="text-xs font-medium text-slate-400">View Profile</p>
                          </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                       <span className="text-sm font-bold text-slate-700">{offer.role}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                         <span className="text-sm font-bold text-slate-800">{offer.salary}</span>
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Equity: {offer.equity}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {getStatusBadge(offer.status)}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm font-medium text-slate-500">{offer.date}</span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="p-1.5 text-slate-400 hover:text-[#1e50ff] hover:bg-blue-50 rounded-lg transition-colors" title="Send Email">
                           <Mail className="w-4 h-4" />
                         </button>
                         <button className="p-1.5 text-slate-400 hover:text-[#1e50ff] hover:bg-blue-50 rounded-lg transition-colors" title="Download PDF">
                           <Download className="w-4 h-4" />
                         </button>
                         <button className="p-1.5 text-slate-400 hover:text-[#1e50ff] hover:bg-blue-50 rounded-lg transition-colors" title="View Details">
                           <ArrowUpRight className="w-4 h-4" />
                         </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          
          {filteredOffers.length === 0 && (
            <div className="py-12 text-center">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">No offers found matching your criteria.</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
