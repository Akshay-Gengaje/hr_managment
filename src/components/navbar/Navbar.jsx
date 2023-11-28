import { useLocation } from "react-router-dom";
const Navbar = ({ isOpen, children }) => {
  // useLocation used for get current path in future we can use it for navigate
  const location = useLocation();
  return (
    <>
      <header
        className={`bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow z-0 relative text-white text-xl font-semibold ${
          isOpen ? "pl-64" : "pl-16"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {location.pathname}
        </div>
      </header>

      {/* Main Area Where content is displayed  */}
      <main
        className={`${
          isOpen ? "ml-64 pl-10" : "ml-10 pl-10"
        } flex-1 overflow-x-hidden overflow-y-auto bg-gray-200`}
      >
        {children}
      </main>
    </>
  );
};

export default Navbar;
