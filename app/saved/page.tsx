import Link from "next/link"
import LeftSidebar from "../../components/LeftSidebar"
import RightSidebar from "../../components/RightSidebar"
import { Bookmark, ExternalLink, MoreHorizontal } from "lucide-react"

export default function Saved() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto ml-64 mr-80 flex-1 px-4 py-6">
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Saved</h1>
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">+ Create Collection</button>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">All</button>
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">Posts</button>
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">Photos</button>
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">Videos</button>
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">Links</button>
            </div>
          </div>
          <div className="space-y-4">
            {[{ id: 1, type: "Post", title: "Amazing Sunset Photo", content: "Check Out This Beautiful Sunset I Captured Yesterday!", author: "John Doe", time: "2 Days Ago", image: "🌅" }, { id: 2, type: "Link", title: "10 Tips For Better Photography", content: "A Comprehensive Guide To Improving Your Photography Skills", author: "Photography Blog", time: "1 Week Ago", image: "📸" }, { id: 3, type: "Video", title: "Cooking Tutorial: Perfect Pasta", content: "Learn How To Make Authentic Italian Pasta From Scratch", author: "Chef Mario", time: "3 Days Ago", image: "🍝" }, { id: 4, type: "Photo", title: "Mountain Adventure", content: "Hiking Through The Rockies - What An Incredible Experience!", author: "Adventure Seeker", time: "5 Days Ago", image: "🏔️" }].map(item => (
              <Link key={item.id} href={`/saved/${item.id}`}>
                <div className="cursor-pointer rounded-lg border border-gray-600 bg-gray-700 p-4 transition-all hover:bg-gray-600 hover:opacity-90">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-600 text-2xl">{item.image}</div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center space-x-2">
                        <span className="rounded bg-gray-600 px-2 py-1 text-xs text-gray-300">{item.type}</span>
                        <span className="text-sm text-gray-400">{item.time}</span>
                      </div>
                      <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                      <p className="mb-2 text-sm text-gray-300">{item.content}</p>
                      <p className="text-sm text-gray-400">By {item.author}</p>
                      <div className="mt-3 flex items-center space-x-2">
                        <button className="flex items-center space-x-1 text-blue-400 hover:text-blue-300">
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-sm">View</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
                          <Bookmark className="h-4 w-4" />
                          <span className="text-sm">Unsave</span>
                        </button>
                        <button className="text-gray-300 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}