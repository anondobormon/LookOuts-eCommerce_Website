import React, { useContext, useState } from "react";
import { SideMenu } from "../Dashboard/SideMenu";
import { Notification } from "../Notification/Notification";
import { AllOrder } from "../OrderList/AllOrder";
import { AdminDashboard } from "./AdminDashboard";
import { AdminContext } from "./AdminProfile";

export const AdminTemplate = ({ menuBar }) => {
  const [menuText, setMenuText] = useContext(AdminContext);
  const [btnBg, setBtnBg] = useState();
  console.log(menuText);

  const clickedHandler = (menu, bg) => {
    setBtnBg(bg);
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
          {menuText == "Dashboard" && <AdminDashboard />}
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
