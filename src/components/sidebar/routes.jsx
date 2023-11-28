
import { FaUserAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
export const routes = [
  {
    path: "/admin",
    name: "Admin",
    icon: <MdAdminPanelSettings />,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: <FaUserAlt />,
  },
];
