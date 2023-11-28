// These routes are used for sidebar we can add more as per needed;

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
