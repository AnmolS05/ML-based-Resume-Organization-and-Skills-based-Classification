import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  Paperclip, 
  Search, 
  Calendar, 
  User,
  Sparkles
} from 'lucide-react';
import { EmailItem, AttachmentItem } from '../types';

interface EmailsViewProps {
  emails: EmailItem[];
  attachments: AttachmentItem[];
  isScanning: boolean;
  onScanEmails: () => void;
  onViewResume: (attachmentId: number) => void;
  onNavigate: (view: string, candidateId?: number) => void;
}

export const EmailsView: React.FC<EmailsViewProps> = ({
  emails,
  attachments,
  isScanning,
  onScanEmails,
  onViewResume,
  onNavigate,
}) => {
  const [expandedEmailId, setExpandedEmailId] = useState<number | null>(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'resume_only'>('all');

  const filteredEmails = emails.filter((email) => {
    const matchesSearch = 
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.body.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    if (filterType === 'resume_only') {
      const emailAttachments = attachments.filter((a) => a.emailId === email.id);
      return emailAttachments.some((a) => a.isResume);
    }
    return true;
  });

  const toggleExpand = (id: number) => {
    setExpandedEmailId(expandedEmailId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6 max-w-7xl mx-auto pb-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200/50">
        <div>
           <div className="flex items-center space-x-2 text-xs font-bold text-[#1e50ff] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            <span>Incoming Comm Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight">
            Email Scanner & Attachments
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Automated scanning of recruitment inboxes, MIME parsing, and attachment classification.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="scan-inbox-btn"
            onClick={onScanEmails}
            disabled={isScanning}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#1e50ff] to-blue-600 hover:from-blue-700 hover:to-blue-800 disabled:opacity-60 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? 'Scanning Mailbox...' : 'Scan New Emails'}</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Filter and Search Bar */}
      <motion.div variants={itemVariants} className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-lg shadow-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-[350px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search sender, subject, keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/50 bg-white shadow-inner transition-all font-medium text-slate-700"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
              filterType === 'all'
                ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            All Emails ({emails.length})
          </button>
          <button
            onClick={() => setFilterType('resume_only')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 flex items-center space-x-1 ${
              filterType === 'resume_only'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/20'
                : 'bg-emerald-50/50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>With Resumes</span>
          </button>
        </div>
      </motion.div>

      {/* Emails Accordion List */}
      <motion.div variants={containerVariants} className="space-y-4">
        <AnimatePresence>
          {filteredEmails.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/50 backdrop-blur-md rounded-3xl p-16 text-center border border-white shadow-xl shadow-slate-200/30 space-y-4"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Mail className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-black text-slate-800">No emails matched your criteria</h3>
              <p className="text-sm font-medium text-slate-500 max-w-md mx-auto">
                Try adjusting your search terms or scan the inbox for new submissions.
              </p>
            </motion.div>
          ) : (
            filteredEmails.map((email, idx) => {
              const isExpanded = expandedEmailId === email.id;
              const linkedAttachments = attachments.filter((a) => a.emailId === email.id);
              const hasResume = linkedAttachments.some((a) => a.isResume);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  key={email.id}
                  className="bg-white/80 backdrop-blur-lg rounded-3xl border border-white shadow-lg shadow-slate-200/40 overflow-hidden transition-all hover:shadow-xl hover:border-slate-200/60"
                >
                  {/* Email Header row */}
                  <div
                    onClick={() => toggleExpand(email.id)}
                    className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 select-none group"
                  >
                    <div className="flex items-start space-x-5">
                      <div
                        className={`relative w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                          hasResume ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 border border-emerald-300 text-emerald-700' : 'bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 text-slate-600'
                        }`}
                      >
                         {hasResume && <div className="absolute -inset-1 bg-emerald-400/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>}
                        <Mail className="relative w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-base sm:text-lg font-black text-slate-900">{email.subject}</h2>
                          {hasResume ? (
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                              Resume Attached
                            </span>
                          ) : (
                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                              Non-Resume / Info
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 mt-2">
                          <span className="flex items-center space-x-1.5">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                            <span className="font-bold text-slate-700">{email.sender}</span>
                          </span>
                          <span className="flex items-center space-x-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{email.date}</span>
                          </span>
                          <span className="flex items-center space-x-1.5">
                            <Paperclip className="w-3.5 h-3.5 text-slate-400" />
                            <span className="font-bold text-[#1e50ff]">{linkedAttachments.length} Attachment(s)</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="hidden sm:block text-right">
                        <span className="text-[10px] font-black px-3 py-1.5 rounded-full bg-slate-900 text-white uppercase tracking-widest shadow-sm">
                          {email.status}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'bg-slate-100' : 'group-hover:bg-slate-100'}`}>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100/50 bg-gradient-to-b from-slate-50/50 to-white/50 space-y-6 overflow-hidden"
                      >
                        {/* Email Message Content */}
                        <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                            Message Body
                          </div>
                          <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed font-mono bg-slate-50 p-4 rounded-xl border border-slate-100">
                            {email.body}
                          </p>
                        </div>

                        {/* Linked Attachments Table */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                              Linked Attachments & Classification ({linkedAttachments.length})
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {linkedAttachments.map((att) => (
                              <div
                                key={att.id}
                                className="group relative bg-white p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3 shadow-sm hover:shadow-md transition-all hover:border-slate-300"
                              >
                                <div className="flex items-center space-x-4 overflow-hidden">
                                  <div
                                    className={`relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                      att.isResume
                                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                                        : 'bg-slate-50 text-slate-500 border border-slate-200'
                                    }`}
                                  >
                                    <FileText className="w-5 h-5" />
                                  </div>

                                  <div className="overflow-hidden">
                                    <div className="text-sm font-bold text-slate-800 truncate group-hover:text-[#1e50ff] transition-colors" title={att.fileName}>
                                      {att.fileName}
                                    </div>
                                    <div className="text-[11px] font-medium text-slate-500 flex items-center space-x-2 mt-1">
                                      <span>{att.fileSize}</span>
                                      <span className="text-slate-300">•</span>
                                      {att.isResume ? (
                                        <span className="inline-flex items-center text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                                          <CheckCircle2 className="w-3 h-3 mr-1" />
                                          Resume
                                        </span>
                                      ) : (
                                        <span className="inline-flex items-center text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded-full">
                                          <XCircle className="w-3 h-3 mr-1" />
                                          Non-Resume
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-2 shrink-0">
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onViewResume(att.id)}
                                    className="p-2 rounded-xl text-[#1e50ff] bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-center border border-blue-100"
                                    title="View Document Preview"
                                  >
                                    <Eye className="w-4 h-4" />
                                  </motion.button>

                                  {att.candidateId && (
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={() => onNavigate('profile', att.candidateId)}
                                      className="px-3 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-md shadow-emerald-500/20 flex items-center space-x-1.5"
                                      title="View Candidate ATS Profile"
                                    >
                                      <Sparkles className="w-3.5 h-3.5" />
                                      <span className="hidden sm:inline">Profile</span>
                                    </motion.button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
