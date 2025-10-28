export default function Profile() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <main className="mx-auto flex-1 px-4 py-6">
        <div className="bg-gray-800 border-gray-700 overflow-hidden rounded-lg border shadow-sm">
          <div className="relative h-64 bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="absolute bottom-4 left-4 flex items-end space-x-4">
              <div className="border-gray-700 text-green-500 flex h-32 w-32 items-center justify-center rounded-full border-4 bg-white text-4xl font-bold">K</div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">VAK</h1>
                <p className="opacity-90 text-sm">1.2K Friends • 45 Posts</p>
              </div>
            </div>
          </div>
          <div className="border-gray-600 border-b">
            <div className="px-6 py-4">
              <nav className="flex space-x-8">
                <button className="border-blue-400 text-blue-400 border-b-2 pb-2 font-medium">Posts</button>
                <button className="text-gray-300 pb-2 hover:text-white">About</button>
                <button className="text-gray-300 pb-2 hover:text-white">Friends</button>
                <button className="text-gray-300 pb-2 hover:text-white">Photos</button>
                <button className="text-gray-300 pb-2 hover:text-white">Videos</button>
                <button className="text-gray-300 pb-2 hover:text-white">More</button>
              </nav>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <div className="bg-gray-700 mb-6 rounded-lg p-4">
                  <h2 className="mb-4 font-semibold text-white">Intro</h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg className="text-gray-400 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" /></svg>
                      <span className="text-gray-300 text-sm">Lives In Los Angeles</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="text-gray-400 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm6 12h-4v-2h2v-2h-2v-2h2v-2h-2V9h4v10z" /></svg>
                      <span className="text-gray-300 text-sm">Works At NVIDIA</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="text-gray-400 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      <span className="text-gray-300 text-sm">Studied At MIT</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-semibold text-white">Photos</h2>
                    <button className="text-blue-400 text-sm hover:underline">See All Photos</button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">{[1, 2, 3, 4, 5, 6].map(photo => (
                    <div key={photo} className="bg-gray-600 flex aspect-square items-center justify-center rounded-lg">
                      <span className="text-gray-400 text-xs">Photo {photo}</span>
                    </div>
                  ))}</div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-800 border-gray-600 mb-6 rounded-lg border p-4">
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="bg-white flex h-10 w-10 items-center justify-center rounded-full font-bold text-green-500">K</div>
                    <div className="flex-1">
                      <input type="text" placeholder="What's On Your Mind?" className="bg-gray-700 placeholder-gray-400 w-full rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button className="text-gray-300 hover:bg-gray-600 flex items-center space-x-2 rounded-lg px-3 py-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></svg>
                      <span className="text-sm">Photo/Video</span>
                    </button>
                    <button className="text-gray-300 hover:bg-gray-600 flex items-center space-x-2 rounded-lg px-3 py-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      <span className="text-sm">Feeling/Activity</span>
                    </button>
                  </div>
                </div>
                {[1, 2, 3].map(post => (
                  <div key={post} className="bg-gray-800 border-gray-600 mb-6 rounded-lg border">
                    <div className="p-4">
                      <div className="mb-3 flex items-center space-x-3">
                        <div className="bg-white flex h-10 w-10 items-center justify-center rounded-full font-bold text-green-500">K</div>
                        <div>
                          <p className="text-white font-medium">VAK</p>
                          <p className="text-gray-400 text-xs">{post} Hour{post > 1 ? "s" : ""} Ago</p>
                        </div>
                      </div>
                      <p className="mb-3 text-white">#{post}</p>
                      <div className="text-gray-400 flex items-center justify-between text-sm">
                        <span>👍 12 Likes</span>
                        <span>3 Comments</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}