import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import { MoreHorizontal } from "lucide-react";

export default function Friends() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="flex-1 mx-auto px-4 py-6 ml-64 mr-80">
        <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Friends</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Find Friends</button>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Your Friends</button>
            <button className="bg-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors">Friend Requests</button>
            <button className="bg-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors">Suggestions</button>
            <button className="bg-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors">All Friends</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "John Doe", mutual: "12 Mutual Friends", avatar: "J" },
              { name: "Jane Smith", mutual: "8 Mutual Friends", avatar: "J" },
              { name: "Mike Johnson", mutual: "15 Mutual Friends", avatar: "M" },
              { name: "Sarah Wilson", mutual: "6 Mutual Friends", avatar: "S" },
              { name: "David Brown", mutual: "9 Mutual Friends", avatar: "D" },
              { name: "Lisa Davis", mutual: "11 Mutual Friends", avatar: "L" }
            ].map((friend, index) => (
              <div key={index} className="bg-gray-700 border border-gray-600 rounded-lg p-4 flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-500 text-xl font-bold">{friend.avatar}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{friend.name}</h3>
                  <p className="text-sm text-gray-300">{friend.mutual}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">Confirm</button>
                    <button className="bg-gray-600 text-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-500">Delete</button>
                  </div>
                </div>
                <button className="text-gray-300 hover:text-white">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}