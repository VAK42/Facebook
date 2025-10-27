import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  )
}