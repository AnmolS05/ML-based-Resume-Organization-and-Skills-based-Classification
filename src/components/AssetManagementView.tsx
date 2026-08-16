import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Smartphone, Search, Filter, HardDrive, Keyboard, Shield, AlertTriangle, Plus, Tag } from 'lucide-react';

export const AssetManagementView: React.FC = () => {
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
      className="space-y-6 max-w-6xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Monitor className="w-6 h-6 mr-3 text-slate-700" /> IT Asset Management
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Track company devices, software licenses, and equipment assignments.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-900 hover:shadow-lg hover:shadow-slate-700/30 text-white px-5 py-2.5 rounded-xl font-bold transition-all">
            <Plus className="w-4 h-4" />
            <span>Add Asset</span>
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Laptop className="w-12 h-12 text-sky-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Total Assets</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">412</span>
          </div>
          <p className="text-xs font-medium text-emerald-500 mt-2 font-bold">+12 this month</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Tag className="w-12 h-12 text-indigo-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">Assigned</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">385</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3">
            <div className="bg-indigo-400 h-1.5 rounded-full" style={{ width: '93%' }}></div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <HardDrive className="w-12 h-12 text-amber-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-500 mb-1">In Inventory</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-slate-800">22</span>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-2 font-bold">Ready to deploy</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden bg-rose-50/30 border-rose-100">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <AlertTriangle className="w-12 h-12 text-rose-500" />
          </div>
          <h3 className="text-sm font-bold text-rose-700 mb-1">Maintenance / Repair</h3>
          <div className="flex items-end space-x-2">
            <span className="text-3xl font-black text-rose-800">5</span>
          </div>
          <p className="text-xs font-medium text-rose-600 mt-2 font-bold">Needs attention</p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Categories (Left) */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-slate-200/50">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Categories</h3>
             <ul className="space-y-2">
                <li>
                   <button className="w-full flex items-center justify-between text-sm p-2 rounded-lg bg-slate-100 font-bold text-slate-800">
                      <span className="flex items-center"><Laptop className="w-4 h-4 mr-2 text-sky-500" /> Laptops</span>
                      <span className="bg-white px-2 py-0.5 rounded-md text-[10px]">245</span>
                   </button>
                </li>
                <li>
                   <button className="w-full flex items-center justify-between text-sm p-2 rounded-lg hover:bg-slate-50 font-medium text-slate-600 transition-colors">
                      <span className="flex items-center"><Monitor className="w-4 h-4 mr-2 text-indigo-500" /> Monitors</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded-md text-[10px]">112</span>
                   </button>
                </li>
                <li>
                   <button className="w-full flex items-center justify-between text-sm p-2 rounded-lg hover:bg-slate-50 font-medium text-slate-600 transition-colors">
                      <span className="flex items-center"><Smartphone className="w-4 h-4 mr-2 text-emerald-500" /> Mobile Devices</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded-md text-[10px]">45</span>
                   </button>
                </li>
                <li>
                   <button className="w-full flex items-center justify-between text-sm p-2 rounded-lg hover:bg-slate-50 font-medium text-slate-600 transition-colors">
                      <span className="flex items-center"><Keyboard className="w-4 h-4 mr-2 text-slate-400" /> Peripherals</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded-md text-[10px]">10</span>
                   </button>
                </li>
             </ul>
          </div>
          
          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100">
             <div className="flex items-center mb-3">
               <Shield className="w-5 h-5 text-sky-600 mr-2" />
               <h3 className="font-bold text-sky-900 text-sm">MDM Status</h3>
             </div>
             <p className="text-xs text-sky-800/80 font-medium mb-3 leading-relaxed">
               100% of deployed MacBooks are currently enrolled in Jamf Pro and compliant with security policies.
             </p>
             <button className="text-xs font-bold text-sky-700 hover:text-sky-800 transition-colors">View Compliance Report →</button>
          </div>
        </motion.div>
        
        {/* Asset List (Right) */}
        <motion.div variants={fadeInUp} className="lg:col-span-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white/50">
             <h2 className="text-lg font-bold text-slate-800">Asset Directory</h2>
             <div className="flex items-center space-x-2">
               <div className="relative w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                   type="text"
                   placeholder="Search by serial, tag, or user..."
                   className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-slate-500 shadow-sm"
                 />
               </div>
               <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm">
                 <Filter className="w-4 h-4" />
               </button>
             </div>
          </div>

          <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-slate-50/50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                   <th className="p-4">Asset Tag / Serial</th>
                   <th className="p-4">Model</th>
                   <th className="p-4">Assigned To</th>
                   <th className="p-4">Status</th>
                   <th className="p-4 text-right">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 
                 <tr className="hover:bg-slate-50/50 transition-colors">
                   <td className="p-4">
                     <p className="font-bold text-slate-800 text-sm font-mono">AST-2034</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">C02ZL4D2MD6T</p>
                   </td>
                   <td className="p-4">
                     <p className="text-sm font-bold text-slate-700 flex items-center"><Laptop className="w-3 h-3 mr-1.5 text-slate-400" /> MacBook Pro 16"</p>
                     <p className="text-[10px] text-slate-500 font-medium mt-0.5">M2 Max, 32GB RAM, 1TB SSD</p>
                   </td>
                   <td className="p-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0">DC</div>
                       <p className="font-bold text-slate-700 text-sm">David Chen</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">Assigned</span>
                   </td>
                   <td className="p-4 text-right">
                     <button className="text-xs font-bold text-sky-600 hover:text-sky-700">Details</button>
                   </td>
                 </tr>

                 <tr className="hover:bg-slate-50/50 transition-colors">
                   <td className="p-4">
                     <p className="font-bold text-slate-800 text-sm font-mono">AST-2150</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">C02FJ9X3Q6L5</p>
                   </td>
                   <td className="p-4">
                     <p className="text-sm font-bold text-slate-700 flex items-center"><Laptop className="w-3 h-3 mr-1.5 text-slate-400" /> MacBook Air 13"</p>
                     <p className="text-[10px] text-slate-500 font-medium mt-0.5">M2, 16GB RAM, 512GB SSD</p>
                   </td>
                   <td className="p-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] shrink-0">-</div>
                       <p className="font-medium text-slate-500 text-sm italic">Unassigned</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-md">Inventory</span>
                   </td>
                   <td className="p-4 text-right">
                     <button className="text-xs font-bold text-sky-600 hover:text-sky-700">Assign</button>
                   </td>
                 </tr>

                 <tr className="hover:bg-slate-50/50 transition-colors">
                   <td className="p-4">
                     <p className="font-bold text-slate-800 text-sm font-mono">AST-1902</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">C02KL8D9MD4P</p>
                   </td>
                   <td className="p-4">
                     <p className="text-sm font-bold text-slate-700 flex items-center"><Laptop className="w-3 h-3 mr-1.5 text-slate-400" /> ThinkPad X1 Carbon</p>
                     <p className="text-[10px] text-slate-500 font-medium mt-0.5">Gen 10, i7, 16GB RAM</p>
                   </td>
                   <td className="p-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] shrink-0">-</div>
                       <p className="font-medium text-slate-500 text-sm italic">Service Center</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <span className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-1 rounded-md">Repair</span>
                   </td>
                   <td className="p-4 text-right">
                     <button className="text-xs font-bold text-sky-600 hover:text-sky-700">Update Status</button>
                   </td>
                 </tr>
                 
               </tbody>
             </table>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
