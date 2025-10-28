import Link from "next/link";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

export default function Group() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="flex-1 mx-auto px-4 py-6 ml-64 mr-80">
        <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
          <h1 className="text-2xl font-bold mb-6 text-white">Groups</h1>
          <div className="mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">+ Create Group</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Unbeatable Conquerors', 'Grove Street Families', 'Ballas', 'Illuminati', 'Norse Mythology', 'World Enders'].map((group) => (
              <Link key={group} href={`/group/${group}`}>
                <div className="bg-gray-700 border border-gray-600 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:opacity-90 transition-all cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{group}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-white">{group}</h3>
                    <p className="text-sm text-gray-300 mb-3">Join Us!</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{Math.floor(Math.random() * 1000) + 100} Members</span>
                      <button className="bg-gray-600 text-gray-300 px-3 py-1 rounded-lg hover:bg-gray-500 transition-colors text-sm">Join</button>
                    </div>
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