import LeftSidebar from "../../../components/LeftSidebar";
import RightSidebar from "../../../components/RightSidebar";
import { Heart, MessageCircle } from "lucide-react";

export default async function MarketplaceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = { title: "Sample Product " + id, price: "$29.99", location: "New York - NY", time: "2 Hours Ago", image: "📦", condition: "Used - Good", description: "Detailed Description Of The Product" };
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="flex-1 mx-auto px-4 py-6 ml-64 mr-80">
        <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 mb-6">
          <div className="aspect-square bg-gray-600 flex items-center justify-center text-8xl mb-4">{item.image}</div>
          <div className="px-6 pb-6">
            <h1 className="text-2xl font-bold mb-2 text-white">{item.title}</h1>
            <p className="text-green-400 font-bold text-3xl mb-4">{item.price}</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold">S{id}</div>
                <div>
                  <p className="font-medium text-white">Seller {id}</p>
                  <p className="text-sm text-gray-400">{item.location} • {item.time}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"><MessageCircle className="w-4 h-4" /><span>Message</span></button>
                <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium"><Heart className="w-4 h-4" /><span>Save</span></button>
              </div>
            </div>
            <div className="mb-4"><span className="text-sm text-gray-300 bg-gray-700 px-2 py-1 rounded">{item.condition}</span></div>
            <p className="text-white mb-4">{item.description}</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Similar Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((similarItem) => (
              <div key={similarItem} className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-4">
                <div className="aspect-square bg-gray-600 flex items-center justify-center text-8xl mb-2">📦</div>
                <h3 className="font-semibold text-lg mb-1 text-white">Similar Product {similarItem}</h3>
                <p className="text-green-400 font-bold text-xl mb-1">${similarItem}9.99</p>
                <p className="text-sm text-gray-300">Location {similarItem} • {similarItem} Day Ago</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}