import Link from "next/link";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import { Play, Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react";

export default function Watch() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto ml-64 mr-80 flex-1 px-4 py-6">
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Watch</h1>
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">Your Videos</button>
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">Live</button>
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">Following</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[{ id: 1, title: "Amazing Nature Documentary", channel: "Nature Channel", views: "2.1M Views", time: "3 Days Ago", duration: "12:34", thumbnail: "🌿" }, { id: 2, title: "Cooking Masterclass: Italian Pasta", channel: "Chef Mario", views: "856K Views", time: "1 Week Ago", duration: "18:45", thumbnail: "🍝" }, { id: 3, title: "Tech Review: Latest Smartphone", channel: "Tech Reviews", views: "1.2M Views", time: "5 Days Ago", duration: "15:22", thumbnail: "📱" }, { id: 4, title: "Travel Vlog: Japan Adventure", channel: "Wanderlust", views: "678K Views", time: "2 Weeks Ago", duration: "22:10", thumbnail: "🏯" }, { id: 5, title: "Fitness Workout Routine", channel: "Fitlife", views: "3.4M Views", time: "1 Day Ago", duration: "25:30", thumbnail: "💪" }, { id: 6, title: "Music Performance Live", channel: "Indie Artists", views: "945K Views", time: "4 Days Ago", duration: "8:55", thumbnail: "🎵" }].map(video => (
              <Link key={video.id} href={`/watch/${video.id}`}>
                <div className="cursor-pointer overflow-hidden rounded-lg border border-gray-600 bg-gray-700 transition-all hover:opacity-90 hover:shadow-md">
                  <div className="relative">
                    <div className="flex aspect-video items-center justify-center text-6xl bg-gray-600">{video.thumbnail}</div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity hover:bg-opacity-20">
                      <Play className="h-12 w-12 text-white opacity-0 transition-opacity hover:opacity-100" />
                    </div>
                    <div className="absolute bottom-2 right-2 rounded bg-black bg-opacity-75 px-2 py-1 text-xs text-white">{video.duration}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 line-clamp-2 text-sm font-semibold text-white">{video.title}</h3>
                    <p className="mb-1 text-sm text-gray-300">{video.channel}</p>
                    <p className="text-xs text-gray-400">{video.views} • {video.time}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-1 text-gray-300 hover:text-red-400"><Heart className="h-4 w-4" /><span className="text-sm">Like</span></button>
                        <button className="flex items-center space-x-1 text-gray-300 hover:text-blue-400"><MessageCircle className="h-4 w-4" /><span className="text-sm">Comment</span></button>
                        <button className="flex items-center space-x-1 text-gray-300 hover:text-green-400"><Share className="h-4 w-4" /><span className="text-sm">Share</span></button>
                      </div>
                      <button className="text-gray-300 hover:text-white"><MoreHorizontal className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="rounded-lg bg-gray-600 px-6 py-3 text-gray-300 transition-colors hover:bg-gray-500">Load More Videos</button>
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}