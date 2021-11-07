import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/Light.png";

export const LightCollection = () => {
  return (
    <div className="custom-background light-bg ">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-cente">
        <div className="grid grid-cols-1 sm:grid-cols-2 gpa-4">
          <div className="py-10">
            <h1 className="text-4xl font-bold">
              Light Collection <span className="text-red-500">50% OFF</span>
              <div className="h-1 w-20 sm:my-4 my-2 block bg-yellow-500"></div>
            </h1>
            <p className="my-8 md:my-12 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              autem, accusantium dignissimos vero asperiores quisquam in sequi
              reprehenderit unde doloribus.
            </p>
            <div className=" flex text-5xl font-extrabold justify-between items-center">
              <div className="w-24 text-center">
                <h1 className="text-6xl font-bold">12</h1>
                <p className="text-2xl  font-bold">Days</p>
              </div>
              :
              <div className="w-24 text-center">
                <h1 className="text-6xl font-bold">08</h1>
                <p className="text-2xl font-bold">Hour</p>
              </div>
              :
              <div className="w-24 text-center">
                <h1 className="text-6xl font-bold">02</h1>
                <p className="text-2xl font-bold">Minute</p>
              </div>
              :
              <div className="w-24 text-center">
                <h1 className="text-6xl font-bold">45</h1>
                <p className="text-2xl font-bold">Second</p>
              </div>
            </div>
            <button className="px-8 py-2 bg-black  text-white mt-8 md:mt-16">
              <Link to="/products" className="flex items-center">
                Buy Now <ArrowRightIcon className="w-4 ml-2" />
              </Link>
            </button>
          </div>
          <img className="" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
