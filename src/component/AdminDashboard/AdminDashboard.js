import React from "react";
import { AllOrder } from "./AllOrder";
import { MarketOverview } from "./MarketOverview";
import { ShortList } from "./ShortList";

export const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome!</h1>

      {/* <SummeryChartRow /> */}
      <MarketOverview />
      <ShortList />
      <AllOrder />
      {/* <OverviewChart /> */}
    </div>
  );
};
