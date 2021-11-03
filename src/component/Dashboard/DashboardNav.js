import { BellIcon, CogIcon } from "@heroicons/react/outline";
import React from "react";
import Logo from "../../images/Logo1.png";

export const DashboardNav = () => {
  return (
    <div className="grid md:grid-cols-2 border gap-4 py-2 md:p-4">
      <img className="h-8 w-64" src={Logo} alt="" />
      <div className="flex items-center justify-center sm:justify-end p-2">
        <BellIcon className="w-8 h-8 md:mx-2" />
        <div className="mx-4">
          <h1 className="text-md font-bold">John Smith</h1>
          <p className="text-base">User Profile</p>
        </div>
        <img
          src="https://i.ibb.co/60m08Mf/1-4.png"
          alt=""
          className="rounded-full w-12 h-12 border-2"
        />
        <CogIcon className="w-8 mx-4 h-8" />
      </div>
    </div>
  );
};
