import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, UserPlus, Sparkles, User, Lock, Mail as MailIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SignupView: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // In a real app, you would make an API call here.
    // For now, redirect to login page.
    alert(`Account created for ${username}. Please login.`);
    navigate('/login');
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
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="sm:mx-auto sm:w-full sm:max-w-md relative z-10"
      >
        <div className="text-center space-y-4">
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
            onClick={() => navigate('/')}
            className="mx-auto inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-[#0a192f] to-slate-800 text-white shadow-xl shadow-slate-900/20 cursor-pointer relative group"
          >
            <div className="absolute inset-0 bg-[#1e50ff]/20 rounded-3xl blur-md group-hover:bg-[#1e50ff]/40 transition-colors"></div>
            <Mail className="w-8 h-8 text-[#1e50ff] relative z-10" />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight">
              Create an Account
            </h2>
            <p className="text-sm font-bold text-slate-500 mt-2">
              Join the AI Resume Screening platform
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-8 px-4 sm:px-0">
          <div className="bg-white/70 backdrop-blur-xl py-10 px-6 sm:px-12 rounded-[2rem] border border-white shadow-2xl shadow-slate-200/50 space-y-8 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
                  Username
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1e50ff] transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 text-sm font-bold rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/20 focus:border-[#1e50ff] bg-white/50 backdrop-blur-sm shadow-inner text-slate-800 transition-all"
                    placeholder="Choose a username"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1e50ff] transition-colors">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 text-sm font-bold rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/20 focus:border-[#1e50ff] bg-white/50 backdrop-blur-sm shadow-inner text-slate-800 transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1e50ff] transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 text-sm font-bold rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/20 focus:border-[#1e50ff] bg-white/50 backdrop-blur-sm shadow-inner text-slate-800 transition-all"
                    placeholder="Create a strong password"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1e50ff] transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 text-sm font-bold rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e50ff]/20 focus:border-[#1e50ff] bg-white/50 backdrop-blur-sm shadow-inner text-slate-800 transition-all"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl text-sm font-black text-white bg-gradient-to-r from-[#0a192f] to-[#1e50ff] hover:shadow-xl hover:shadow-blue-500/25 transition-all flex items-center justify-center space-x-3 cursor-pointer relative overflow-hidden group border border-transparent"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <UserPlus className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Sign Up</span>
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity absolute -left-5" />
                  </motion.div>
                </motion.button>
              </div>
            </form>

            <div className="text-center pt-2 relative z-10">
              <span className="text-sm font-bold text-slate-500">Already have an account? </span>
              <button
                onClick={() => navigate('/login')}
                className="text-sm font-black text-[#1e50ff] hover:text-blue-700 hover:underline cursor-pointer transition-colors"
              >
                Sign In
              </button>
            </div>

            <div className="text-center pt-4 border-t border-slate-100/50 relative z-10">
              <button
                onClick={() => navigate('/')}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
              >
                ← Back to Home / Public Landing
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
