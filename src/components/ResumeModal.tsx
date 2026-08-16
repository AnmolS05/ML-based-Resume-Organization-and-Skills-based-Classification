import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Candidate, AttachmentItem } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidate?: Candidate;
  attachment?: AttachmentItem;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  candidate,
  attachment,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-slate-900/30 overflow-hidden border border-white flex flex-col max-h-[90vh]"
          >
            
            {/* Modal Topbar */}
            <div className="px-6 py-4 bg-gradient-to-r from-[#0a192f] to-slate-800 text-white flex items-center justify-between border-b border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-300 shadow-inner">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-black tracking-wide truncate max-w-[200px] sm:max-w-md">
                    {attachment?.fileName || `${candidate?.name}_Resume.pdf`}
                  </div>
                  <div className="text-[10px] font-bold text-blue-300/80 uppercase tracking-widest mt-0.5 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>PDF Document Preview</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const text = candidate?.rawResumeText || `Resume details for ${candidate?.name}`;
                    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${(candidate?.name || 'Resume').replace(/\\s+/g, '_')}.txt`;
                    a.click();
                  }}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-blue-100 transition-colors backdrop-blur-sm border border-white/10"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/30 text-rose-300 transition-colors backdrop-blur-sm border border-rose-500/20"
                  title="Close Preview"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Modal Body: Styled Resume Document Paper */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-50/50 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-3xl bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 sm:p-12 border border-slate-100 text-slate-800 font-sans space-y-8 relative overflow-hidden"
              >
                
                {/* Resume Header */}
                <div className="border-b-2 border-slate-900/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative">
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-50 rounded-full blur-2xl pointer-events-none -z-10"></div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight uppercase">
                      {candidate?.name || 'Ayan Naresh Gadpal'}
                    </h1>
                    <div className="text-sm font-bold tracking-widest text-[#1e50ff] mt-2 uppercase">
                      Python Backend & Full-Stack Developer
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-slate-500 space-y-2 sm:text-right">
                    <div className="flex items-center sm:justify-end space-x-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{candidate?.email || 'ayan.gadpal@example.com'}</span>
                    </div>
                    <div className="flex items-center sm:justify-end space-x-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span>{candidate?.phone || '+91 98230 45678'}</span>
                    </div>
                    <div className="flex items-center sm:justify-end space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>Pune, Maharashtra, India</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-3 relative group">
                  <h2 className="text-xs font-black tracking-widest uppercase text-slate-400 flex items-center space-x-2">
                    <User className="w-4 h-4 text-slate-300 group-hover:text-[#1e50ff] transition-colors" />
                    <span>Professional Summary</span>
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium pl-6">
                    {candidate?.experienceSummary || 'Experienced Python Engineer with over 3 years of commercial experience in building high-performance REST APIs, distributed microservices, and database systems with Django, MySQL, and Docker.'}
                  </p>
                </div>

                {/* Skills */}
                <div className="space-y-3 group">
                  <h2 className="text-xs font-black tracking-widest uppercase text-slate-400 flex items-center space-x-2">
                    <Award className="w-4 h-4 text-slate-300 group-hover:text-[#1e50ff] transition-colors" />
                    <span>Technical Proficiencies</span>
                  </h2>
                  <div className="flex flex-wrap gap-2 pl-6">
                    {(candidate?.allSkills || ['Python', 'Django', 'REST API', 'SQL', 'MySQL', 'Git', 'FastAPI', 'Docker']).map((s) => (
                      <span key={s} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 shadow-sm hover:shadow-md transition-shadow hover:border-blue-200 hover:text-[#1e50ff] cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-4 group">
                  <h2 className="text-xs font-black tracking-widest uppercase text-slate-400 flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-slate-300 group-hover:text-[#1e50ff] transition-colors" />
                    <span>Work Experience</span>
                  </h2>
                  <div className="space-y-6 pl-6 relative">
                    <div className="absolute left-1.5 top-2 bottom-2 w-px bg-slate-100"></div>
                    {candidate?.experienceDetails?.map((exp, i) => (
                      <div key={i} className="space-y-2 relative">
                        <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-blue-200 border-2 border-white shadow-sm"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                          <span className="text-sm font-black text-slate-800">{exp.role} <span className="text-slate-400 font-semibold mx-1">at</span> <span className="text-[#1e50ff]">{exp.company}</span></span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-md border border-slate-100 inline-block w-max">{exp.duration}</span>
                        </div>
                        <ul className="list-disc list-inside text-xs font-medium text-slate-600 space-y-1.5 ml-2">
                          {exp.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="pl-1 relative before:content-[''] before:absolute before:left-[-12px] before:top-[8px] before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full before:transition-colors hover:before:bg-[#1e50ff] list-none">{h}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-3 group">
                  <h2 className="text-xs font-black tracking-widest uppercase text-slate-400 flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-slate-300 group-hover:text-[#1e50ff] transition-colors" />
                    <span>Education</span>
                  </h2>
                  <div className="space-y-3 pl-6">
                    {candidate?.educationDetails?.map((edu, i) => (
                      <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center text-xs text-slate-700 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                        <div>
                          <span className="font-black text-slate-800">{edu.degree}</span>
                          <span className="text-slate-400 font-semibold mx-1.5">•</span>
                          <span className="font-semibold text-slate-600">{edu.institution}</span>
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 sm:mt-0">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                {candidate?.projects && candidate.projects.length > 0 && (
                  <div className="space-y-3 group">
                    <h2 className="text-xs font-black tracking-widest uppercase text-slate-400 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-slate-300 group-hover:text-[#1e50ff] transition-colors" />
                      <span>Key Projects</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 pl-6">
                      {candidate?.projects?.map((proj, i) => (
                        <div key={i} className="text-xs text-slate-700 space-y-1.5 p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow hover:border-blue-100">
                          <div className="font-black text-[#0a192f]">{proj.title}</div>
                          <p className="text-slate-500 font-medium leading-relaxed">{proj.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-white/80 backdrop-blur-xl border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center space-x-3 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                <span className="bg-slate-100 px-2 py-1 rounded-md">CID: #{candidate?.id || 1}</span>
                <span className="bg-slate-100 px-2 py-1 rounded-md">AID: #{attachment?.id || 101}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-900 transition-colors shadow-md flex items-center space-x-2"
              >
                <span>Close Preview</span>
              </motion.button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
