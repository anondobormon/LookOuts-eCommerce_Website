import React from "react";
import OverviewChart from "./Charts/OverviewChart";

export const MarketOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border">
      <div className="md:col-span-2  rounded-md">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6 border">
          <div className="col-span-2">
            <h1 className="text-xl font-semibold mb-8">Market Overview</h1>
            <OverviewChart />
          </div>

          <div className="py-6">
            <div className="py-8">
              <div className="flex justify-between items-center py-2">
                <div className="rounded-full bg-gray-200 text-center flex items-center justify-center font-bold font-semibold p-2 w-8 h-8">
                  1
                </div>
                <h1 className="text-md">Mobile Phone</h1>
                <div className="w-16 h-6 rounded-full text-xs padding-1 flex items-center justify-center font-bold text-center bg-red-200">
                  35.45%
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="rounded-full bg-gray-200 text-center flex items-center justify-center font-bold font-semibold p-2 w-8 h-8">
                  1
                </div>
                <h1 className="text-md">Mobile Phone</h1>
                <div className="w-16 h-6 rounded-full text-xs padding-1 flex items-center justify-center font-bold text-center bg-red-200">
                  35.45%
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="rounded-full bg-gray-200 text-center flex items-center justify-center font-bold font-semibold p-2 w-8 h-8">
                  1
                </div>
                <h1 className="text-md">Mobile Phone</h1>
                <div className="w-16 h-6 rounded-full text-xs padding-1 flex items-center justify-center font-bold text-center bg-red-200">
                  35.45%
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="rounded-full bg-gray-200 text-center flex items-center justify-center font-bold font-semibold p-2 w-8 h-8">
                  1
                </div>
                <h1 className="text-md">Mobile Phone</h1>
                <div className="w-16 h-6 rounded-full text-xs padding-1 flex items-center justify-center font-bold text-center bg-red-200">
                  35.45%
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="rounded-full bg-gray-200 text-center flex items-center justify-center font-bold font-semibold p-2 w-8 h-8">
                  1
                </div>
                <h1 className="text-md">Mobile Phone</h1>
                <div className="w-16 h-6 rounded-full text-xs padding-1 flex items-center justify-center font-bold text-center bg-red-200">
                  35.45%
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="rounded-full bg-gray-200 text-center flex items-center justify-center font-bold font-semibold p-2 w-8 h-8">
                  1
                </div>
                <h1 className="text-md">Mobile Phone</h1>
                <div className="w-16 h-6 rounded-full text-xs padding-1 flex items-center justify-center font-bold text-center bg-red-200">
                  35.45%
                </div>
              </div>
            </div>
            <button className="w-full h-10 py-2 text-white bg-black">
              See All Balances
            </button>
          </div>
        </div>
      </div>
      <div className="border">what</div>
    </div>
  );
};
