import Link from "next/link";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import { Search, Heart, MessageCircle } from "lucide-react";

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="flex-1 mx-auto px-4 py-6 ml-64 mr-80">
        <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Marketplace</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search Marketplace" className="pl-10 pr-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">+ Sell</button>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            {["Browse All", "Vehicles", "Property", "Electronics", "Home & Garden", "Fashion", "Sports", "Collectibles"].map((category) => (<button key={category} className="bg-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors">{category}</button>))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[{ id: 1, title: "Iphone 13 Pro Max", price: "$899", location: "New York, Ny", time: "2 Hours Ago", image: "📱", condition: "Used - Good" }, { id: 2, title: "2020 Honda Civic", price: "$18,500", location: "Los Angeles, Ca", time: "4 Hours Ago", image: "🚗", condition: "Used - Excellent" }, { id: 3, title: "Modern Sofa Set", price: "$450", location: "Chicago, Il", time: "6 Hours Ago", image: "🛋️", condition: "Used - Like New" }, { id: 4, title: "Macbook Pro 16\"", price: "$1,999", location: "Seattle, Wa", time: "8 Hours Ago", image: "💻", condition: "Used - Good" }, { id: 5, title: "Mountain Bike", price: "$350", location: "Denver, Co", time: "1 Day Ago", image: "🚴", condition: "Used - Good" }, { id: 6, title: "Vintage Guitar", price: "$280", location: "Austin, Tx", time: "1 Day Ago", image: "🎸", condition: "Used - Excellent" }, { id: 7, title: "Coffee Table", price: "$120", location: "Miami, Fl", time: "2 Days Ago", image: "🪑", condition: "Used - Good" }, { id: 8, title: "Gaming Pc Setup", price: "$1,200", location: "Phoenix, Az", time: "2 Days Ago", image: "🖥️", condition: "Used - Like New" }].map((item) => (
              <Link key={item.id} href={`/marketplace/${item.id}`}>
                <div className="bg-gray-700 border border-gray-600 rounded-lg overflow-hidden hover:shadow-md hover:opacity-90 transition-all cursor-pointer">
                  <div className="aspect-square bg-white flex items-center justify-center text-8xl">{item.image}</div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 text-white">{item.title}</h3>
                    <p className="text-green-400 font-bold text-xl mb-1">{item.price}</p>
                    <p className="text-sm text-gray-300 mb-1">{item.location}</p>
                    <p className="text-xs text-gray-400 mb-2">{item.time}</p>
                    <p className="text-xs text-gray-300">{item.condition}</p>
                    <div className="flex items-center justify-between mt-3">
                      <button className="flex items-center space-x-1 text-gray-300 hover:text-red-400"><Heart className="w-4 h-4" /><span className="text-sm">Save</span></button>
                      <button className="flex items-center space-x-1 text-gray-300 hover:text-blue-400"><MessageCircle className="w-4 h-4" /><span className="text-sm">Message</span></button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-500 transition-colors">Load More Items</button>
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}