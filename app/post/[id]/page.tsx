import LeftSidebar from "../../../components/LeftSidebar";
import RightSidebar from "../../../components/RightSidebar";

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  return (
    <div className="bg-gray-900 min-h-screen">
      <LeftSidebar />
      <main className="mx-auto max-w-2xl flex-1 px-4 py-6">
        <div className="bg-gray-800 border-gray-700 mb-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white text-blue-500 flex h-10 w-10 items-center justify-center rounded-full font-bold">U</div>
              <div>
                <p className="text-white font-medium">{decodedId}</p>
                <p className="text-gray-400 text-sm">2 Hours Ago</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
            </button>
          </div>
          <div className="px-4 pb-4">
            <p className="text-white mb-4">This Is The Detailed View Of Post {decodedId}</p>
            <div className="bg-gray-700 mb-4 flex h-96 items-center justify-center rounded-lg">
              <span className="text-gray-400">Image | Video</span>
            </div>
          </div>
          <div className="border-gray-700 border-t px-4 py-2">
            <div className="text-gray-400 mb-2 flex justify-between text-sm">
              <span>👍 42 Likes</span>
              <span>8 Comments • 3 Shares</span>
            </div>
            <div className="border-gray-700 flex border-t pt-2">
              <button className="hover:bg-gray-700 flex flex-1 items-center justify-center space-x-2 rounded-lg py-2 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                <span className="text-white">Like</span>
              </button>
              <button className="hover:bg-gray-700 flex flex-1 items-center justify-center space-x-2 rounded-lg py-2 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg>
                <span className="text-white">Comment</span>
              </button>
              <button className="hover:bg-gray-700 flex flex-1 items-center justify-center space-x-2 rounded-lg py-2 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /></svg>
                <span className="text-white">Share</span>
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4">{[1, 2, 3].map(comment => (
          <div key={comment} className="bg-gray-800 border-gray-700 rounded-lg border p-4 shadow-sm">
            <div className="mb-2 flex items-center space-x-3">
              <div className="bg-white text-blue-500 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">U</div>
              <div>
                <p className="text-white font-medium">Commenter {comment}</p>
                <p className="text-gray-400 text-xs">1 Hour Ago</p>
              </div>
            </div>
            <p className="text-white">{comment}</p>
          </div>
        ))}</div>
      </main>
      <RightSidebar />
    </div>
  )
}