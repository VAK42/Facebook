import LeftSidebar from "../../../components/LeftSidebar";
import RightSidebar from "../../../components/RightSidebar";

export default async function StoreDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto ml-64 mr-80 flex-1 px-4 py-6">
        <div className="mb-6 rounded-lg border border-gray-700 bg-gray-800 shadow-sm">
          <div className="mb-4 flex aspect-square items-center justify-center bg-gray-600">
            <svg className="h-16 w-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6H3c-.55 0-1-.45-1-1s.45-1 1-1h4zM9 3v1h6V3H9z" />
            </svg>
          </div>
          <div className="px-6 pb-6">
            <h1 className="mb-2 text-2xl font-bold text-white">Product {id}</h1>
            <p className="mb-4 text-3xl font-bold text-green-400">${id}9.99</p>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-blue-500">U</div>
                <div>
                  <p className="font-medium text-white">Seller</p>
                  <p className="text-sm text-gray-400">Location • 2 Hours Ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Message Seller</button>
                <button className="rounded-lg bg-gray-700 px-4 py-2 font-medium text-white hover:bg-gray-600">Save</button>
              </div>
            </div>
            <p className="mb-4 text-white">The Detailed View Of Product {id}</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Similar Items</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map(item => (
              <div key={item} className="rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm">
                <div className="mb-2 flex aspect-square items-center justify-center bg-gray-600">
                  <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6H3c-.55 0-1-.45-1-1s.45-1 1-1h4zM9 3v1h6V3H9z" />
                  </svg>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-white">${item}9.99</h3>
                <p className="text-sm text-gray-300">Similar Product {item}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}