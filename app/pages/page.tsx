import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

export default function Pages() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto ml-64 mr-80 flex-1 px-4 py-6">
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Pages</h1>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">+ Create Page</button>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">Your Pages</button>
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">Liked</button>
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-500">Discover</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-white">Pages You Manage</h2>
              <div className="rounded-lg border border-gray-600 bg-gray-700 p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white text-2xl font-bold text-blue-500">B</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">My Business Page</h3>
                    <p className="mb-2 text-sm text-gray-300">Local Business • 1.2K Likes</p>
                    <div className="flex items-center space-x-2">
                      <button className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">Manage</button>
                      <button className="rounded bg-gray-600 px-3 py-1 text-sm text-gray-300 hover:bg-gray-500">Promote</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-white">Suggested Pages</h2>
              {[{ name: "Tech News Daily", category: "News & Media", likes: "45K Likes", avatar: "📰" }, { name: "Foodie Adventures", category: "Food & Beverage", likes: "23K Likes", avatar: "🍕" }, { name: "Fitness Motivation", category: "Health & Fitness", likes: "67K Likes", avatar: "💪" }, { name: "Travel Stories", category: "Travel", likes: "89K Likes", avatar: "✈️" }].map((page, index) => (
                <div key={index} className="rounded-lg border border-gray-600 bg-gray-700 p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-600 text-xl">{page.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{page.name}</h3>
                      <p className="text-sm text-gray-300">{page.category} • {page.likes}</p>
                      <button className="mt-2 rounded bg-blue-600 px-4 py-1 text-sm text-white hover:bg-blue-700">Like</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-white">Recently Liked Pages</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[{ name: "Music Festival", avatar: "🎵" }, { name: "Art Gallery", avatar: "🎨" }, { name: "Coffee Shop", avatar: "☕" }, { name: "Book Club", avatar: "📚" }].map((page, index) => (
                <div key={index} className="cursor-pointer rounded-lg border border-gray-600 bg-gray-700 p-3 text-center transition-shadow hover:shadow-md">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-600 text-xl">{page.avatar}</div>
                  <p className="text-sm font-medium text-white">{page.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}