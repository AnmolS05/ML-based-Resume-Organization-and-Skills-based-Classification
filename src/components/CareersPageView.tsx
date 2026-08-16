import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Palette, Layout, Link as LinkIcon, Type, Image as ImageIcon, Save, Eye, Smartphone, Monitor } from 'lucide-react';

export const CareersPageView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('branding');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

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
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Careers Page Builder</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Design and customize your public-facing job portal.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 px-4 py-2.5 rounded-xl font-bold transition-all shadow-sm">
             <LinkIcon className="w-4 h-4" />
             <span>Copy Link</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-500/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Save className="w-5 h-5" />
            <span>Publish Changes</span>
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Controls */}
        <motion.div variants={fadeInUp} className="w-full lg:w-80 space-y-4">
           <div className="bg-white/80 backdrop-blur-xl p-2 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col space-y-1">
             <button 
               onClick={() => setActiveTab('branding')}
               className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'branding' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
             >
                <Palette className="w-5 h-5" />
                <span>Brand & Colors</span>
             </button>
             <button 
               onClick={() => setActiveTab('typography')}
               className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'typography' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
             >
                <Type className="w-5 h-5" />
                <span>Typography</span>
             </button>
             <button 
               onClick={() => setActiveTab('layout')}
               className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'layout' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
             >
                <Layout className="w-5 h-5" />
                <span>Layout & Grid</span>
             </button>
             <button 
               onClick={() => setActiveTab('media')}
               className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'media' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
             >
                <ImageIcon className="w-5 h-5" />
                <span>Logo & Assets</span>
             </button>
           </div>

           {/* Settings Panel */}
           <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50 min-h-[400px]">
              {activeTab === 'branding' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-800">Brand Colors</h3>
                  
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700">Primary Color</label>
                    <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 rounded-lg bg-indigo-600 border-2 border-white shadow-sm ring-2 ring-indigo-100 cursor-pointer"></div>
                       <input type="text" value="#4F46E5" readOnly className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono text-slate-600" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700">Secondary Color</label>
                    <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 rounded-lg bg-slate-900 border-2 border-white shadow-sm ring-2 ring-slate-100 cursor-pointer"></div>
                       <input type="text" value="#0F172A" readOnly className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono text-slate-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <label className="text-sm font-bold text-slate-700">Button Style</label>
                    <select className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                      <option>Rounded (Default)</option>
                      <option>Pill</option>
                      <option>Square</option>
                    </select>
                  </div>
                </div>
              )}

              {activeTab === 'typography' && (
                <div className="space-y-6">
                   <h3 className="text-lg font-bold text-slate-800">Typography</h3>
                   <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700">Heading Font</label>
                    <select className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                      <option>Inter (Default)</option>
                      <option>Roboto</option>
                      <option>Playfair Display</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700">Body Font</label>
                    <select className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                      <option>Inter (Default)</option>
                      <option>Open Sans</option>
                      <option>Lato</option>
                    </select>
                  </div>
                </div>
              )}
              
              {(activeTab === 'layout' || activeTab === 'media') && (
                <div className="text-center py-12">
                   <Layout className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                   <p className="text-sm font-medium text-slate-500">More settings available in pro version.</p>
                </div>
              )}
           </div>
        </motion.div>

        {/* Live Preview */}
        <motion.div variants={fadeInUp} className="flex-1 bg-white/40 backdrop-blur-3xl rounded-3xl border border-slate-200/60 p-4 shadow-xl flex flex-col h-[700px]">
           <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center space-x-2 text-slate-500 font-bold text-sm">
                 <Eye className="w-4 h-4" />
                 <span>Live Preview</span>
              </div>
              <div className="flex items-center space-x-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                 <button 
                   onClick={() => setPreviewMode('desktop')}
                   className={`p-1.5 rounded-md transition-colors ${previewMode === 'desktop' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                 >
                   <Monitor className="w-4 h-4" />
                 </button>
                 <button 
                   onClick={() => setPreviewMode('mobile')}
                   className={`p-1.5 rounded-md transition-colors ${previewMode === 'mobile' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                 >
                   <Smartphone className="w-4 h-4" />
                 </button>
              </div>
           </div>

           <div className="flex-1 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200/50">
              {/* Fake Browser Window */}
              <div className={`bg-white rounded-t-lg shadow-2xl transition-all duration-300 flex flex-col ${previewMode === 'desktop' ? 'w-full h-full' : 'w-[375px] h-[90%] rounded-b-lg border-8 border-slate-800'}`}>
                 {previewMode === 'desktop' && (
                   <div className="bg-slate-800 px-4 py-2 flex items-center space-x-2">
                     <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                     </div>
                     <div className="mx-auto bg-slate-700 text-slate-300 text-[10px] font-mono px-4 py-1 rounded-md">
                        careers.yourcompany.com
                     </div>
                   </div>
                 )}
                 
                 {/* Preview Content */}
                 <div className="flex-1 overflow-y-auto p-8 pointer-events-none">
                    <header className="flex justify-between items-center mb-12">
                       <div className="text-xl font-black text-indigo-600">Company Logo</div>
                       <div className="space-x-4 hidden sm:block">
                          <span className="text-sm font-bold text-slate-600">About Us</span>
                          <span className="text-sm font-bold text-slate-600">Benefits</span>
                       </div>
                    </header>
                    <main>
                       <h1 className="text-4xl font-black text-slate-900 mb-4">Join our mission.</h1>
                       <p className="text-slate-600 mb-8 max-w-lg">We are building the future of software. View our open roles below and apply today.</p>
                       
                       <div className="space-y-4">
                          <div className="p-4 border border-slate-200 rounded-xl hover:border-indigo-300 transition-colors cursor-pointer">
                             <h3 className="font-bold text-slate-800">Senior Frontend Engineer</h3>
                             <p className="text-sm text-slate-500 mt-1">Engineering • Remote</p>
                          </div>
                          <div className="p-4 border border-slate-200 rounded-xl hover:border-indigo-300 transition-colors cursor-pointer">
                             <h3 className="font-bold text-slate-800">Product Manager</h3>
                             <p className="text-sm text-slate-500 mt-1">Product • New York, NY</p>
                          </div>
                          <div className="p-4 border border-slate-200 rounded-xl hover:border-indigo-300 transition-colors cursor-pointer">
                             <h3 className="font-bold text-slate-800">Data Scientist</h3>
                             <p className="text-sm text-slate-500 mt-1">Data • London, UK</p>
                          </div>
                       </div>
                    </main>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
