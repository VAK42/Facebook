import LeftSidebar from "../../../components/LeftSidebar";
import RightSidebar from "../../../components/RightSidebar";
import { Share, ThumbsUp, ThumbsDown } from "lucide-react";

export default async function WatchDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto flex-1 max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4 overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-sm">
              <div className="flex aspect-video items-center justify-center bg-gray-600 text-8xl">🎥</div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
              <h1 className="mb-2 text-2xl font-bold text-white">Video {id}</h1>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-blue-500">C</div>
                  <div>
                    <p className="font-medium text-white">Channel {id}</p>
                    <p className="text-sm text-gray-400">1.2M Subscribers • 2.1M Views • 3 Days Ago</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-2 rounded-lg bg-gray-700 px-4 py-2 font-medium text-white hover:bg-gray-600"><ThumbsUp className="h-4 w-4" /><span>12K</span></button>
                  <button className="flex items-center space-x-2 rounded-lg bg-gray-700 px-4 py-2 font-medium text-white hover:bg-gray-600"><ThumbsDown className="h-4 w-4" /><span>Dislike</span></button>
                  <button className="flex items-center space-x-2 rounded-lg bg-gray-700 px-4 py-2 font-medium text-white hover:bg-gray-600"><Share className="h-4 w-4" /><span>Share</span></button>
                </div>
              </div>
              <p className="mb-4 text-white">The Detailed View Of Video {id}</p>
            </div>
            <div className="mt-4 rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-white">Comments</h2>
              {['Mbappe', 'LBJ', 'Curry', 'Jokic', 'Luka'].map(comment => (
                <div key={comment} className="mb-4 flex space-x-3 border-b border-gray-700 pb-4 last:border-b-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-500">U</div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center space-x-2">
                      <p className="font-medium text-white">{comment}</p>
                      <p className="text-xs text-gray-400">2 Hours Ago</p>
                    </div>
                    <p className="text-white">Great Content!</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-sm text-gray-300 hover:text-blue-400"><ThumbsUp className="h-3 w-3" /><span>12</span></button>
                      <button className="flex items-center space-x-1 text-sm text-gray-300 hover:text-red-400"><ThumbsDown className="h-3 w-3" /><span>1</span></button>
                      <button className="text-sm text-gray-300 hover:text-blue-400">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Up Next</h3>
            {[1, 2, 3, 4, 5].map(video => (
              <div key={video} className="flex cursor-pointer space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-800">
                <div className="flex h-18 w-32 flex-shrink-0 items-center justify-center rounded bg-gray-600 text-2xl">🎥</div>
                <div className="flex-1">
                  <h4 className="line-clamp-2 text-sm font-medium text-white">Related Video {video}</h4>
                  <p className="mt-1 text-xs text-gray-400">Channel {video}</p>
                  <p className="text-xs text-gray-400">1.2K Views • 2 Days Ago</p>
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