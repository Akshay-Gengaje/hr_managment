import {useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";


// App layout is made for showing content proper way.
const AppLayout = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-200">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar isOpen={isSidebarOpen}>{children}</Navbar>
      </div>
    </div>
  );
};

export default AppLayout;
