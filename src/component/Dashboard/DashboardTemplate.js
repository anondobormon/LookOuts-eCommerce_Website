import React, { useContext } from "react";
import { Notification } from "../Notification/Notification";
import { AllOrder } from "../OrderList/AllOrder";
import { DashboardBody } from "../Profile/DashboardBody";
import { MenuContext } from "../Profile/UserProfile";
import { SideMenu } from "./SideMenu";

export const DashboardTemplate = ({ menuBar }) => {
  const [menuText, setMenuText] = useContext(MenuContext);
  console.log(menuText);

  const clickedHandler = (menu) => {
    setMenuText(menu);
  };

  return (
    <div>
      {/* <DashboardNav /> */}
      <div className="grid grid-cols-12 p-1 sm:p-2 gap-4 ">
        {/* Sidebar  */}
        <div className="border-r-2 col-span-2 mt-8 h-screen custom-shadow md:pr-4">
          <p className="text-md font-semibold px-2 py-4">Menu</p>
          {menuBar.map((mn) => (
            <SideMenu
              menu={mn.menu}
              icon={mn.icon}
              clickedHandler={clickedHandler}
            />
          ))}
        </div>
        {/* Main body */}
        <div className="col-span-10  md:ml-8 mt-8 md:p-4">
          {menuText == "Dashboard" && <DashboardBody />}
          {menuText == "Notification" && <Notification />}
          {menuText == "Order" && <AllOrder />}
          {menuText == "Blogs" && (
            <h1>This is blog section which is construction is ongoing</h1>
          )}
          {menuText == "Help" && (
            <h1>This is help section which is construction is ongoing</h1>
          )}
          {menuText == "Logout" && (
            <h1>This is logout section which is construction is ongoing</h1>
          )}
        </div>
      </div>
    </div>
  );
};
{
  /* <SideMenu
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
            menu={"Cart"}
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
            menu={"Help"}
            icon={<InformationCircleIcon className="w-6 h-6 mx-2" />}
          />
          <SideMenu
            menu={"Logout"}
            icon={<LogoutIcon className="w-6 h-6 mx-2" />}
          /> */
}
