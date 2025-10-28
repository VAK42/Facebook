'use client'
import Link from "next/link";
import { useState } from "react";

export default function Messenger() {
  const [selectedChat, setSelectedChat] = useState(0);
  const chats = [{ id: 1, name: "Alice Johnson", avatar: "AJ", status: "Active Now", lastMessage: "Hey! How Are You Doing?", time: "10:30 AM", messages: [{ text: "Hey! How Are You Doing?", sender: "other", time: "10:30 AM" }, { text: "I'm Doing Great! Thanks For Asking.", sender: "me", time: "10:32 AM" }, { text: "That's Awesome! Want To Catch Up Later?", sender: "other", time: "10:33 AM" }] }, { id: 2, name: "Bob Smith", avatar: "BS", status: "Active 5M Ago", lastMessage: "See You Tomorrow!", time: "9:45 AM", messages: [{ text: "Good Morning!", sender: "other", time: "9:40 AM" }, { text: "Morning! Ready For The Meeting?", sender: "me", time: "9:42 AM" }, { text: "Yes, I'll Be There. See You Tomorrow!", sender: "other", time: "9:45 AM" }] }, { id: 3, name: "Carol Williams", avatar: "CW", status: "Active Now", lastMessage: "Thanks For The Help!", time: "Yesterday", messages: [{ text: "Can You Help Me With The Project?", sender: "other", time: "Yesterday 3:20 PM" }, { text: "Of Course! What Do You Need?", sender: "me", time: "Yesterday 3:25 PM" }, { text: "Just Some Feedback On The Design. Thanks For The Help!", sender: "other", time: "Yesterday 3:30 PM" }] }, { id: 4, name: "David Brown", avatar: "DB", status: "Active 1H Ago", lastMessage: "Sounds Good!", time: "2H Ago", messages: [{ text: "Want To Grab Lunch Today?", sender: "other", time: "2H Ago" }, { text: "Sure! What Time Works For You?", sender: "me", time: "2H Ago" }, { text: "How About 12:30? Sounds Good!", sender: "other", time: "2H Ago" }] }, { id: 5, name: "Eva Davis", avatar: "ED", status: "Active Now", lastMessage: "Perfect!", time: "3H Ago", messages: [{ text: "Did You See The New Movie?", sender: "other", time: "3H Ago" }, { text: "Not Yet, But I Heard It's Great!", sender: "me", time: "3H Ago" }, { text: "You Should Watch It. Perfect!", sender: "other", time: "3H Ago" }] }];
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="mx-auto flex-1 px-4 py-6">
        <div className="min-h-[90vh] rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
          <h1 className="mb-6 text-2xl font-bold text-white">Messenger</h1>
          <div className="grid h-96 grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="min-h-[80vh] rounded-lg bg-gray-700 p-4 lg:col-span-1">
              <h2 className="mb-4 text-lg font-semibold text-white">Chats</h2>
              <div className="space-y-3">
                {chats.map((chat) => (
                  <div key={chat.id - 1} onClick={() => setSelectedChat(chat.id - 1)} className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 transition-colors ${selectedChat === chat.id - 1 ? 'border border-blue-500 bg-blue-600' : 'hover:bg-gray-600'}`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-blue-500">{chat.avatar}</div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">{chat.name}</p>
                      <p className="truncate text-xs text-gray-300">{chat.lastMessage}</p>
                    </div>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-600 bg-gray-800 lg:col-span-2">
              <div className="flex items-center space-x-3 border-b border-gray-600 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-blue-500">{chats[selectedChat].avatar}</div>
                <div>
                  <h3 className="font-medium text-white">{chats[selectedChat].name}</h3>
                  <p className="text-sm text-gray-300">{chats[selectedChat].status}</p>
                </div>
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto p-4">
                {chats[selectedChat].messages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs rounded-lg px-4 py-2 ${message.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-600 text-white'}`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`mt-1 text-xs ${message.sender === 'me' ? 'opacity-75' : 'text-gray-300'}`}>{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-600 p-4">
                <div className="flex space-x-3">
                  <input type="text" placeholder="Type A Message..." className="flex-1 rounded-full bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="rounded-full bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}