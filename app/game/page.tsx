import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

export default function Game() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="flex-1 mx-auto px-4 py-6 ml-64 mr-80">
        <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
          <h1 className="text-2xl font-bold mb-6 text-white">Gaming</h1>
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-white">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {['Action', 'Strategy', 'Puzzle', 'Racing', 'Sport', 'RPG'].map((category) => (
                <button key={category} className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-full text-sm transition-colors text-white">{category}</button>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-white">Featured Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Grand Theft Auto V', 'Red Dead Redemption 2', 'Black Myth Wukong'].map((game) => (
                <div key={game} className="bg-gray-700 rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-white">{game}</h3>
                    <p className="text-sm text-gray-300 mb-3">GOTY</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">⭐⭐⭐⭐⭐</span>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm">Play</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((activity) => (
                <div key={activity} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold">P{activity}</div>
                  <div className="flex-1">
                    <p className="text-sm text-white">
                      <span className="font-medium">Player {activity}</span> Achieved A New High Score In Game {activity}
                    </p>
                    <p className="text-xs text-gray-400">2 Hours Ago</p>
                  </div>
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