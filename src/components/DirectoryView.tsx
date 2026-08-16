import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Filter, Mail, Phone, MapPin, Briefcase, Plus, MessageSquare } from 'lucide-react';

export const DirectoryView: React.FC = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const directoryData = [
    { name: "David Chen", role: "Senior Engineer", dept: "Engineering", location: "San Francisco, CA", email: "d.chen@company.com", phone: "+1 (555) 012-3456", initials: "DC", color: "bg-blue-100 text-blue-700" },
    { name: "Sarah Miller", role: "Marketing Lead", dept: "Marketing", location: "New York, NY", email: "s.miller@company.com", phone: "+1 (555) 013-4567", initials: "SM", color: "bg-purple-100 text-purple-700" },
    { name: "James Wilson", role: "Sales Executive", dept: "Sales", location: "Austin, TX", email: "j.wilson@company.com", phone: "+1 (555) 014-5678", initials: "JW", color: "bg-amber-100 text-amber-700" },
    { name: "Emily Davis", role: "Product Manager", dept: "Product", location: "Remote - WA", email: "e.davis@company.com", phone: "+1 (555) 015-6789", initials: "ED", color: "bg-emerald-100 text-emerald-700" },
    { name: "Michael Chang", role: "UX Designer", dept: "Design", location: "San Francisco, CA", email: "m.chang@company.com", phone: "+1 (555) 016-7890", initials: "MC", color: "bg-pink-100 text-pink-700" },
    { name: "Jessica Taylor", role: "HR Generalist", dept: "Human Resources", location: "Chicago, IL", email: "j.taylor@company.com", phone: "+1 (555) 017-8901", initials: "JT", color: "bg-rose-100 text-rose-700" },
    { name: "Robert Martinez", role: "Data Scientist", dept: "Engineering", location: "Remote - CO", email: "r.martinez@company.com", phone: "+1 (555) 018-9012", initials: "RM", color: "bg-sky-100 text-sky-700" },
    { name: "Amanda Lewis", role: "Financial Analyst", dept: "Finance", location: "New York, NY", email: "a.lewis@company.com", phone: "+1 (555) 019-0123", initials: "AL", color: "bg-teal-100 text-teal-700" }
  ];

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-6xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Users className="w-6 h-6 mr-3 text-blue-500" /> Team Directory
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Find colleagues, view contact information, and explore the company network.</p>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, role, or dept..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 shadow-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 shadow-sm">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Directory Grid */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
         {directoryData.map((employee, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden hover:shadow-md transition-shadow group">
               <div className="p-6 flex flex-col items-center text-center border-b border-slate-100">
                  <div className={`w-20 h-20 rounded-full ${employee.color} flex items-center justify-center text-2xl font-black mb-4 group-hover:scale-105 transition-transform shadow-inner`}>
                     {employee.initials}
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{employee.name}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-1">{employee.role}</p>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{employee.dept}</span>
               </div>
               
               <div className="p-4 space-y-3 bg-slate-50/50">
                  <div className="flex items-center text-xs font-medium text-slate-600">
                     <MapPin className="w-3.5 h-3.5 mr-2 text-slate-400" /> {employee.location}
                  </div>
                  <div className="flex items-center text-xs font-medium text-slate-600">
                     <Mail className="w-3.5 h-3.5 mr-2 text-slate-400" /> {employee.email}
                  </div>
                  <div className="flex items-center text-xs font-medium text-slate-600">
                     <Phone className="w-3.5 h-3.5 mr-2 text-slate-400" /> {employee.phone}
                  </div>
               </div>

               <div className="p-4 flex gap-2 border-t border-slate-100">
                  <button className="flex-1 bg-white border border-slate-200 text-slate-600 font-bold py-2 rounded-xl text-xs flex justify-center items-center hover:bg-slate-50 transition-colors shadow-sm">
                     <MessageSquare className="w-3.5 h-3.5 mr-1.5" /> Message
                  </button>
                  <button className="flex-1 bg-blue-50 border border-blue-100 text-blue-700 font-bold py-2 rounded-xl text-xs flex justify-center items-center hover:bg-blue-100 transition-colors shadow-sm">
                     View Profile
                  </button>
               </div>
            </div>
         ))}
      </motion.div>
      
    </motion.div>
  );
};
