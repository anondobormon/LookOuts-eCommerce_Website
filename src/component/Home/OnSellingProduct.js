import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";
import ChairData from "../../ChairData.json";
import img from "../../images/Woman.png";
import { Card } from "./Card.js";

export const OnSellingProduct = () => {
  const Data = ChairData.slice(0, 4);
  //   Data.map((pd) => console.log(pd));
  return (
    <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
      <h1 className="font-bold text-4xl py-4 text-left">On Seeling Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Bounce>
          <div className="bg-yellow-500 flex justify-between overflow-hidden h-80 rounded-md">
            <img className="hidden md:block" src={img} alt="" />
            <div className="w-72 text-center py-14 m-auto h-full ">
              <h4 className="font-bold text-md text-white">SALE OFFER</h4>
              <p className="w-44 py-3 m-auto text-5xl font-extrabold text-white border-white border-4">
                50%
              </p>
              <h6 className="text-white text-md font-bold">
                LIMITED TIME VALID
              </h6>
              <Link
                to="/products"
                className="text-white flex mx-20 my-4 text-xs text-bold"
              >
                SEE ALL PRODUCTS <ArrowRightIcon className="w-4 ml-1" />
              </Link>
            </div>
          </div>
        </Bounce>
        <Bounce>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-1 overflow-hidden h-full rounded-md ">
            {Data.map((product) => (
              <Card product={product} />
            ))}
          </div>
        </Bounce>
      </div>
    </div>
  );
};
