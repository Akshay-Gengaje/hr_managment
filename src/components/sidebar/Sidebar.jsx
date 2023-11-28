import { FaGreaterThan } from "react-icons/fa";
import { routes } from "./routes";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/userContext";
const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const { role } = useUser();
  return (
    <div className="relative">
      <aside
        className={`bg-white text-black shadow-2xl h-screen z-10 rounded-tr-[80px] w-64 fixed overflow-visible transition-all duration-100 ${
          isSidebarOpen ? "left-0" : "-left-52"
        }`}
      >
        <div className="w-full flex flex-col items-center">
          {/* Logo  */}
          <img
            src="/images/logo.png"
            alt=""
            className={`${isSidebarOpen ? "w-28 mt-14" : "w-10 mt-10 ml-48"} `}
          />
          {/* Menu Items */}
          <div
            className={`${
              isSidebarOpen ? " pr-2  text-center" : "text-center pl-52 "
            } mt-10 flex flex-col w-full font-semibold  text-gray-500 text-lg `}
          >
            {routes?.map((route) => {
              if (role === "user" && route.path === "/admin") return;
              return (
                <NavLink
                  to={route.path}
                  key={route.name}
                  activeclassname="active"
                  className={`${
                    isSidebarOpen
                      ? "pl-10 rounded-r-2xl flex items-center justify-start gap-5"
                      : ""
                  } p-2   `}
                >
                  <span className={`${isSidebarOpen ? "" : ""}`}>
                    {route.icon}
                  </span>
                  <span className={`${isSidebarOpen ? "" : "hidden"}`}>
                    {route.name}
                  </span>
                </NavLink>
              );
            })}
          </div>

          {/* Open and close sidebar button  */}
          <button
            className={`text-white px-3 focus:outline-none absolute top-20 -right-5 text-lg bg-orange-400 rounded-full p-1 font-bold ${
              isSidebarOpen ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <FaGreaterThan />
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
