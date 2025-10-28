import LeftSidebar from "../../../components/LeftSidebar";
import RightSidebar from "../../../components/RightSidebar";

export default async function GroupDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const groupName = decodeURIComponent(id);
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="flex-1 mx-auto px-4 py-6 ml-64 mr-80">
        <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 mb-6">
          <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mb-4">
            <span className="text-white text-4xl font-bold">{groupName}</span>
          </div>
          <div className="px-6 pb-6">
            <h1 className="text-2xl font-bold mb-2 text-white">{groupName}</h1>
            <p className="text-gray-300 mb-4">Join Us!</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-400">{Math.floor(Math.random() * 1000) + 100} Members</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-400">Public Group</span>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">Join Group</button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium">Invite</button>
              </div>
            </div>
            <p className="text-white mb-4">Welcome To Group {groupName}! This Is The Detailed View Of The Group!</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Recent Posts</h2>
          {['Anna', 'Harry', 'Ron'].map((post) => (
            <div key={post} className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold text-sm">U</div>
                <div>
                  <p className="font-medium text-white">{post}</p>
                  <p className="text-xs text-gray-400">1 Hour Ago</p>
                </div>
              </div>
              <p className="text-white">Joined {groupName}!</p>
            </div>
          ))}
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}