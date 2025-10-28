import Link from "next/link";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

export default function Store() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <main className="mx-auto ml-64 mr-80 flex-1 px-4 py-6">
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
          <h1 className="mb-6 text-2xl font-bold text-white">Marketplace</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <Link key={item} href={`/store/${item}`}>
                <div className="cursor-pointer overflow-hidden rounded-lg border border-gray-600 bg-gray-700 shadow-sm transition-all hover:opacity-90 hover:shadow-md">
                  <div className="flex aspect-square items-center justify-center bg-gray-600">
                    <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6H3c-.55 0-1-.45-1-1s.45-1 1-1h4zM9 3v1h6V3H9z" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-semibold text-white">${item}9.99</h3>
                    <p className="mb-2 text-sm text-gray-300">Product {item}</p>
                    <p className="text-xs text-gray-400">Location • 2 Hours Ago</p>
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