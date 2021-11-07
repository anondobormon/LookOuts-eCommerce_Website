import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { Featured } from "./Featured";

export const Main = () => {
  return (
    <>
      <div className="custom-background main-bg">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-18 lg:px-8 grid md:grid-cols-2 sm:grid-cols-1 gap-4 text-center">
          <Fade left className="">
            <img
              src="https://i.ibb.co/s1tgVGH/880-removebg-preview.png"
              alt=""
            />
          </Fade>
          <div className="text-center md:text-left sm:pb-5 md:py-20">
            <Fade right>
              <h5 className="text-gray-400 font-bold text-xs">
                FEATURED PRODUCT
              </h5>
              <h3 className="text-2xl my-3 font-semibold">Nancy Chair</h3>
              <p className="my-6 text-sm font-semibold text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis quibusdam <br /> consequuntur qui neque molestiae
                delectus numquam eius quod <br /> cupiditate recusandae?
              </p>
              <Link
                to="/single-product"
                className="animate-bounce m-auto md:m-0 flex justify-center align-items-center w-32 px-5 py-1 text-gray-800 font-medium text-sm border-2 border-gray-400 hover:text-white hover:bg-indigo-600 delay-300 duration-300 ease-in-out"
              >
                <span> Only 10$</span>
                <ArrowRightIcon className="w-4 ml-1" />
              </Link>
            </Fade>
          </div>
        </div>
      </div>
      <Featured />
      <div className="custom-background main-bg2">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-18 lg:px-8 grid md:grid-cols-2 sm:grid-cols-1 gap-4 text-center">
          <div className="text-center md:text-right sm:py-5 md:py-20">
            <Fade left>
              <h5 className="text-gray-400 font-bold text-xs">
                FEATURED PRODUCT
              </h5>
              <h3 className="text-2xl my-3 font-semibold">Nancy Chair</h3>
              <p className="my-6 text-sm font-semibold text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis quibusdam <br /> consequuntur qui neque molestiae
                delectus numquam eius quod <br /> cupiditate recusandae?
              </p>
              <Link
                to="/single-product"
                className="animate-bounce m-auto flex justify-self-end align-items-center md:float-right w-32 px-5 py-1 text-gray-800 font-medium text-sm border-2 border-gray-400 hover:text-white hover:bg-indigo-600 delay-300 duration-300 ease-in-out"
              >
                <span> Only 10$</span>
                <ArrowRightIcon className="w-4 ml-1" />
              </Link>
            </Fade>
          </div>
          <Fade right>
            <img
              src="https://i.ibb.co/rGk4f5M/modern-plastic-kids-chair-mockup-left-view-removebg-preview.png"
              alt=""
            />
          </Fade>
        </div>
      </div>
    </>
  );
};
