import Link from "next/link";
import { Users, Store, Play, Star, Bookmark, Calendar } from "lucide-react";

export default function LeftSidebar() {
  return (
    <aside className="fixed left-0 top-14 w-64 h-full bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto hidden lg:block">
      <div className="space-y-2">
        <Link href="/profile" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 font-bold">K</div>
          <span className="font-medium text-white">VAK</span>
        </Link>
        <Link href="/friends" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <Users className="w-6 h-6 text-blue-600" />
          <span className="text-white">Friends</span>
        </Link>
        <Link href="/group" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <Users className="w-6 h-6 text-green-600" />
          <span className="text-white">Groups</span>
        </Link>
        <Link href="/marketplace" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <Store className="w-6 h-6 text-purple-600" />
          <span className="text-white">Marketplace</span>
        </Link>
        <Link href="/watch" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <Play className="w-6 h-6 text-red-600" />
          <span className="text-white">Watch</span>
        </Link>
        <Link href="/events" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <Calendar className="w-6 h-6 text-orange-600" />
          <span className="text-white">Events</span>
        </Link>
        <Link href="/memories" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <Star className="w-6 h-6 text-orange-600" />
          <span className="text-white">Memories</span>
        </Link>
        <Link href="/saved" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <Bookmark className="w-6 h-6 text-teal-600" />
          <span className="text-white">Saved</span>
        </Link>
        <hr className="my-4 border-gray-600" />
        <h3 className="text-gray-400 font-medium text-sm uppercase tracking-wide mb-2">Shortcuts</h3>
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="w-8 h-8 bg-red-200 rounded-lg"></div>
          <span className="text-sm text-white">Red Dead Redemption 2</span>
        </div>
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="w-8 h-8 bg-green-200 rounded-lg"></div>
          <span className="text-sm text-white">Grand Theft Auto V</span>
        </div>
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="w-8 h-8 bg-yellow-200 rounded-lg"></div>
          <span className="text-sm text-white">Ghost Of Tsushima</span>
        </div>
      </div>
    </aside>
  )
}