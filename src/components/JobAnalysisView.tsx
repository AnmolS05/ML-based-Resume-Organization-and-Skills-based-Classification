import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Rocket, 
  Info, 
  CheckCircle2, 
  Plus, 
  X, 
  Sliders, 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { JobRequirement } from '../types';

interface JobAnalysisViewProps {
  jobRequirement: JobRequirement;
  onSaveAndAnalyze: (jobData: JobRequirement) => void;
  isAnalyzing: boolean;
}

export const JobAnalysisView: React.FC<JobAnalysisViewProps> = ({
  jobRequirement,
  onSaveAndAnalyze,
  isAnalyzing,
}) => {
  const [role, setRole] = useState(jobRequirement.role);
  const [experience, setExperience] = useState(jobRequirement.requiredExperience);
  const [description, setDescription] = useState(jobRequirement.description);
  const [skills, setSkills] = useState<string[]>(jobRequirement.requiredSkills);
  const [newSkillInput, setNewSkillInput] = useState('');

  const handleAddSkill = () => {
    if (newSkillInput.trim() && !skills.includes(newSkillInput.trim())) {
      setSkills([...skills, newSkillInput.trim()]);
      setNewSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const yearsNum = parseFloat(experience.replace(/[^\d.]/g, '')) || 2.0;
    onSaveAndAnalyze({
      ...jobRequirement,
      role,
      requiredExperience: experience,
      requiredExperienceYears: yearsNum,
      description,
      requiredSkills: skills,
    });
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
      {/* Header with Title and HR Admin Badge */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-200/50 gap-4">
        <div>
           <div className="flex items-center space-x-2 text-xs font-bold text-[#1e50ff] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            <span>Target Configuration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight">
            Create Job Analysis
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Configure matching criteria, target experience threshold, and mandatory skills for ATS scoring.
          </p>
        </div>

        {/* HR Admin Avatar Profile Pill */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center space-x-3 bg-white/70 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white shadow-lg shadow-slate-200/50"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-40"></div>
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-[#1e50ff] to-indigo-600 flex items-center justify-center font-black text-white text-sm shadow-inner border border-blue-400/30">
              HA
            </div>
          </div>
          <div>
            <div className="text-sm font-black text-[#0a192f]">HR Admin</div>
            <div className="text-[10px] text-emerald-600 font-bold flex items-center tracking-widest uppercase">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              ATS Active
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Form Container */}
      <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-slate-200/40 p-6 sm:p-8 space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
            
            {/* Left Column: Job Role, Experience, Skills */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Job Role <span className="text-rose-500">*</span>
                </label>
                <input
                  id="job-role-input"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g., Python Developer"
                  required
                  className="w-full px-4 py-3 text-sm font-bold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/50 bg-white shadow-inner transition-all text-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Required Experience <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="required-experience-select"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-3 text-sm font-bold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/50 bg-white shadow-inner transition-all text-slate-900 cursor-pointer appearance-none"
                  >
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                    <option value="3 Years">3 Years</option>
                    <option value="4 Years">4 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Skills Tags Manager */}
              <div className="space-y-3 pt-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center justify-between">
                  <span>Mandatory Skills</span>
                  <span className="text-[#1e50ff] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">60% Weight</span>
                </label>
                
                <div className="flex flex-wrap gap-2 min-h-[3rem] p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 shadow-inner">
                  <AnimatePresence>
                    {skills.map((skill) => (
                      <motion.span
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        key={skill}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-[#1e50ff] border border-blue-200 shadow-sm group"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{skill}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                          className="text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  <input
                    type="text"
                    value={newSkillInput}
                    onChange={(e) => setNewSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddSkill();
                      }
                    }}
                    placeholder="Add mandatory skill..."
                    className="flex-1 px-4 py-3 text-sm font-medium rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/50 bg-white shadow-inner transition-all text-slate-900"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={handleAddSkill}
                    className="px-5 py-3 text-sm font-bold rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center space-x-2 cursor-pointer shadow-lg shadow-slate-900/20 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add</span>
                  </motion.button>
                </div>
              </div>

              {/* Weights Indicator Card */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center space-x-2 relative z-10">
                  <Sliders className="w-4 h-4 text-[#1e50ff]" />
                  <span>Configured Scoring Weights</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs relative z-10">
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-xl border border-slate-100 shadow-sm">
                    <span className="font-bold text-slate-600">Skills</span>
                    <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">60%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-xl border border-slate-100 shadow-sm">
                    <span className="font-bold text-slate-600">Experience</span>
                    <span className="font-black text-[#1e50ff] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">20%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-xl border border-slate-100 shadow-sm">
                    <span className="font-bold text-slate-600">Projects</span>
                    <span className="font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">10%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-xl border border-slate-100 shadow-sm">
                    <span className="font-bold text-slate-600">Education</span>
                    <span className="font-black text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">10%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Job Description Textarea */}
            <div className="lg:col-span-7 space-y-2 flex flex-col h-full">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">
                Job Description & Scope Requirements <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="job-description-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Paste the full job description, qualifications, and role scope..."
                required
                className="w-full flex-1 min-h-[300px] lg:min-h-0 px-5 py-4 text-sm font-medium rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/50 bg-white shadow-inner transition-all text-slate-800 leading-relaxed font-mono resize-y lg:resize-none"
              />
            </div>

          </div>

          {/* Light-blue Alert Strip with Info Icon */}
          <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/50 border border-blue-200/60 rounded-2xl p-4 sm:p-5 flex items-start space-x-4 text-blue-900 shadow-sm relative z-10">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-blue-100 shrink-0">
              <Info className="w-5 h-5 text-[#1e50ff]" />
            </div>
            <p className="text-sm font-semibold leading-relaxed mt-1">
              Our system will analyze all candidate resumes and rank them based on skills, experience, projects and education match relative to these inputs.
            </p>
          </div>

          {/* Action Button Right-Aligned */}
          <div className="flex items-center justify-end pt-6 border-t border-slate-100 relative z-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="analyze-candidates-btn"
              type="submit"
              disabled={isAnalyzing}
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl text-base font-black text-white bg-gradient-to-r from-[#1e50ff] to-blue-600 hover:from-blue-600 hover:to-blue-800 shadow-xl shadow-blue-500/30 transition-all cursor-pointer disabled:opacity-60 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <Rocket className={`relative z-10 w-5 h-5 ${isAnalyzing ? 'animate-bounce' : 'group-hover:animate-pulse'}`} />
              <span className="relative z-10 tracking-wide">{isAnalyzing ? 'Analyzing 25 Resumes...' : 'Analyze Candidates'}</span>
            </motion.button>
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
};
