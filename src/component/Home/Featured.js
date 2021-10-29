import React from "react";
import FakeData from "../../ChairData.json";

export const Featured = () => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
      <h1 className="text-3xl my-4 text-left font-bold">FEATURED PRODUCT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-full bg-gray-100 m-auto w-full ">
          <div className="rounded-md p-4">
            <h6 className="text-xs w-10 mb-4 p-0.5 text-white bg-green-400 rounded-md">
              50%
            </h6>
            <div className="flex align-center justify-center w-full h-full md:py-8 mb-2">
              <img className="h-96" src={FakeData[1].imageSrc} alt="" />
            </div>
            <h6 className="flex justify-between">
              <span className="font-semibold">Nike Shoes</span>
              <span className="text-xs">$20</span>
            </h6>
            <h6 className="flex justify-between">
              <span className="text-xs">Rolex Power House</span>
              <span className="font-bold">$36.45</span>
            </h6>
          </div>
        </div>

        <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 h-full m-auto w-full">
          <div className="h-full">
            <div className="border h-72 bg-gray-100 m-auto w-full ">
              <div className="rounded-md p-4">
                <h6 className="text-xs w-10 mb-4 p-0.5 text-white bg-green-400 rounded-md">
                  50%
                </h6>
                <div className="flex align-center justify-center w-full h-full md:py-2 mb-2">
                  <img className="h-36" src={FakeData[2].imageSrc} alt="" />
                </div>
                <h6 className="flex justify-between">
                  <span className="font-semibold">Nike Shoes</span>
                  <span className="text-xs">$20</span>
                </h6>
                <h6 className="flex justify-between">
                  <span className="text-xs">Rolex Power House</span>
                  <span className="font-bold">$36.45</span>
                </h6>
              </div>
            </div>
            <div className="border mt-4 h-72 bg-gray-100 m-auto w-full ">
              <div className="rounded-md p-4">
                <h6 className="text-xs w-10 mb-4 p-0.5 text-white bg-green-400 rounded-md">
                  50%
                </h6>
                <div className="flex align-center justify-center w-full h-full md:py-2 mb-2">
                  <img className="h-36" src={FakeData[5].imageSrc} alt="" />
                </div>
                <h6 className="flex justify-between">
                  <span className="font-semibold">Nike Shoes</span>
                  <span className="text-xs">$20</span>
                </h6>
                <h6 className="flex justify-between">
                  <span className="text-xs">Rolex Power House</span>
                  <span className="font-bold">$36.45</span>
                </h6>
              </div>
            </div>
          </div>

          <div className="border h-full bg-gray-100 m-auto w-full ">
            <div className="rounded-md p-4">
              <h6 className="text-xs w-10 mb-4 p-0.5 text-white bg-green-400 rounded-md">
                50%
              </h6>
              <div className="flex align-center justify-center w-full h-full md:py-2 mb-2">
                <img className="" src={FakeData[3].imageSrc} alt="" />
              </div>
              <h6 className="flex justify-between">
                <span className="font-semibold">Nike Shoes</span>
                <span className="text-xs">$20</span>
              </h6>
              <h6 className="flex justify-between">
                <span className="text-xs">Rolex Power House</span>
                <span className="font-bold">$36.45</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
