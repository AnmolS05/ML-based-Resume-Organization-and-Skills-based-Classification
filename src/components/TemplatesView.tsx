import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Filter, FileText, Mail, FileSignature, Copy, Edit, Trash2, CheckCircle2 } from 'lucide-react';

const mockTemplates = [
  { id: 1, title: 'Standard Offer Letter', category: 'Offer', type: 'Document', lastUpdated: '2 days ago', status: 'Active', icon: <FileSignature className="w-5 h-5" />, color: 'text-emerald-600 bg-emerald-50' },
  { id: 2, title: 'Interview Invitation', category: 'Email', type: 'Email', lastUpdated: '1 week ago', status: 'Active', icon: <Mail className="w-5 h-5" />, color: 'text-blue-600 bg-blue-50' },
  { id: 3, title: 'Candidate Rejection (Standard)', category: 'Email', type: 'Email', lastUpdated: '3 weeks ago', status: 'Active', icon: <Mail className="w-5 h-5" />, color: 'text-rose-600 bg-rose-50' },
  { id: 4, title: 'Mutual NDA', category: 'Legal', type: 'Document', lastUpdated: '1 month ago', status: 'Draft', icon: <FileText className="w-5 h-5" />, color: 'text-amber-600 bg-amber-50' },
  { id: 5, title: 'Onboarding Checklist', category: 'Onboarding', type: 'Form', lastUpdated: '2 months ago', status: 'Active', icon: <FileText className="w-5 h-5" />, color: 'text-purple-600 bg-purple-50' },
  { id: 6, title: 'Reference Check Request', category: 'Email', type: 'Email', lastUpdated: '2 months ago', status: 'Active', icon: <Mail className="w-5 h-5" />, color: 'text-blue-600 bg-blue-50' },
];

export const TemplatesView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredTemplates = mockTemplates.filter(template => 
    template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    template.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Document Templates</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage standard emails, offer letters, and forms.</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all group">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span>New Template</span>
        </button>
      </motion.div>

      {/* Toolbar */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-slate-200/50">
        <div className="flex flex-wrap items-center gap-2">
           <button className="px-4 py-2 bg-emerald-50 text-emerald-700 font-bold text-sm rounded-xl border border-emerald-200">All</button>
           <button className="px-4 py-2 hover:bg-slate-50 text-slate-600 font-bold text-sm rounded-xl border border-transparent transition-colors">Emails</button>
           <button className="px-4 py-2 hover:bg-slate-50 text-slate-600 font-bold text-sm rounded-xl border border-transparent transition-colors">Offers</button>
           <button className="px-4 py-2 hover:bg-slate-50 text-slate-600 font-bold text-sm rounded-xl border border-transparent transition-colors">Legal</button>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredTemplates.map((template) => (
            <motion.div 
              key={template.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-6 flex flex-col group hover:shadow-md hover:border-emerald-200 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${template.color}`}>
                  {template.icon}
                </div>
                {template.status === 'Active' ? (
                   <span className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md"><CheckCircle2 className="w-3 h-3 mr-1" /> Active</span>
                ) : (
                   <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">Draft</span>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-1">{template.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-slate-500">{template.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-xs font-medium text-slate-400">{template.type}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Updated: {template.lastUpdated}</span>
                 <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Duplicate">
                     <Copy className="w-4 h-4" />
                   </button>
                   <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                     <Edit className="w-4 h-4" />
                   </button>
                   <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Delete">
                     <Trash2 className="w-4 h-4" />
                   </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500 font-medium">No templates found.</p>
        </div>
      )}
    </motion.div>
  );
};
