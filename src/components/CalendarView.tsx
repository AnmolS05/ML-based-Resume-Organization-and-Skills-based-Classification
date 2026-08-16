import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin, Video, Users, CheckCircle2, AlertCircle, Plus } from 'lucide-react';
import { initialCandidates } from '../data/mockData';

// Generate some mock interviews based on the candidates
const generateInterviews = () => {
  const types = ['Technical', 'Culture Fit', 'Hiring Manager', 'System Design'];
  const status = ['upcoming', 'completed', 'canceled'];
  
  return initialCandidates.slice(0, 5).map((candidate, i) => {
    const today = new Date();
    today.setHours(9 + i * 2, 0, 0, 0); // Stagger times
    if (i % 2 !== 0) today.setDate(today.getDate() + 1); // Push some to tomorrow
    
    return {
      id: `int-${i}`,
      candidateName: candidate.name,
      role: candidate.role_applied,
      type: types[i % types.length],
      date: today,
      duration: 60, // minutes
      interviewer: 'Sarah Connor',
      location: i % 2 === 0 ? 'Google Meet' : 'Zoom',
      status: status[i % 3] as 'upcoming' | 'completed' | 'canceled'
    };
  });
};

const mockInterviews = generateInterviews();

export const CalendarView: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState<'day' | 'week'>('day');

  // Helpers for date math
  const getDaysInWeek = (date: Date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + 1); // Start on Monday
    
    return Array.from({ length: 5 }).map((_, i) => { // Monday - Friday
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      return day;
    });
  };

  const getDayName = (date: Date) => date.toLocaleDateString('en-US', { weekday: 'short' });
  const getDayNumber = (date: Date) => date.getDate();
  const getMonthName = (date: Date) => date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const nextDay = () => {
    const next = new Date(currentDate);
    next.setDate(next.getDate() + (selectedView === 'day' ? 1 : 7));
    setCurrentDate(next);
  };

  const prevDay = () => {
    const prev = new Date(currentDate);
    prev.setDate(prev.getDate() - (selectedView === 'day' ? 1 : 7));
    setCurrentDate(prev);
  };

  const today = () => setCurrentDate(new Date());

  const isSameDay = (d1: Date, d2: Date) => 
    d1.getFullYear() === d2.getFullYear() && 
    d1.getMonth() === d2.getMonth() && 
    d1.getDate() === d2.getDate();

  const getInterviewsForDate = (date: Date) => 
    mockInterviews.filter(i => isSameDay(i.date, date)).sort((a, b) => a.date.getTime() - b.date.getTime());

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const timeSlots = Array.from({ length: 9 }).map((_, i) => `${i + 9}:00 AM`);

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200/50 gap-4">
        <div>
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight">
            Interviews
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Schedule and manage candidate interviews across your team.
          </p>
        </div>
        <div className="flex items-center space-x-3">
           <button className="px-4 py-2 bg-gradient-to-r from-[#1e50ff] to-blue-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all flex items-center space-x-2">
             <Plus className="w-4 h-4" />
             <span>Schedule Interview</span>
           </button>
        </div>
      </motion.div>

      {/* Calendar Controls */}
      <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/60 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-slate-200/50">
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-slate-100 rounded-lg p-1">
            <button 
              onClick={() => setSelectedView('day')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${selectedView === 'day' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Day
            </button>
            <button 
              onClick={() => setSelectedView('week')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${selectedView === 'week' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Week
            </button>
          </div>
          <button 
            onClick={today}
            className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-colors"
          >
            Today
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-black text-slate-800 w-48 text-center">{getMonthName(currentDate)}</h2>
          <div className="flex items-center space-x-1">
            <button onClick={prevDay} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextDay} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Calendar Grid */}
      <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden flex flex-col min-h-[600px]">
        {selectedView === 'day' ? (
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-slate-100 text-center bg-slate-50/50">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{getDayName(currentDate)}</span>
              <div className="text-3xl font-black text-[#1e50ff] mt-1">{getDayNumber(currentDate)}</div>
            </div>
            <div className="flex-1 p-6 relative">
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-100 rounded-full"></div>
              
              <div className="space-y-8 pl-8">
                {getInterviewsForDate(currentDate).length === 0 ? (
                  <div className="text-center py-12">
                    <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-600">No interviews scheduled</h3>
                    <p className="text-sm text-slate-500">Enjoy your free time!</p>
                  </div>
                ) : (
                  getInterviewsForDate(currentDate).map((interview) => (
                    <div key={interview.id} className="relative group">
                      {/* Timeline dot */}
                      <div className={`absolute -left-[37px] top-4 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10 ${
                        interview.status === 'completed' ? 'bg-emerald-500' :
                        interview.status === 'canceled' ? 'bg-rose-500' : 'bg-[#1e50ff]'
                      }`}></div>
                      
                      {/* Interview Card */}
                      <div className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-xs font-black px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 uppercase tracking-wider">
                                {interview.type}
                              </span>
                              <span className={`text-xs font-bold px-2 py-0.5 rounded-md flex items-center space-x-1 ${
                                interview.status === 'completed' ? 'bg-emerald-50 text-emerald-600' :
                                interview.status === 'canceled' ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-600'
                              }`}>
                                {interview.status === 'completed' && <CheckCircle2 className="w-3 h-3" />}
                                {interview.status === 'canceled' && <AlertCircle className="w-3 h-3" />}
                                {interview.status === 'upcoming' && <Clock className="w-3 h-3" />}
                                <span>{interview.status}</span>
                              </span>
                            </div>
                            <h3 className="text-lg font-black text-slate-800">{interview.candidateName}</h3>
                            <p className="text-sm font-medium text-slate-500">{interview.role}</p>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm font-black text-slate-800">
                              {interview.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5">{interview.duration} mins</div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-medium text-slate-600">
                          <div className="flex items-center space-x-1.5">
                            <Users className="w-4 h-4 text-slate-400" />
                            <span>{interview.interviewer}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            {interview.location.includes('Meet') || interview.location.includes('Zoom') ? 
                              <Video className="w-4 h-4 text-blue-400" /> : 
                              <MapPin className="w-4 h-4 text-rose-400" />
                            }
                            <span>{interview.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Week View */
          <div className="flex flex-1 overflow-x-auto">
            {getDaysInWeek(currentDate).map((date, idx) => {
              const isToday = isSameDay(date, new Date());
              const dayInterviews = getInterviewsForDate(date);
              
              return (
                <div key={idx} className="flex-1 min-w-[200px] border-r border-slate-100 last:border-r-0 flex flex-col">
                  <div className={`p-3 text-center border-b border-slate-100 ${isToday ? 'bg-blue-50/50' : 'bg-slate-50/50'}`}>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{getDayName(date)}</div>
                    <div className={`text-2xl font-black mt-1 ${isToday ? 'text-[#1e50ff]' : 'text-slate-700'}`}>
                      {getDayNumber(date)}
                    </div>
                  </div>
                  <div className="flex-1 p-2 space-y-2 bg-slate-50/20">
                    {dayInterviews.map(interview => (
                      <div 
                        key={interview.id} 
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] ${
                          interview.status === 'completed' ? 'bg-emerald-50 border-emerald-100 hover:border-emerald-300' :
                          interview.status === 'canceled' ? 'bg-rose-50 border-rose-100 hover:border-rose-300' : 
                          'bg-white border-blue-100 hover:border-blue-300 shadow-sm'
                        }`}
                      >
                        <div className="text-xs font-bold text-slate-500 mb-1">
                          {interview.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                        </div>
                        <div className="font-black text-slate-800 text-sm truncate">{interview.candidateName}</div>
                        <div className="text-[10px] font-bold text-blue-600 mt-1 uppercase tracking-wide truncate">{interview.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
