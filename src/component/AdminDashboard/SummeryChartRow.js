import React from "react";
import SummeryChart from "./Charts/SummeryChart";

export const SummeryChartRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border">
      <div className="border rounded p-2 h-44 flex items-center justify-between">
        <div>
          <p className="text-md">Total Sales</p>
          <p className="text-xl font-bold">$ 542.5k</p>
        </div>
        <SummeryChart />
      </div>
      <div className="border rounded p-2 h-44 flex items-center justify-between">
        <div>
          <p className="text-md">Total Sales</p>
          <p className="text-xl font-bold">$ 542.5k</p>
        </div>
        <SummeryChart />
      </div>
      <div className="border rounded p-2 h-44 flex items-center justify-between">
        <div>
          <p className="text-md">Total Sales</p>
          <p className="text-xl font-bold">$ 542.5k</p>
        </div>
        <SummeryChart />
      </div>
      <div className="border rounded p-2 h-44 flex items-center justify-between">
        <div>
          <p className="text-md">Total Sales</p>
          <p className="text-xl font-bold">$ 542.5k</p>
        </div>
        <SummeryChart />
      </div>
    </div>
  );
};
