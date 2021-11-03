import React from "react";

export const SideMenu = ({ menu, icon, clickedHandler }) => {
  return (
    <button
      onClick={clickedHandler}
      className="text-lg font-semibold flex my-4 px-2 w-full border-l-4 py-2 border-white focus:bg-black focus:text-white focus:border-yellow-600"
    >
      {icon} <span className="hidden md:block">{menu}</span>
    </button>
  );
};
