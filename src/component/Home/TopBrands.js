import React from "react";
import BrandData from "../../ChairData.json";
import { BrandCard } from "./BrandCard";

export const TopBrands = () => {
  return (
    <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8 text-cente">
      <h1 className="font-bold text-4xl py-4">Top Brands</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {BrandData.map((data) => (
          <a href="">
            <BrandCard brand={data} key={data.name} />
          </a>
        ))}
      </div>
    </div>
  );
};
