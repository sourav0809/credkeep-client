import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
