import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Search, Calendar, MapPin, Coffee, Car, Monitor, Search as SearchIcon, Users, Clock, CheckCircle } from 'lucide-react';

export const FacilitiesView: React.FC = () => {
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Building2 className="w-6 h-6 mr-3 text-teal-500" /> Workspace & Facilities
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Book desks, reserve meeting rooms, and access building services.</p>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
           <div className="bg-slate-100 p-1 rounded-xl flex items-center">
              <span className="px-3 py-1.5 text-xs font-bold text-slate-600 flex items-center">
                 <MapPin className="w-3.5 h-3.5 mr-1" /> SF - HQ
              </span>
           </div>
        </div>
      </motion.div>

      {/* Booking Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div variants={fadeInUp} className="bg-gradient-to-br from-teal-500 to-emerald-500 p-6 rounded-2xl shadow-lg relative overflow-hidden text-white cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-xl group-hover:scale-150 transition-transform"></div>
          <Monitor className="w-8 h-8 mb-4 opacity-80" />
          <h3 className="font-black text-lg mb-1">Book a Desk</h3>
          <p className="text-xs font-medium text-teal-50 opacity-90">Hot-desking for hybrid workers.</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-2xl shadow-lg relative overflow-hidden text-white cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-xl group-hover:scale-150 transition-transform"></div>
          <Users className="w-8 h-8 mb-4 opacity-80" />
          <h3 className="font-black text-lg mb-1">Meeting Rooms</h3>
          <p className="text-xs font-medium text-blue-50 opacity-90">Reserve spaces for team collaboration.</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl shadow-lg relative overflow-hidden text-white cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-xl group-hover:scale-150 transition-transform"></div>
          <Car className="w-8 h-8 mb-4 opacity-80" />
          <h3 className="font-black text-lg mb-1">Visitor Parking</h3>
          <p className="text-xs font-medium text-purple-50 opacity-90">Request parking passes for guests.</p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Availability (Left/Center) */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
           
           {/* My Bookings */}
           <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 p-5">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Upcoming Bookings</h2>
              
              <div className="space-y-3">
                 <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="flex items-start space-x-3">
                       <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                          <Users className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">Boardroom A - 4th Floor</p>
                          <p className="text-xs font-medium text-slate-500 flex items-center mt-1">
                             <Calendar className="w-3.5 h-3.5 mr-1" /> Today, 2:00 PM - 3:30 PM
                          </p>
                       </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 text-[10px] font-bold rounded-md flex items-center">
                       <CheckCircle className="w-3 h-3 mr-1" /> Confirmed
                    </span>
                 </div>

                 <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="flex items-start space-x-3">
                       <div className="p-2 bg-teal-100 text-teal-600 rounded-lg shrink-0">
                          <Monitor className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">Desk 412 - Marketing Wing</p>
                          <p className="text-xs font-medium text-slate-500 flex items-center mt-1">
                             <Calendar className="w-3.5 h-3.5 mr-1" /> Tomorrow, 9:00 AM - 5:00 PM
                          </p>
                       </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 text-[10px] font-bold rounded-md flex items-center">
                       <CheckCircle className="w-3 h-3 mr-1" /> Confirmed
                    </span>
                 </div>
              </div>
           </div>
           
           {/* Quick Room Search */}
           <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 flex flex-col overflow-hidden">
              <div className="p-5 border-b border-slate-100">
                 <h2 className="text-lg font-bold text-slate-800">Find a Room Right Now</h2>
                 <p className="text-xs text-slate-500 font-medium mt-1">Showing rooms available for the next hour.</p>
              </div>
              <div className="divide-y divide-slate-100">
                 
                 <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-3">
                       <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                             <span className="font-black text-indigo-700">3B</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
                       </div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">Huddle Room 3B</p>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1 flex items-center">
                             <Users className="w-3 h-3 mr-1" /> Cap: 4 • <Monitor className="w-3 h-3 mx-1" /> TV
                          </p>
                       </div>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors">
                       Book Now
                    </button>
                 </div>

                 <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-3">
                       <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                             <span className="font-black text-indigo-700">4F</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
                       </div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">Conference Room 4F</p>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1 flex items-center">
                             <Users className="w-3 h-3 mr-1" /> Cap: 12 • <Monitor className="w-3 h-3 mx-1" /> VC
                          </p>
                       </div>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors">
                       Book Now
                    </button>
                 </div>

                 <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors opacity-50">
                    <div className="flex items-center space-x-3">
                       <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                             <span className="font-black text-slate-500">2A</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-rose-500 border-2 border-white rounded-full"></div>
                       </div>
                       <div>
                          <p className="font-bold text-slate-500 text-sm">Interview Room 2A</p>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1 flex items-center">
                             <Clock className="w-3 h-3 mr-1" /> In Use until 3:00 PM
                          </p>
                       </div>
                    </div>
                    <button className="px-4 py-2 bg-slate-200 text-slate-400 text-xs font-bold rounded-lg cursor-not-allowed">
                       Unavailable
                    </button>
                 </div>
                 
              </div>
           </div>
        </motion.div>
        
        {/* Office Information (Right) */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/50">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
                <Coffee className="w-4 h-4 mr-2 text-amber-600" /> Building Amenities
             </h3>
             <ul className="space-y-3">
                <li className="flex items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 mr-2 shrink-0"></div>
                   <div>
                      <p className="text-xs text-slate-800 font-bold">Cafeteria Hours</p>
                      <p className="text-[10px] text-slate-500 font-medium">Breakfast: 7:30 AM - 10:00 AM<br/>Lunch: 11:30 AM - 2:00 PM</p>
                   </div>
                </li>
                <li className="flex items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 mr-2 shrink-0"></div>
                   <div>
                      <p className="text-xs text-slate-800 font-bold">Fitness Center</p>
                      <p className="text-[10px] text-slate-500 font-medium">Open 24/7 (Basement Level 2). Access requires badge.</p>
                   </div>
                </li>
                <li className="flex items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 mr-2 shrink-0"></div>
                   <div>
                      <p className="text-xs text-slate-800 font-bold">Mothers' Rooms</p>
                      <p className="text-[10px] text-slate-500 font-medium">Rooms 314 & 412. No booking required.</p>
                   </div>
                </li>
             </ul>
          </div>
          
          <div className="bg-slate-800 p-5 rounded-2xl shadow-lg relative overflow-hidden text-white">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <h3 className="font-bold text-sm tracking-wider uppercase text-slate-400 mb-4 flex items-center">
                <Building2 className="w-4 h-4 mr-2" /> Facilities Support
             </h3>
             <p className="text-xs font-medium text-slate-300 mb-4 leading-relaxed">
               Spilled coffee? AC too cold? Report facilities issues here.
             </p>
             <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition-colors backdrop-blur-md flex justify-center items-center">
               Submit Facilities Ticket
             </button>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};
