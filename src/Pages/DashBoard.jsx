import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
export default function DashBoard() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        {/* no changes are supposed to be made here */}
        <Outlet />
      </div>
    </div>
  );
}
