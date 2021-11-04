import React from "react";
import { CustomerList } from "./CustomerList";
import { DashboardChat } from "./DashboardChat";
import { SellingProduct } from "./SellingProduct";

export const ShortList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-9 gap-4 my-4">
      <div className="rounded border col-span-2 p-2">
        <CustomerList />
      </div>
      <div className="rounded border h-96 overflow-hidden col-span-4 p-2">
        <SellingProduct />
      </div>
      <div className="rounded border overscroll-auto col-span-3 p-2">
        <DashboardChat />
      </div>
    </div>
  );
};
