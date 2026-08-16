import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Search, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  FileText, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const HomeView: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  const handleStartMatching = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0a192f] to-[#1e50ff] flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-105">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff]">
                HR Email Scanner
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-bold px-2 py-1 rounded-lg bg-blue-50 text-[#1e50ff] border border-blue-200 uppercase tracking-widest shadow-sm">
                AI ATS v2.4
              </span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'How It Works', 'What We Analyze'].map((item, idx) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(/ /g, '-')}`}
                className={`text-sm font-bold transition-colors ${item === 'Home' ? 'text-[#1e50ff]' : 'text-slate-500 hover:text-[#0a192f]'}`}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="text-sm font-bold text-slate-600 hover:text-[#1e50ff] px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  Log in
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="text-sm font-bold text-white bg-gradient-to-r from-[#1e50ff] to-blue-600 hover:to-blue-700 px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate('/dashboard')}
                className="text-sm font-bold text-white bg-gradient-to-r from-[#1e50ff] to-blue-600 hover:to-blue-700 px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center space-x-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {isAuthenticated && (
              <button
                onClick={handleStartMatching}
                className="text-sm font-bold text-white bg-gradient-to-r from-[#0a192f] to-slate-800 hover:to-slate-900 px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all ml-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                Launch
              </button>
            )}
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Text & CTA */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-8 text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white/60 backdrop-blur-sm border border-white shadow-sm text-xs font-black uppercase tracking-widest text-[#1e50ff]">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>AI-Powered Automated Resume Screening</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0a192f] tracking-tight leading-[1.1]">
                Find the Best Candidate for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e50ff] to-blue-400 relative">
                  Your Job
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                Scan recruitment inboxes automatically, classify PDF resumes, parse extracted skills, and rank candidate profiles using deterministic weighted ATS criteria with explainable AI rationale.
              </motion.p>

              {/* Action Button & Annotation Pointer */}
              <motion.div variants={fadeInUp} className="pt-4 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartMatching}
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl text-base font-black text-white bg-gradient-to-r from-[#1e50ff] to-[#0a192f] shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all cursor-pointer group"
                >
                  <span>Start Candidate Matching</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <div className="flex items-center space-x-3 text-sm text-slate-600 bg-white/70 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white shadow-md w-fit">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
                    <div className="relative w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="font-bold">It takes less than a minute!</span>
                </div>
              </motion.div>

              {/* Live metrics strip */}
              <motion.div variants={fadeInUp} className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200/60 max-w-lg">
                {[
                  { label: 'Parsing Accuracy', value: '99.4%', color: 'text-[#0a192f]' },
                  { label: 'Faster Screening', value: '10x', color: 'text-[#1e50ff]' },
                  { label: 'Transparent Scoring', value: '100%', color: 'text-emerald-600' }
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column Isometric / Interactive Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none perspective-1000">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-emerald-500/20 rounded-[3rem] blur-3xl -z-10 animate-pulse"></div>

                <div className="relative bg-white/80 backdrop-blur-2xl rounded-[2rem] border border-white shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 transform-gpu hover:-translate-y-2 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-[#1e50ff] shadow-inner">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-black text-slate-800">Job: Python Developer</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">25 Resumes Analyzed</div>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-[10px] uppercase tracking-widest font-black border border-emerald-100 shadow-sm">
                      Rank #1 Top Match
                    </span>
                  </div>

                  {/* Candidate Mock Showcase Card */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-white shadow-md flex items-center justify-center font-black text-amber-700 text-lg">
                          1
                        </div>
                        <div>
                          <div className="text-base font-black text-[#0a192f]">Ayan Naresh Gadpal</div>
                          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">3.0 Years Exp • B.Tech CSE</div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1e50ff] to-blue-400">86.66%</div>
                        <div className="text-[10px] uppercase font-black tracking-widest text-emerald-500 mt-0.5">Strong Match</div>
                      </div>
                    </div>

                    {/* Mini Progress bars */}
                    <div className="space-y-3 pt-2">
                      <div>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5">
                          <span>Skills Match <span className="text-slate-400 font-medium lowercase">(60% wgt)</span></span>
                          <span className="text-emerald-600">100% (6/6)</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden shadow-inner">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5 pt-1">
                          <span>Experience <span className="text-slate-400 font-medium lowercase">(20% wgt)</span></span>
                          <span className="text-[#1e50ff]">3.0 yrs (Req: 2.0)</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden shadow-inner">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="bg-gradient-to-r from-[#1e50ff] to-blue-400 h-full rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {['Python', 'Django', 'REST API', 'SQL', 'MySQL', 'Git'].map((s, i) => (
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + (i * 0.1) }}
                          key={s} 
                          className="inline-flex items-center text-[10px] font-bold bg-white border border-slate-200 shadow-sm px-2.5 py-1 rounded-lg text-slate-700"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1.5" />
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* AI Explanation Banner */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100/50 rounded-2xl p-4 text-xs text-emerald-900 flex items-start space-x-3 shadow-sm"
                  >
                    <div className="p-1.5 bg-white rounded-lg shadow-sm border border-emerald-100 shrink-0">
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="leading-relaxed">
                      <span className="font-black uppercase tracking-wider text-[10px] block mb-1">AI Rationale</span>
                      <span className="font-medium">Meets 100% of required technical stack, exceeds required tenure, and features production-grade Django microservices.</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* "How It Works" 3-Step Numbered Row */}
      <section id="how-it-works" className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#1e50ff] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">3-Step Workflow</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a192f] tracking-tight">How It Works</h2>
            <p className="text-slate-500 font-medium text-lg">
              A fully automated pipeline from inbox attachment retrieval to explainable candidate ranking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left">
            {[
              { num: '01', title: 'Enter Job', icon: FileText, color: 'blue', desc: 'Define the job role, required years of experience, and paste your job description with mandatory skills.' },
              { num: '02', title: 'Analyze Resumes', icon: Search, color: 'indigo', desc: 'The scanner extracts email attachments, validates PDF resumes, and parses skills, education, and tenure.' },
              { num: '03', title: 'Rank Candidates', icon: BarChart3, color: 'emerald', desc: 'Calculates weighted ATS scores (Skills 60%, Exp 20%, Projects 10%, Edu 10%) and generates instant AI explanations.' }
            ].map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative bg-white/50 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${step.color}-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-colors group-hover:bg-${step.color}-500/10`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-${step.color}-50 text-${step.color}-600 flex items-center justify-center mb-6 shadow-sm border border-${step.color}-100 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-8 right-8 text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors pointer-events-none select-none">{step.num}</div>
                <h3 className="text-2xl font-black text-[#0a192f] mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* "What We Analyze" Section (4 Colored Card Indicators) */}
      <section id="what-we-analyze" className="py-24 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#1e50ff] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Scoring Model</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a192f] tracking-tight">What We Analyze</h2>
            <p className="text-slate-500 font-medium text-lg">
              Transparent, deterministic evaluation breakdown with weighted criteria to eliminate bias.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: 'Skills Match', pct: '60%', icon: Zap, color: 'emerald', desc: 'Exact and semantic keyword matching against mandatory and optional technical competencies.' },
              { title: 'Experience', pct: '20%', icon: Briefcase, color: 'blue', desc: 'Evaluates total relevant years of professional industry tenure against role benchmarks.' },
              { title: 'Projects', pct: '10%', icon: TrendingUp, color: 'amber', desc: 'Assesses portfolio applications, architecture complexity, and hands-on deliverables.' },
              { title: 'Education', pct: '10%', icon: Award, color: 'purple', desc: 'Validates degrees, university accreditation, specialization relevance, and certifications.' }
            ].map((metric, idx) => (
              <motion.div 
                key={metric.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-${metric.color}-50/50 backdrop-blur-md border border-${metric.color}-100 rounded-[2rem] p-8 space-y-4 relative overflow-hidden group shadow-lg shadow-${metric.color}-500/5 hover:shadow-xl hover:shadow-${metric.color}-500/10 transition-all`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${metric.color}-400/10 rounded-full blur-2xl pointer-events-none`}></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-${metric.color}-500 text-white flex items-center justify-center font-bold shadow-md shadow-${metric.color}-500/30 group-hover:rotate-12 transition-transform`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-3xl font-black text-${metric.color}-600`}>{metric.pct}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 relative z-10">{metric.title}</h3>
                <p className="text-xs font-medium text-slate-600 leading-relaxed relative z-10">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartMatching}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-black text-white bg-gradient-to-r from-[#0a192f] to-slate-800 hover:to-slate-900 shadow-xl shadow-slate-900/20 transition-all cursor-pointer group"
            >
              <span>Launch Dashboard & Scanner</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[#0a192f] text-slate-400 py-12 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e50ff] to-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-white font-black text-lg tracking-wide">HR Email Scanner & ATS</span>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Stage 9: Production Dashboard • React Router Architecture
          </p>
        </div>
      </footer>
    </div>
  );
};
