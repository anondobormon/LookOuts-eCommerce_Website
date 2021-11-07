import {
  BellIcon,
  ChartSquareBarIcon,
  HomeIcon,
  InformationCircleIcon,
  LogoutIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import React, { createContext, useState } from "react";
import { AdminTemplate } from "./AdminTemplate";

export const AdminContext = createContext();

export const AdminProfile = () => {
  const [menuText, setMenuText] = useState("Dashboard");

  const menuBar = [
    {
      menu: "Dashboard",
      icon: <HomeIcon className="w-6 h-6 sm:mx-2" />,
    },
    {
      menu: "Notification",
      icon: <BellIcon className="w-6 h-6 sm:mx-2" />,
    },
    {
      menu: "Order",
      icon: <ShoppingCartIcon className="w-6 h-6 sm:mx-2" />,
    },
    {
      menu: "Blogs",
      icon: <ChartSquareBarIcon className="w-6 h-6 sm:mx-2" />,
    },
    {
      menu: "Help",
      icon: <InformationCircleIcon className="w-6 h-6 sm:mx-2" />,
    },
    {
      menu: "Logout",
      icon: <LogoutIcon className="w-6 h-6 sm:mx-2" />,
    },
  ];
  return (
    <AdminContext.Provider value={[menuText, setMenuText]}>
      <AdminTemplate menuBar={menuBar} />
    </AdminContext.Provider>
  );
};
