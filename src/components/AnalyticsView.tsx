import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, Legend
} from 'recharts';
import { TrendingUp, Users, FileText, CheckCircle2 } from 'lucide-react';

const matchData = [
  { name: '0-50%', count: 4 },
  { name: '51-70%', count: 8 },
  { name: '71-85%', count: 15 },
  { name: '86-100%', count: 7 },
];

const timelineData = [
  { name: 'Mon', applications: 12 },
  { name: 'Tue', applications: 19 },
  { name: 'Wed', applications: 15 },
  { name: 'Thu', applications: 25 },
  { name: 'Fri', applications: 22 },
  { name: 'Sat', applications: 10 },
  { name: 'Sun', applications: 8 },
];

const sourceData = [
  { name: 'LinkedIn', value: 45 },
  { name: 'Direct Email', value: 30 },
  { name: 'Company Portal', value: 15 },
  { name: 'Referral', value: 10 },
];

const COLORS = ['#1e50ff', '#10b981', '#f59e0b', '#8b5cf6'];

export const AnalyticsView: React.FC = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-200/50 gap-4">
        <div>
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight">
            Analytics & Reporting
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Deep dive into your hiring pipeline metrics and ATS model performance.
          </p>
        </div>
        <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-xl p-1.5 rounded-2xl shadow-sm border border-slate-200/50">
          <button className="px-4 py-2 rounded-xl text-sm font-bold bg-white text-[#0a192f] shadow-sm">
            Last 7 Days
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-700">
            30 Days
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-700">
            All Time
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Applications', value: '111', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100', trend: '+12%' },
          { title: 'Resumes Parsed', value: '109', icon: FileText, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100', trend: '+14%' },
          { title: 'Average Match', value: '72%', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100', trend: '+5%' },
          { title: 'Shortlisted', value: '24', icon: CheckCircle2, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100', trend: '+2%' },
        ].map((kpi, idx) => (
          <div key={idx} className={`p-6 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}>
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${kpi.bg} opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">{kpi.title}</p>
                <h3 className="text-3xl font-black text-[#0a192f]">{kpi.value}</h3>
              </div>
              <div className={`p-3 rounded-2xl ${kpi.bg} ${kpi.border} border`}>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2 relative z-10">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{kpi.trend}</span>
              <span className="text-xs font-medium text-slate-400">vs last period</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Match Distribution */}
        <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-xl shadow-slate-200/40">
          <div className="mb-6">
            <h3 className="text-lg font-black text-[#0a192f]">Match Score Distribution</h3>
            <p className="text-xs text-slate-500 font-medium">ATS evaluation buckets across all candidates</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={matchData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="count" fill="#1e50ff" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Application Timeline */}
        <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-xl shadow-slate-200/40">
          <div className="mb-6">
            <h3 className="text-lg font-black text-[#0a192f]">Inbound Volume</h3>
            <p className="text-xs text-slate-500 font-medium">Applications received over time</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                />
                <Area type="monotone" dataKey="applications" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorApps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Source Breakdown */}
        <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-xl shadow-slate-200/40 lg:col-span-2">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-lg font-black text-[#0a192f]">Candidate Sources</h3>
              <p className="text-xs text-slate-500 font-medium">Where your top talent is coming from</p>
            </div>
            
            <div className="h-64 w-full md:w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(255,255,255,0.5)" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ fontWeight: 'bold' }}
                  />
                  <Legend verticalAlign="middle" align="right" layout="vertical" wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};
