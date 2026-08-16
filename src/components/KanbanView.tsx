import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Mail, Calendar, User, FileText, CheckCircle2, Clock, XCircle, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Candidate } from '../types';
import { initialCandidates } from '../data/mockData';

// Initial column definitions
const columnsFromBackend = {
  applied: {
    name: 'Applied',
    items: initialCandidates.slice(0, 5),
    color: 'border-slate-200 bg-slate-50/50',
    headerColor: 'text-slate-700 bg-slate-100',
    icon: FileText
  },
  screening: {
    name: 'Screening',
    items: initialCandidates.slice(5, 8),
    color: 'border-blue-200 bg-blue-50/50',
    headerColor: 'text-blue-700 bg-blue-100',
    icon: Clock
  },
  interviewing: {
    name: 'Interviewing',
    items: initialCandidates.slice(8, 11),
    color: 'border-amber-200 bg-amber-50/50',
    headerColor: 'text-amber-700 bg-amber-100',
    icon: Calendar
  },
  offered: {
    name: 'Offered',
    items: initialCandidates.slice(11, 12),
    color: 'border-emerald-200 bg-emerald-50/50',
    headerColor: 'text-emerald-700 bg-emerald-100',
    icon: CheckCircle2
  },
  rejected: {
    name: 'Rejected',
    items: initialCandidates.slice(12, 14),
    color: 'border-rose-200 bg-rose-50/50',
    headerColor: 'text-rose-700 bg-rose-100',
    icon: XCircle
  }
};

export const KanbanView: React.FC = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId as keyof typeof columns];
      const destColumn = columns[destination.droppableId as keyof typeof columns];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
        [destination.droppableId]: { ...destColumn, items: destItems }
      });
    } else {
      const column = columns[source.droppableId as keyof typeof columns];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: { ...column, items: copiedItems }
      });
    }
  };

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
      className="space-y-6 h-full flex flex-col max-w-[1600px] mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200/50 gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#1e50ff] tracking-tight">
            Hiring Board
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Drag and drop candidates across stages to manage their hiring lifecycle.
          </p>
        </div>
        <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-xl p-1.5 rounded-2xl shadow-sm border border-slate-200/50">
           <div className="flex items-center space-x-2 px-3 py-1.5 text-sm font-bold text-slate-600 bg-white rounded-xl shadow-sm">
             <User className="w-4 h-4 text-blue-500" />
             <span>{Object.values(columns).reduce((acc, col) => acc + col.items.length, 0)} Total Candidates</span>
           </div>
        </div>
      </motion.div>

      {/* Kanban Board Area */}
      <motion.div variants={fadeInUp} className="flex-1 overflow-x-auto overflow-y-hidden pt-2 pb-4 w-full">
        <div className="flex items-start space-x-6 h-full min-w-max px-2">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.entries(columns).map(([columnId, column], index) => {
              const Icon = column.icon;
              return (
                <div key={columnId} className="flex flex-col h-full w-[320px]">
                  {/* Column Header */}
                  <div className={`flex items-center justify-between p-3 rounded-t-2xl border-t border-x ${column.color} ${column.headerColor}`}>
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <h2 className="font-bold text-sm tracking-wide">{column.name}</h2>
                    </div>
                    <span className="text-xs font-black bg-white/50 px-2 py-0.5 rounded-full shadow-sm">
                      {column.items.length}
                    </span>
                  </div>
                  
                  {/* Droppable Area */}
                  <div className={`flex-1 p-3 border-x border-b rounded-b-2xl transition-colors duration-200 ${column.color}`}>
                    <Droppable droppableId={columnId}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={`min-h-[200px] h-full space-y-3 rounded-xl transition-colors ${
                            snapshot.isDraggingOver ? 'bg-white/40 ring-2 ring-blue-400/30 ring-inset' : ''
                          }`}
                        >
                          {column.items.map((item, index) => (
                            <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`p-4 bg-white rounded-xl border transition-all duration-200 group ${
                                    snapshot.isDragging 
                                      ? 'shadow-2xl shadow-blue-900/20 border-blue-400 scale-105 rotate-1 z-50' 
                                      : 'shadow-sm border-slate-200/80 hover:shadow-md hover:border-blue-200'
                                  }`}
                                  style={{ ...provided.draggableProps.style }}
                                >
                                  <div className="flex justify-between items-start mb-3">
                                    <div>
                                      <h3 className="font-black text-slate-800 text-sm group-hover:text-[#1e50ff] transition-colors">{item.name}</h3>
                                      <p className="text-[11px] font-bold text-slate-500 mt-0.5">{item.role_applied}</p>
                                    </div>
                                    <button className="text-slate-400 hover:text-slate-700 transition-colors">
                                      <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                  </div>
                                  
                                  <div className="flex items-center space-x-2 mb-3">
                                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                                    <span className="text-xs text-slate-500 truncate">{item.email}</span>
                                  </div>

                                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                                    <div className="flex items-center space-x-1">
                                      <span className="text-[10px] font-bold text-slate-400">Match:</span>
                                      <span className={`text-xs font-black ${
                                        item.ai_score >= 80 ? 'text-emerald-600' :
                                        item.ai_score >= 60 ? 'text-amber-500' : 'text-rose-500'
                                      }`}>
                                        {item.ai_score}%
                                      </span>
                                    </div>
                                    <button className="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-0.5 group/btn">
                                      <span>View Profile</span>
                                      <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                    </button>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </motion.div>
    </motion.div>
  );
};
