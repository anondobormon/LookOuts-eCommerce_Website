import React from "react";
import { MarketOverview } from "./MarketOverview";
import { SummeryChartRow } from "./SummeryChartRow";

export const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome!</h1>

      <SummeryChartRow />
      <MarketOverview />
      {/* <OverviewChart /> */}
    </div>
  );
};
