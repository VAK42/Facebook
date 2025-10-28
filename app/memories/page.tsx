import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import { Calendar, Heart, Share, MessageCircle } from "lucide-react";

export default function Memories() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="flex-1 mx-auto px-4 py-6 ml-64 mr-80">
        <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Memories</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors">Create Memory</button>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">On This Day</button>
              <button className="bg-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors">Highlights</button>
              <button className="bg-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors">Recent</button>
            </div>
          </div>
          <div className="space-y-6">{[{ year: "1 Year Ago", content: "Posted A Photo With Friends At The Beach", image: "🏖️", reactions: 12, comments: 5 }, { year: "2 Years Ago", content: "Celebrated Birthday With Family", image: "🎂", reactions: 25, comments: 8 }, { year: "3 Years Ago", content: "Graduation Day Memories", image: "🎓", reactions: 45, comments: 12 }].map((memory, index) => (<div key={index} className="bg-gray-700 border border-gray-600 rounded-lg overflow-hidden"><div className="p-4 border-b border-gray-600"><div className="flex items-center space-x-2 mb-2"><Calendar className="w-5 h-5 text-blue-400" /><span className="text-sm font-medium text-blue-400">{memory.year}</span></div><p className="text-gray-300">{memory.content}</p></div><div className="aspect-video bg-gray-600 flex items-center justify-center text-8xl">{memory.image}</div><div className="p-4"><div className="flex items-center justify-between text-sm text-gray-400 mb-4"><span>👍 {memory.reactions}</span><span>{memory.comments} Comments</span></div><div className="flex border-t border-gray-600 pt-2"><button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-600 transition-colors text-gray-300"><Heart className="w-5 h-5" /><span>Like</span></button><button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-600 transition-colors text-gray-300"><MessageCircle className="w-5 h-5" /><span>Comment</span></button><button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-600 transition-colors text-gray-300"><Share className="w-5 h-5" /><span>Share</span></button></div></div></div>))}</div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}