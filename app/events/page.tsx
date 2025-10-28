import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="flex-1 mx-auto px-4 py-6 ml-64 mr-80">
        <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Events</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">+ Create Event</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-white">Upcoming Events</h2>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex flex-col items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                    <span className="text-xs font-medium text-white">15</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">Tech Conference 2024</h3>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Tomorrow At 9:00 Am</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Convention Center</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <Users className="w-4 h-4 mr-1" />
                      <span>245 Attending</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex flex-col items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                    <span className="text-xs font-medium text-white">22</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">Music Festival</h3>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Saturday At 6:00 Pm</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Central Park</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <Users className="w-4 h-4 mr-1" />
                      <span>1.2K Interested</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex flex-col items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                    <span className="text-xs font-medium text-white">28</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">Art Exhibition</h3>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Next Friday At 2:00 Pm</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Modern Art Museum</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <Users className="w-4 h-4 mr-1" />
                      <span>89 Attending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-white">Your Events</h2>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Events You're Hosting</h3>
                <p className="text-sm text-gray-300">No Events Scheduled</p>
                <button className="mt-2 text-blue-400 text-sm hover:underline">Create Your First Event</button>
              </div>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Events You're Attending</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Tech Conference 2024</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Going</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Music Festival</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Interested</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Event Invitations</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Birthday Party</span>
                    <div className="space-x-2">
                      <button className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Accept</button>
                      <button className="text-xs bg-gray-500 text-gray-300 px-2 py-1 rounded hover:bg-gray-400">Decline</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}