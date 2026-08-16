import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Link as LinkIcon, Plus, CheckCircle2, AlertCircle, Settings, Power, ExternalLink } from 'lucide-react';

const mockIntegrations = [
  { id: 1, name: 'Slack', description: 'Send pipeline updates and notifications to Slack channels.', category: 'Communication', status: 'Connected', icon: 'S', color: 'bg-indigo-500' },
  { id: 2, name: 'Google Calendar', description: 'Sync interview schedules directly with Google Calendar.', category: 'Productivity', status: 'Connected', icon: 'G', color: 'bg-rose-500' },
  { id: 3, name: 'Zoom', description: 'Automatically generate Zoom meeting links for interviews.', category: 'Video', status: 'Disconnected', icon: 'Z', color: 'bg-blue-500' },
  { id: 4, name: 'LinkedIn Recruiter', description: 'Import candidates directly from LinkedIn profiles.', category: 'Sourcing', status: 'Connected', icon: 'in', color: 'bg-sky-600' },
  { id: 5, name: 'Workday', description: 'Sync hired candidates with Workday HRIS.', category: 'HRIS', status: 'Error', icon: 'W', color: 'bg-amber-500' },
  { id: 6, name: 'OpenAI (GPT-4)', description: 'Power the resume parsing and matching algorithms.', category: 'AI', status: 'Connected', icon: 'AI', color: 'bg-emerald-500' },
];

export const IntegrationsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredIntegrations = mockIntegrations.filter(integration => 
    integration.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    integration.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Integrations</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Connect your favorite tools to streamline your hiring workflow.</p>
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
           <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap">
            <Plus className="w-4 h-4" />
            <span>Add Custom</span>
          </button>
        </div>
      </motion.div>

      {/* API Key Banner */}
      <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[#0a192f] to-[#1e50ff] rounded-2xl shadow-lg p-6 text-white relative overflow-hidden flex items-center justify-between">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10 max-w-2xl">
           <h2 className="text-xl font-black flex items-center mb-2">
             <LinkIcon className="w-5 h-5 mr-2" /> Developer API Access
           </h2>
           <p className="text-sm text-blue-100 font-medium">Build custom integrations or connect your internal tools using our REST API. Generate and manage your API keys securely.</p>
        </div>
        <button className="relative z-10 bg-white/20 hover:bg-white/30 border border-white/30 text-white px-5 py-2.5 rounded-xl font-bold backdrop-blur-md transition-all shadow-lg hidden sm:block">
          Manage API Keys
        </button>
      </motion.div>

      {/* Integrations Grid */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <div key={integration.id} className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-6 flex flex-col group hover:shadow-md hover:border-blue-200 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${integration.color} flex items-center justify-center text-white font-black text-xl shadow-inner`}>
                {integration.icon}
              </div>
              <div className="flex items-center space-x-2">
                 {integration.status === 'Connected' && <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Connected</span>}
                 {integration.status === 'Disconnected' && <span className="flex items-center text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full"><Power className="w-3.5 h-3.5 mr-1" /> Disconnected</span>}
                 {integration.status === 'Error' && <span className="flex items-center text-xs font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-full"><AlertCircle className="w-3.5 h-3.5 mr-1" /> Error</span>}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-slate-800">{integration.name}</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{integration.category}</span>
              </div>
              <p className="text-sm text-slate-500 font-medium line-clamp-2">{integration.description}</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              {integration.status === 'Connected' ? (
                <>
                  <button className="text-sm font-bold text-slate-500 hover:text-rose-500 transition-colors">Disconnect</button>
                  <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Settings className="w-4 h-4" /></button>
                </>
              ) : (
                <>
                  <button className="text-sm font-bold text-[#1e50ff] hover:text-blue-800 transition-colors">Connect</button>
                  <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><ExternalLink className="w-4 h-4" /></button>
                </>
              )}
            </div>
          </div>
        ))}
      </motion.div>
      
      {filteredIntegrations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 font-medium">No integrations found.</p>
        </div>
      )}
    </motion.div>
  );
};
