import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Copy, Check, Download, FileText, Layers, Terminal } from 'lucide-react';
import { flaskAppCode, databasePyCode, baseHtmlCode, dashboardHtmlCode, resultsHtmlCode, profileHtmlCode, jobAnalysisHtmlCode, emailsHtmlCode, styleCssCode } from '../data/flaskSourceCode';

export const FlaskCodeViewer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>('app.py');
  const [copied, setCopied] = useState(false);

  const fileMap: Record<string, { name: string; lang: string; code: string; desc: string }> = {
    'app.py': {
      name: 'app.py',
      lang: 'python',
      code: flaskAppCode,
      desc: 'Complete Flask server routing, SQLite queries, scan-email triggers, and ATS ranking handlers.',
    },
    'database.py': {
      name: 'database.py',
      lang: 'python',
      code: databasePyCode,
      desc: 'SQLite initialization script for emails, attachments, and candidates tables with seed data.',
    },
    'templates/base.html': {
      name: 'templates/base.html',
      lang: 'html',
      code: baseHtmlCode,
      desc: 'Shared Jinja2 base layout with Bootstrap 5, FontAwesome, and dark navy persistent sidebar.',
    },
    'templates/dashboard.html': {
      name: 'templates/dashboard.html',
      lang: 'html',
      code: dashboardHtmlCode,
      desc: 'Overview dashboard template with key metric cards, action triggers, and recent activities.',
    },
    'templates/job_analysis.html': {
      name: 'templates/job_analysis.html',
      lang: 'html',
      code: jobAnalysisHtmlCode,
      desc: 'Create Job Analysis template with role inputs, mandatory skills, and description.',
    },
    'templates/results.html': {
      name: 'templates/results.html',
      lang: 'html',
      code: resultsHtmlCode,
      desc: 'Candidate rankings results page with medal badges (🥇,🥈,🥉) and weighted match bars.',
    },
    'templates/profile.html': {
      name: 'templates/profile.html',
      lang: 'html',
      code: profileHtmlCode,
      desc: 'Detailed candidate profile and AI ranking explanation with ✔ strengths and ✘ gaps.',
    },
    'templates/emails.html': {
      name: 'templates/emails.html',
      lang: 'html',
      code: emailsHtmlCode,
      desc: 'Email scanner inbox view with accordion expansion and classified attachment badges.',
    },
    'static/style.css': {
      name: 'static/style.css',
      lang: 'css',
      code: styleCssCode,
      desc: 'Custom CSS rules for dark navy sidebar (#0a192f), bright blue accents, and card styling.',
    },
  };

  const currentFile = fileMap[selectedFile] || fileMap['app.py'];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentFile.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = selectedFile.split('/').pop() || 'code.txt';
    a.click();
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-200/50 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#1e50ff] mb-2 bg-blue-50 w-max px-3 py-1.5 rounded-lg border border-blue-100">
            <Terminal className="w-4 h-4" />
            <span>Python & Flask Architecture Source</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight">
            Flask Backend & Jinja2 Templates
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-2 max-w-2xl">
            Ready-to-deploy Python/Flask code for Stage 9 with SQLite database schema, Bootstrap 5 templates, and ATS ranking routes.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-white/80 backdrop-blur-sm hover:bg-white border border-slate-200 transition-all shadow-sm cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#1e50ff] to-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download {selectedFile.split('/').pop()}</span>
          </motion.button>
        </div>
      </motion.div>

      {/* File Navigation Pills */}
      <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 p-3 bg-white/40 backdrop-blur-xl rounded-2xl border border-white shadow-sm">
        {Object.keys(fileMap).map((fileKey) => (
          <motion.button
            key={fileKey}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedFile(fileKey)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
              selectedFile === fileKey
                ? 'bg-gradient-to-r from-[#0a192f] to-[#1e50ff] text-white shadow-md shadow-blue-500/20 border border-transparent'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/60 hover:border-slate-300 hover:shadow-sm'
            }`}
          >
            <FileText className={`w-4 h-4 ${selectedFile === fileKey ? 'opacity-100' : 'opacity-50'}`} />
            <span>{fileKey}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Code Card Viewer */}
      <motion.div 
        variants={fadeInUp}
        className="bg-gradient-to-b from-[#0a192f] to-[#040d1a] rounded-[2rem] border border-slate-800 shadow-2xl shadow-slate-900/40 overflow-hidden text-slate-200 font-mono text-xs relative group"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>
        
        <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              <Terminal className="w-3 h-3 text-blue-400" />
              <span className="font-bold text-slate-200 tracking-wide">{currentFile.name}</span>
            </div>
          </div>

          <div className="text-slate-400 text-xs font-sans font-medium flex items-center space-x-2 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentFile.desc}</span>
          </div>
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFile}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 overflow-x-auto max-h-[600px] leading-relaxed custom-scrollbar"
            >
              <pre className="text-slate-300 font-mono select-all text-[13px]">
                {currentFile.code}
              </pre>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};
