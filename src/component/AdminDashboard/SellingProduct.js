import React from "react";
import { Link } from "react-router-dom";
import FakeData from "../../FakeData";

export const SellingProduct = () => {
  return (
    <div className="overscroll-contain">
      <div className="flex items-center justify-between ">
        <h1 className="text-lg mb-4 font-semibold">Customer List</h1>
        <Link
          to="/users"
          className="text-xs mb-4 rounded px-2 py-1 font-bold bg-indigo-200 font-semibold"
        >
          See All
        </Link>
      </div>
      {FakeData.map((product) => (
        <div className="flex items-center my-4 justify-between">
          <div className="flex items-center w-64">
            <div className="rounded border w-16 h-16 overflow-hidden">
              <img src={product.imageSrc} alt="" />
            </div>
            <h1 className="text-lg font-semibold ml-4">
              {product.name}
              <span className="block text-base font-normal">$240.00</span>
            </h1>
          </div>
          <h1 className="text-lg font-semibold ml-4">
            Stock in hand
            <span className="block text-base font-normal">125k </span>
          </h1>
          <h1 className="text-lg font-semibold ml-4">
            Sales
            <span className="block text-base font-normal bg-yellow-200 px-4 rounded">
              200k
            </span>
          </h1>
        </div>
      ))}
    </div>
  );
};
