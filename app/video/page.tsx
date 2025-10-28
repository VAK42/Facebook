import Link from "next/link";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

export default function Video() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto ml-64 mr-80 flex-1 px-4 py-6">
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
          <h1 className="mb-6 text-2xl font-bold text-white">Video</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map(video => (
              <Link key={video} href={`/video/${video}`}>
                <div className="cursor-pointer overflow-hidden rounded-lg bg-gray-700 transition-all hover:opacity-90">
                  <div className="flex aspect-video items-center justify-center bg-gray-600">
                    <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-medium text-white">Video {video}</h3>
                    <p className="text-sm text-gray-300">Ankara Messi</p>
                    <p className="mt-2 text-xs text-gray-400">1.2K Views • 2 Hours Ago</p>
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