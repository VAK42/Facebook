import Link from "next/link";

export default function Feed() {
  return (
    <main className="flex-1 max-w-2xl mx-auto px-4 py-6">
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 font-bold">K</div>
          <input type="text" placeholder="What's On Your Mind?" className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>
        <hr className="mb-4 border-gray-600" />
        <div className="flex justify-around">
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
            <span className="text-sm text-white">Photo/Video</span>
          </button>
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm text-white">Tag Friends</span>
          </button>
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-sm text-white">Feeling/Activity</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm p-4 mb-6">
        <h3 className="font-semibold mb-4 text-white">Stories</h3>
        <div className="flex space-x-4 overflow-x-hidden">
          <div className="flex-shrink-0 w-32 h-48 bg-gray-700 rounded-lg relative cursor-pointer hover:opacity-90 transition-opacity">
            <div className="w-full h-3/4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">+</span>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-white text-sm font-medium text-center">Create Story</p>
            </div>
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex-shrink-0 w-32 h-48 bg-gray-700 rounded-lg relative cursor-pointer hover:opacity-90 transition-opacity">
              <div className="w-full h-full bg-gradient-to-b from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">S{i}</span>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-sm font-medium text-center">S{i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {['Arthur Morgan', 'Franklin Clinton', 'Michael De Santa'].map((post) => (
        <Link key={post} href={`/post/${post}`}>
          <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm mb-6 cursor-pointer hover:bg-gray-750 transition-colors">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold">U</div>
                <div>
                  <p className="font-medium text-white">{post}</p>
                  <p className="text-sm text-gray-400">2 Hours Ago</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
            </div>
            <div className="px-4 pb-4">
              <p className="mb-4 text-white">Lorem Ipsum Dolor Sit Amet! Consectetur Adipiscing Elit!</p>
              <div className="bg-gray-700 h-64 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                <span className="text-gray-400">Image | Video</span>
              </div>
            </div>
            <div className="px-4 py-2 border-t border-gray-700">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>👍 42</span>
                <span>8 Comments</span>
              </div>
              <div className="flex border-t border-gray-700 pt-2">
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-white">Like</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                  </svg>
                  <span className="text-white">Comment</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                  </svg>
                  <span className="text-white">Share</span>
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}