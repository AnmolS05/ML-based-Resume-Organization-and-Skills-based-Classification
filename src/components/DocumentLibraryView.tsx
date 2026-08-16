import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, FileText, Search, Folder, ChevronRight, Download, Filter, File, Star, Clock, MoreVertical, Plus } from 'lucide-react';

const mockDocuments = [
  { id: 1, title: 'Employee Handbook 2026', type: 'PDF', category: 'Policies', size: '2.4 MB', updated: '2 days ago', isStarred: true },
  { id: 2, title: 'Health Insurance Options', type: 'PDF', category: 'Benefits', size: '1.1 MB', updated: '1 week ago', isStarred: true },
  { id: 3, title: 'Remote Work Guidelines', type: 'DOCX', category: 'Policies', size: '450 KB', updated: '2 weeks ago', isStarred: false },
  { id: 4, title: 'Q3 Townhall Presentation', type: 'PPTX', category: 'Company', size: '15.2 MB', updated: '1 month ago', isStarred: false },
  { id: 5, title: 'Travel Expense Policy', type: 'PDF', category: 'Finance', size: '800 KB', updated: '2 months ago', isStarred: false },
  { id: 6, title: 'Engineering Onboarding', type: 'PDF', category: 'Onboarding', size: '3.1 MB', updated: '3 months ago', isStarred: false },
  { id: 7, title: 'Code of Conduct', type: 'PDF', category: 'Policies', size: '1.5 MB', updated: '6 months ago', isStarred: true },
];

const categories = ['All', 'Policies', 'Benefits', 'Company', 'Finance', 'Onboarding'];

export const DocumentLibraryView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredDocs = mockDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-6xl mx-auto pb-12 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-slate-200/50">
        <div>
          <h1 className="text-2xl font-black text-slate-800 flex items-center">
            <Book className="w-6 h-6 mr-3 text-indigo-500" /> Document Library
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Company wiki, policies, benefits, and shared resources.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-bold transition-all shadow-sm">
            <Folder className="w-4 h-4" />
            <span>New Folder</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:shadow-lg hover:shadow-indigo-500/30 text-white px-4 py-2 rounded-xl font-bold transition-all">
            <Plus className="w-4 h-4" />
            <span>Upload File</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Sidebar Navigation */}
        <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-4">
          <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-slate-200/50">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Browse By Category</h3>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold transition-colors ${activeCategory === cat ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'}`}
                  >
                    <span className="flex items-center">
                      <Folder className={`w-4 h-4 mr-2 ${activeCategory === cat ? 'text-indigo-500' : 'text-slate-400'}`} />
                      {cat}
                    </span>
                    {cat !== 'All' && <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full">{mockDocuments.filter(d => d.category === cat).length}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-5 rounded-2xl border border-violet-100">
             <Star className="w-6 h-6 text-violet-500 mb-2" />
             <h3 className="font-bold text-violet-900 text-sm mb-1">Starred Resources</h3>
             <ul className="mt-3 space-y-2">
               {mockDocuments.filter(d => d.isStarred).map(doc => (
                 <li key={doc.id} className="text-xs font-medium text-violet-700 flex items-start cursor-pointer hover:text-violet-900 transition-colors">
                   <ChevronRight className="w-3 h-3 mr-1 mt-0.5 shrink-0" /> <span className="truncate">{doc.title}</span>
                 </li>
               ))}
             </ul>
          </div>
        </motion.div>

        {/* Document List Area */}
        <motion.div variants={fadeInUp} className="lg:col-span-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden flex flex-col">
          
          {/* Toolbar */}
          <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/50">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Document Table */}
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="p-4 pl-6 font-bold w-10"></th>
                  <th className="p-4 font-bold">Name</th>
                  <th className="p-4 font-bold hidden md:table-cell">Category</th>
                  <th className="p-4 font-bold hidden sm:table-cell">Size</th>
                  <th className="p-4 font-bold hidden lg:table-cell">Last Updated</th>
                  <th className="p-4 font-bold text-right pr-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filteredDocs.map((doc) => (
                    <motion.tr 
                      key={doc.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-b border-slate-50 hover:bg-indigo-50/30 transition-colors group"
                    >
                      <td className="p-4 pl-6">
                        <button className="text-slate-300 hover:text-amber-400 transition-colors">
                          <Star className={`w-4 h-4 ${doc.isStarred ? 'text-amber-400 fill-amber-400' : ''}`} />
                        </button>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                            doc.type === 'PDF' ? 'bg-rose-100 text-rose-600' : 
                            doc.type === 'DOCX' ? 'bg-blue-100 text-blue-600' : 
                            'bg-orange-100 text-orange-600'
                          }`}>
                            <File className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 cursor-pointer">{doc.title}</p>
                            <p className="text-[10px] font-bold text-slate-400">{doc.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{doc.category}</span>
                      </td>
                      <td className="p-4 hidden sm:table-cell text-xs font-medium text-slate-500">
                        {doc.size}
                      </td>
                      <td className="p-4 hidden lg:table-cell text-xs font-medium text-slate-500">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1 text-slate-400" />
                          {doc.updated}
                        </div>
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <div className="flex items-center justify-end space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Download">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors" title="More options">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
            
            {filteredDocs.length === 0 && (
              <div className="text-center py-16">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">No documents found matching your criteria.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
