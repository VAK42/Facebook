import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

export default function Search() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto ml-64 mr-80 flex-1 px-4 py-6">
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
          <h1 className="mb-6 text-2xl font-bold text-white">Search</h1>
          <div className="mb-8">
            <div className="relative">
              <input type="text" placeholder="Search Facebook" className="w-full rounded-full bg-gray-700 px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="Facebook" />
              <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {["All", "Posts", "People", "Photos", "Videos", "Groups", "Pages"].map(filter => (
                <button key={filter} className="rounded-full bg-gray-600 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-500">
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Results For "Facebook"</h2>
            <div>
              <h3 className="mb-4 text-md font-medium text-gray-300">People</h3>
              <div className="space-y-4">
                {['Trevor', 'Niko', 'Tsunade'].map(person => (
                  <div key={person} className="flex items-center space-x-4 rounded-lg bg-gray-700 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-bold text-blue-500">U</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{person}</h4>
                      <p className="text-sm text-gray-300">Friend • 5 Mutual Friends</p>
                    </div>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">Add Friend</button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-md font-medium text-gray-300">Posts</h3>
              <div className="space-y-4">
                {['Itachi', 'Zoro'].map(post => (
                  <div key={post} className="rounded-lg border border-gray-600 bg-gray-700 p-4">
                    <div className="mb-3 flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-500">U</div>
                      <div>
                        <p className="text-sm font-medium text-white">{post}</p>
                        <p className="text-xs text-gray-400">2 Hours Ago</p>
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-white">Love Facebook</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>👍 12</span>
                      <span>3 Comments</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}