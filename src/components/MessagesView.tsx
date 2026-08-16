import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send, Paperclip, Smile, MoreVertical, Phone, Video, Info, User } from 'lucide-react';

const mockContacts = [
  { id: 1, name: 'Sarah Connor', role: 'Hiring Manager', avatar: 'SC', online: true, lastSeen: 'Just now', unread: 2 },
  { id: 2, name: 'John Smith', role: 'Technical Lead', avatar: 'JS', online: false, lastSeen: '2h ago', unread: 0 },
  { id: 3, name: 'Emily Chen', role: 'HR Coordinator', avatar: 'EC', online: true, lastSeen: 'Just now', unread: 0 },
  { id: 4, name: 'Michael Brown', role: 'VP of Engineering', avatar: 'MB', online: false, lastSeen: '1d ago', unread: 0 },
];

const mockMessages = [
  { id: 1, senderId: 1, text: 'Hey, did you check out Alex\'s resume?', time: '10:30 AM', isMine: false },
  { id: 2, senderId: 0, text: 'Yes! The AI scored him at 95% match for the Frontend role.', time: '10:32 AM', isMine: true },
  { id: 3, senderId: 1, text: 'That\'s great. Let\'s move him to the interviewing stage.', time: '10:33 AM', isMine: false },
  { id: 4, senderId: 1, text: 'Can you schedule a technical screen with John for next Tuesday?', time: '10:34 AM', isMine: false },
  { id: 5, senderId: 0, text: 'On it. I will send the calendar invites shortly.', time: '10:35 AM', isMine: true },
];

export const MessagesView: React.FC = () => {
  const [activeContact, setActiveContact] = useState(mockContacts[0]);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      senderId: 0,
      text: messageText,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      isMine: true
    };
    
    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto h-[calc(100vh-8rem)] min-h-[600px] flex gap-6 pb-6 relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Sidebar - Contacts */}
      <motion.div variants={fadeInUp} className="w-80 flex-shrink-0 flex flex-col bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h2 className="text-xl font-black text-slate-800 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search team..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {mockContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setActiveContact(contact)}
              className={`w-full flex items-center p-4 border-b border-slate-50 transition-colors hover:bg-slate-50 ${activeContact.id === contact.id ? 'bg-blue-50/50' : ''}`}
            >
              <div className="relative mr-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white ${
                  contact.id === 1 ? 'bg-gradient-to-tr from-rose-500 to-pink-400' :
                  contact.id === 2 ? 'bg-gradient-to-tr from-blue-500 to-cyan-400' :
                  contact.id === 3 ? 'bg-gradient-to-tr from-emerald-500 to-teal-400' :
                  'bg-gradient-to-tr from-purple-500 to-indigo-400'
                }`}>
                  {contact.avatar}
                </div>
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-slate-800 text-sm truncate">{contact.name}</span>
                  <span className="text-[10px] font-medium text-slate-400">{contact.lastSeen}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 truncate">{contact.role}</span>
                  {contact.unread > 0 && (
                    <span className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Chat Area */}
      <motion.div variants={fadeInUp} className="flex-1 flex flex-col bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white/50">
          <div className="flex items-center">
             <div className="relative mr-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white bg-gradient-to-tr from-rose-500 to-pink-400 shadow-inner`}>
                  {activeContact.avatar}
                </div>
                {activeContact.online && (
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div>
                <h2 className="text-lg font-black text-slate-800">{activeContact.name}</h2>
                <p className="text-xs font-medium text-slate-500">{activeContact.online ? 'Active now' : `Last seen ${activeContact.lastSeen}`}</p>
              </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
              <Video className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-slate-200 mx-1"></div>
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[70%] ${message.isMine ? 'flex-row-reverse' : 'flex-row'}`}>
                {!message.isMine && (
                   <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs text-white bg-gradient-to-tr from-rose-500 to-pink-400 mr-3 mt-auto">
                    {activeContact.avatar}
                  </div>
                )}
                
                <div className={`flex flex-col ${message.isMine ? 'items-end' : 'items-start'}`}>
                  <div className={`px-4 py-2.5 rounded-2xl shadow-sm ${
                    message.isMine 
                      ? 'bg-gradient-to-br from-[#1e50ff] to-blue-500 text-white rounded-br-none' 
                      : 'bg-white border border-slate-100 text-slate-800 rounded-bl-none'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 mt-1 mx-1">
                    {message.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-slate-100 bg-white">
          <div className="flex items-end space-x-2">
            <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors mb-0.5">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type a message..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none max-h-32 min-h-[44px]"
                rows={1}
              />
              <button className="absolute right-3 bottom-3 text-slate-400 hover:text-slate-600 transition-colors">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <button 
              onClick={handleSendMessage}
              disabled={!messageText.trim()}
              className="p-3 bg-gradient-to-r from-[#1e50ff] to-blue-500 text-white rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all mb-0.5"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
