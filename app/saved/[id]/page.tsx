import LeftSidebar from "../../../components/LeftSidebar"
import RightSidebar from "../../../components/RightSidebar"
import { Heart, MessageCircle, Share } from "lucide-react"

export default async function SavedDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = { type: "Post", title: "Amazing Sunset Photo " + id, content: "Check Out This Beautiful Sunset I Captured Yesterday!", author: "John Doe", time: "2 Days Ago", image: "🌅", likes: 42, comments: 8 }
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto mx-auto flex-1 max-w-4xl px-4 py-6">
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
          <div className="mb-6 flex items-start space-x-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-gray-600 text-4xl">{item.image}</div>
            <div className="flex-1">
              <div className="mb-2 flex items-center space-x-2">
                <span className="rounded bg-gray-600 px-3 py-1 text-sm text-gray-300">{item.type}</span>
                <span className="text-sm text-gray-400">{item.time}</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold text-white">{item.title}</h1>
              <p className="mb-4 text-gray-300">{item.content}</p>
              <p className="mb-4 text-sm text-gray-400">By {item.author}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Heart className="h-4 w-4" />
                  <span>{item.likes} Likes</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MessageCircle className="h-4 w-4" />
                  <span>{item.comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6">
            <div className="mb-4 flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-blue-500">JD</div>
              <div>
                <p className="font-medium text-white">{item.author}</p>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
            </div>
            <p className="mb-4 text-white">{item.content}</p>
            <div className="mb-4 flex h-64 items-center justify-center rounded-lg bg-gray-700">
              <span className="text-gray-400">Image | Video</span>
            </div>
            <div className="mb-4 flex items-center justify-between text-sm text-gray-400">
              <span>👍 {item.likes}</span>
              <span>{item.comments} Comments</span>
            </div>
            <div className="flex border-t border-gray-600 pt-4">
              <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg py-2 transition-colors hover:bg-gray-700">
                <Heart className="h-5 w-5" />
                <span className="text-white">Like</span>
              </button>
              <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg py-2 transition-colors hover:bg-gray-700">
                <MessageCircle className="h-5 w-5" />
                <span className="text-white">Comment</span>
              </button>
              <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg py-2 transition-colors hover:bg-gray-700">
                <Share className="h-5 w-5" />
                <span className="text-white">Share</span>
              </button>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6">
            <h2 className="mb-4 text-xl font-bold text-white">Comments</h2>
            {['Anna', 'Silva', 'Pedri'].map(comment => (
              <div key={comment} className="mb-4 flex space-x-3 border-b border-gray-700 pb-4 last:border-b-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-500">U</div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center space-x-2">
                    <p className="font-medium text-white">{comment}</p>
                    <p className="text-xs text-gray-400">2 Hours Ago</p>
                  </div>
                  <p className="text-white">A Comment On The Saved Item!</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}