'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Home, Video, Store, Users, Gamepad2, Search, MessageCircle, Bell, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const isActive = (path: string) => pathname === path || (path !== '/' && pathname.startsWith(path));
  const handleSearchClick = () => { router.push('/search') };
  const notifications = [{ type: 'like', user: 'Alice Johnson', action: 'Liked Your Post', time: '2 Minutes Ago', content: '"This Is Amazing!"', avatar: 'A' }, { type: 'comment', user: 'Bob Smith', action: 'Commented On Your Photo', time: '15 Minutes Ago', content: '"Great Picture! Where Was This Taken?"', avatar: 'B' }, { type: 'friend', user: 'Carol Williams', action: 'Sent You A Friend Request', time: '1 Hour Ago', content: '', avatar: 'C' }];
  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4 w-1/4">
            <Link href="/" className="text-blue-600 font-bold text-2xl bg-white rounded-full w-8 text-center">f</Link>
            <div className="hidden md:block relative flex-1 max-w-xs">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input type="text" placeholder="Search Facebook" onClick={handleSearchClick} className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 cursor-pointer" readOnly />
            </div>
          </div>
          <div className="flex justify-center space-x-2 w-1/2">
            <Link href="/" className={`flex flex-col items-center p-2 rounded-lg hover:bg-gray-800 transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-300'}`}>
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1 hidden lg:block">Home</span>
            </Link>
            <Link href="/video" className={`flex flex-col items-center p-2 rounded-lg hover:bg-gray-800 transition-colors ${isActive('/video') ? 'text-blue-600' : 'text-gray-300'}`}>
              <Video className="w-6 h-6" />
              <span className="text-xs mt-1 hidden lg:block">Video</span>
            </Link>
            <Link href="/store" className={`flex flex-col items-center p-2 rounded-lg hover:bg-gray-800 transition-colors ${isActive('/store') ? 'text-blue-600' : 'text-gray-300'}`}>
              <Store className="w-6 h-6" />
              <span className="text-xs mt-1 hidden lg:block">Store</span>
            </Link>
            <Link href="/group" className={`flex flex-col items-center p-2 rounded-lg hover:bg-gray-800 transition-colors ${isActive('/group') ? 'text-blue-600' : 'text-gray-300'}`}>
              <Users className="w-6 h-6" />
              <span className="text-xs mt-1 hidden lg:block">Groups</span>
            </Link>
            <Link href="/game" className={`flex flex-col items-center p-2 rounded-lg hover:bg-gray-800 transition-colors ${isActive('/game') ? 'text-blue-600' : 'text-gray-300'}`}>
              <Gamepad2 className="w-6 h-6" />
              <span className="text-xs mt-1 hidden lg:block">Gaming</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 w-1/4 justify-end">
            <Link href="/messenger" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <MessageCircle className="w-6 h-6 text-gray-300" />
            </Link>
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="p-2 rounded-full hover:bg-gray-800 transition-colors hover:cursor-pointer">
                <Bell className="w-6 h-6 text-gray-300" />
              </button>
              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                    <h3 className="font-semibold text-white">Notifications</h3>
                    <button onClick={() => setShowNotifications(false)} className="text-gray-400 hover:text-white">
                      <X className="w-5 h-5 hover:cursor-pointer" />
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification, index) => (
                      <div key={index} className="p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold text-sm">
                            {notification.avatar}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-white">
                              <span className="font-medium">{notification.user}</span> {notification.action}
                              {notification.content && (
                                <span className="text-gray-300"> {notification.content}</span>
                              )}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 text-center">
                    <button className="text-blue-400 hover:text-blue-300 text-sm hover:cursor-pointer">See All Notifications</button>
                  </div>
                </div>
              )}
            </div>
            <Link href="/profile" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <div className="w-8 h-8 bg-white text-green-500 text-center rounded-full">K</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}