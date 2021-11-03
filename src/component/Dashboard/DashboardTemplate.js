import {
  BellIcon,
  ChartSquareBarIcon,
  DeviceMobileIcon,
  HomeIcon,
  InformationCircleIcon,
  LocationMarkerIcon,
  LogoutIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import React from "react";
import { DashboardNav } from "./DashboardNav";
import { SideMenu } from "./SideMenu";

export const DashboardTemplate = ({ DashboardBody }) => {
  function clickedHandler(e) {
    console.log(e);
  }

  return (
    <div>
      <DashboardNav />
      <div className="grid grid-cols-12 p-1 sm:p-2 gap-4 ">
        {/* Sidebar  */}
        <div className="border-r-2 col-span-2 mt-8 h-screen custom-shadow md:pr-4">
          <p className="text-md font-semibold px-2 py-4">Menu</p>
          <SideMenu
            clickedHandler={clickedHandler}
            menu={"Dashboard"}
            icon={<HomeIcon className="w-6 h-6 sm:mx-2" />}
          />
          <SideMenu
            menu={"Notification"}
            icon={<BellIcon className="w-6 h-6 sm:mx-2" />}
          />
          <SideMenu
            menu={"Order"}
            icon={<ShoppingCartIcon className="w-6 h-6 mx-2" />}
          />
          <SideMenu
            menu={"My Cart"}
            icon={<ShoppingCartIcon className="w-6 h-6 mx-2" />}
          />
          <SideMenu
            menu={"Blogs"}
            icon={<ChartSquareBarIcon className="w-6 h-6 mx-2" />}
          />
          <SideMenu
            menu={"Contact"}
            icon={<DeviceMobileIcon className="w-6 h-6 mx-2" />}
          />
          <SideMenu
            menu={"Address"}
            icon={<LocationMarkerIcon className="w-6 h-6 mx-2" />}
          />
          <SideMenu
            menu={"Help Line"}
            icon={<InformationCircleIcon className="w-6 h-6 mx-2" />}
          />
          <SideMenu
            menu={"Logout"}
            icon={<LogoutIcon className="w-6 h-6 mx-2" />}
          />
        </div>
        {/* Main body */}
        <div className="col-span-10 border md:ml-8 mt-8 md:p-4">
          {DashboardBody}
        </div>
      </div>
    </div>
  );
};
