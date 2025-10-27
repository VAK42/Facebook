'use client'
import { useState } from "react";
import { ExternalLink, X, Send } from "lucide-react";

export default function RightSidebar() {
  const [activeChatbox, setActiveChatbox] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<{ [key: string]: string }>({});
  const handleContactClick = (contactName: string) => { setActiveChatbox(contactName) };
  const handleSendMessage = (contactName: string) => {
    const message = chatMessages[contactName] || '';
    if (message.trim()) {
      setChatMessages(prev => ({ ...prev, [contactName]: '' }));
    }
  };
  const contacts = [
    { name: 'Alice Johnson', status: 'online' },
    { name: 'Bob Smith', status: 'online' },
    { name: 'Carol Williams', status: 'away' },
    { name: 'David Brown', status: 'online' },
    { name: 'Eva Davis', status: 'away' },
    { name: 'Frank Miller', status: 'online' },
    { name: 'Grace Wilson', status: 'online' },
    { name: 'Henry Taylor', status: 'away' },
  ];
  return (
    <>
      <aside className="fixed top-14 right-0 w-80 h-[92.5vh] bg-gray-900 border-l border-gray-700 p-4 overflow-y-auto hidden xl:block">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Sponsored</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="w-full h-32 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-sm text-gray-400">Image</span>
                </div>
                <h4 className="text-sm font-medium mb-1 text-white">Grand Theft Auto VI</h4>
                <p className="text-xs text-gray-400 mb-2 flex items-center">www.rockstargames.com
                  <ExternalLink className="w-3 h-3 ml-1" />
                </p>
                <p className="text-xs text-gray-500">Release In 2026</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="w-full h-32 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-sm text-gray-400">Image</span>
                </div>
                <h4 className="text-sm font-medium mb-1 text-white">Ghost Of Yotei</h4>
                <p className="text-xs text-gray-400 mb-2 flex items-center">www.suckerpunch.com
                  <ExternalLink className="w-3 h-3 ml-1" />
                </p>
                <p className="text-xs text-gray-500">Exclusive On PS5</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Contacts</h3>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer" onClick={() => handleContactClick(contact.name)}>
                  <div className="relative">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold text-sm">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-gray-900 ${contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>
                  <span className="text-sm font-medium text-white">{contact.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Group Conversations</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">G1</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Family Group</p>
                  <p className="text-xs text-gray-400">Alice: Hey Everyone!</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">G2</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Work Group</p>
                  <p className="text-xs text-gray-400">Bob: Meeting At 3 PM!</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">G3</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Study Group</p>
                  <p className="text-xs text-gray-400">Carol: Exam Tomorrow!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {activeChatbox && (
        <div className="fixed bottom-4 right-4 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {activeChatbox.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-sm font-medium text-white">{activeChatbox}</span>
            </div>
            <button onClick={() => setActiveChatbox(null)} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-3 space-y-2 max-h-60 overflow-y-auto">
            <div className="text-xs text-gray-400 text-center">Start A Conversation</div>
          </div>
          <div className="p-3 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type A Message..."
                value={chatMessages[activeChatbox] || ''}
                onChange={(e) => setChatMessages(prev => ({ ...prev, [activeChatbox]: e.target.value }))}
                className="flex-1 bg-gray-700 text-white rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(activeChatbox)}
              />
              <button onClick={() => handleSendMessage(activeChatbox)} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}