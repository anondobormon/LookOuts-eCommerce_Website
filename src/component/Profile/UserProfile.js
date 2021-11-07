import {
  BellIcon,
  ChartSquareBarIcon,
  HomeIcon,
  InformationCircleIcon,
  LogoutIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import React, { createContext, useState } from "react";
import { DashboardTemplate } from "../Dashboard/DashboardTemplate";

export const MenuContext = createContext();

export const UserProfile = () => {
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
    <MenuContext.Provider value={[menuText, setMenuText]}>
      <DashboardTemplate menuBar={menuBar} />
    </MenuContext.Provider>
  );
};
