import React from "react";
import { Link } from "react-router-dom";
import Sofa1 from "../../images/Sofa1.png";

export const Carousel = () => {
  return (
    <div>
      <div className="carousel-bg custom-background">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-18 lg:px-8 md:flex sm:items-center lg:justify-between">
          <div className="sm:w-2/5">
            <h5 className="md:text-base py-4 font-bold text-yellow-600 sm:text-3xl">
              <span className="block">CHAIR</span>
              <span className="block">COLLECTION</span>
              <span className="block">2021</span>
            </h5>

            <h2 className="tracking-tight">
              <span className="block text-6xl font-semibold">Welcome To</span>
              <span className="block text-6xl font-semibold">
                Look
                <span className="text-red-500">Out's</span> Shop
              </span>
              <span className="block py-5 lg:py-7">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet, <br /> veniam nulla voluptate reiciendis officia
                corrupti?
              </span>
            </h2>
            <Link
              to="/product"
              className="px-5 my-4 py-2 inline-flex items-center justify-center text-base bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Shop Now
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="sm:w-3/5">
            <img src={Sofa1} alt="" className="w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
