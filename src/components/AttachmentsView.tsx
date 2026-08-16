import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSpreadsheet, 
  FileText, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  Sparkles, 
  Download, 
  Filter,
  File
} from 'lucide-react';
import { AttachmentItem, EmailItem } from '../types';

interface AttachmentsViewProps {
  attachments: AttachmentItem[];
  emails: EmailItem[];
  onViewResume: (attachmentId: number) => void;
  onNavigate: (view: string, candidateId?: number) => void;
}

export const AttachmentsView: React.FC<AttachmentsViewProps> = ({
  attachments,
  emails,
  onViewResume,
  onNavigate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'resume' | 'non_resume'>('all');

  const filteredAttachments = attachments.filter((att) => {
    const matchesSearch = att.fileName.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (filterType === 'resume') return att.isResume;
    if (filterType === 'non_resume') return !att.isResume;
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6 max-w-7xl mx-auto pb-12"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-slate-700 tracking-tight">
            Resumes & Classified Attachments
          </h1>
          <p className="text-sm font-bold text-slate-500 mt-1">
            MIME attachment extraction and automated binary resume classification status.
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl p-4 rounded-3xl border border-white shadow-xl shadow-slate-200/40 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="relative w-full sm:w-96 z-10">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 text-sm font-bold rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/20 focus:border-[#1e50ff] bg-white/50 backdrop-blur-sm shadow-inner text-slate-800 transition-all"
          />
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 z-10">
          <button
            onClick={() => setFilterType('all')}
            className={`relative px-4 py-2.5 text-xs font-black rounded-xl whitespace-nowrap transition-all duration-300 ${
              filterType === 'all' ? 'text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {filterType === 'all' && (
              <motion.div layoutId="attachmentFilterBg" className="absolute inset-0 bg-gradient-to-r from-[#0a192f] to-slate-800 rounded-xl -z-10" />
            )}
            All Files ({attachments.length})
          </button>
          <button
            onClick={() => setFilterType('resume')}
            className={`relative px-4 py-2.5 text-xs font-black rounded-xl whitespace-nowrap transition-all duration-300 ${
              filterType === 'resume'
                ? 'text-white shadow-md shadow-emerald-500/20'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            {filterType === 'resume' && (
              <motion.div layoutId="attachmentFilterBg" className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl -z-10" />
            )}
            Resumes ({attachments.filter((a) => a.isResume).length})
          </button>
          <button
            onClick={() => setFilterType('non_resume')}
            className={`relative px-4 py-2.5 text-xs font-black rounded-xl whitespace-nowrap transition-all duration-300 ${
              filterType === 'non_resume' ? 'text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {filterType === 'non_resume' && (
              <motion.div layoutId="attachmentFilterBg" className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl -z-10" />
            )}
            Non-Resumes ({attachments.filter((a) => !a.isResume).length})
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-slate-200/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100/80 text-slate-400 text-[10px] uppercase font-black tracking-widest">
              <tr>
                <th className="py-4 px-6">File Details</th>
                <th className="py-4 px-6">Parent Email</th>
                <th className="py-4 px-6">Size / Type</th>
                <th className="py-4 px-6">Classification</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/50">
              <AnimatePresence mode="popLayout">
                {filteredAttachments.map((att) => {
                  const parentEmail = emails.find((e) => e.id === att.emailId);
                  return (
                    <motion.tr 
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key={att.id} 
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="py-5 px-6 font-bold text-[#0a192f] flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border ${
                            att.isResume
                              ? 'bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 border-emerald-100'
                              : 'bg-gradient-to-br from-slate-50 to-white text-slate-500 border-slate-200'
                          }`}
                        >
                          {att.isResume ? <FileText className="w-6 h-6" /> : <File className="w-6 h-6" />}
                        </div>
                        <div>
                          <div className="truncate max-w-[200px] sm:max-w-xs">{att.fileName}</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">ID: #{att.id}</div>
                        </div>
                      </td>

                      <td className="py-5 px-6 text-xs text-slate-600">
                        <div className="font-black text-slate-800 truncate max-w-[150px] sm:max-w-[250px]">
                          {parentEmail?.subject || 'Direct Upload'}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">{parentEmail?.sender}</div>
                      </td>

                      <td className="py-5 px-6 text-xs text-slate-600 font-medium">
                        <div className="text-slate-800 font-bold">{att.fileSize}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{att.fileType.split('/')[1] || 'doc'}</div>
                      </td>

                      <td className="py-5 px-6">
                        {att.isResume ? (
                          <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                            Resume (Parsed)
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-600 border border-slate-200 shadow-sm">
                            <XCircle className="w-3.5 h-3.5 mr-1.5" />
                            Non-Resume
                          </span>
                        )}
                      </td>

                      <td className="py-5 px-6 text-right">
                        <div className="inline-flex items-center justify-end space-x-2 w-full">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onViewResume(att.id)}
                            className="px-4 py-2 rounded-xl text-xs font-bold text-[#1e50ff] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors flex items-center space-x-1.5 shadow-sm"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Preview</span>
                          </motion.button>

                          {att.candidateId && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => onNavigate('profile', att.candidateId)}
                              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0a192f] to-slate-800 hover:shadow-lg hover:shadow-slate-500/20 transition-all flex items-center space-x-1.5"
                            >
                              <Sparkles className="w-4 h-4 text-emerald-400" />
                              <span>Score</span>
                            </motion.button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </AnimatePresence>
            </tbody>
          </table>
          {filteredAttachments.length === 0 && (
            <div className="p-12 text-center text-slate-500">
              <Filter className="w-12 h-12 mx-auto text-slate-300 mb-4" />
              <h3 className="text-lg font-black text-slate-700">No attachments found</h3>
              <p className="text-sm font-medium mt-1">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
