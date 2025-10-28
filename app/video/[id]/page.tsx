import LeftSidebar from "../../../components/LeftSidebar";
import RightSidebar from "../../../components/RightSidebar";

export default async function VideoDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto ml-64 mr-80 flex-1 px-4 py-6">
        <div className="mb-6 rounded-lg border border-gray-700 bg-gray-800 shadow-sm">
          <div className="mb-4 flex aspect-video items-center justify-center bg-gray-600">
            <svg className="h-16 w-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="px-6 pb-6">
            <h1 className="mb-2 text-2xl font-bold text-white">Video {id}</h1>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-blue-500">U</div>
                <div>
                  <p className="font-medium text-white">User {id}</p>
                  <p className="text-sm text-gray-400">1.2K Views • 2 Hours Ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Like</button>
                <button className="rounded-lg bg-gray-700 px-4 py-2 font-medium text-white hover:bg-gray-600">Share</button>
              </div>
            </div>
            <p className="mb-4 text-white">The Detailed View Of Video {id}!</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Comments</h2>
          {["Anna", "Messi", "Neymar"].map(comment => (
            <div key={comment} className="rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm">
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-500">U</div>
                <div>
                  <p className="font-medium text-white">{comment}</p>
                  <p className="text-xs text-gray-400">1 Hour Ago</p>
                </div>
              </div>
              <p className="text-white">{comment}</p>
            </div>
          ))}
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}