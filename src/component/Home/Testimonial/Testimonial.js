import { StarIcon } from "@heroicons/react/solid";
import React from "react";
const testimonial = [0, 1, 2];

export const Testimonial = () => {
  return (
    <div className="max-w-2xl mx-auto py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-cente">
      <h1 className="text-4xl py-4 font-bold">
        Testimonial
        <span className="w-16 mt-2 h-1 bg-gray-400 block"></span>
      </h1>
      <div className="grid md:grid-cols-3  gap-4">
        {testimonial.map((d) => (
          <div className=" bg-white rounded-md  drop-shadow-xl border p-6">
            <div className="w-24 h-24 rounded-full border-gray-200 hover:bg-gray-200 drop-shadow-xl border-4 overflow-hidden">
              <img src="https://i.ibb.co/6FwRgdL/img.jpg" alt="" />
            </div>
            <p1 className=" text-xl font-bold">James Jason</p1>
            <div className="flex">
              <StarIcon className="w-5 mt-2 mr-0 text-yellow-400" />
              <StarIcon className="w-5 mt-2 mr-0 text-yellow-400" />
              <StarIcon className="w-5 mt-2 mr-0 text-yellow-400" />
              <StarIcon className="w-5 mt-2 mr-0 text-yellow-400" />
              <StarIcon className="w-5 mt-2 mr-0 text-gray-200" />
            </div>
            <img
              src="https://i.ibb.co/rFnybTj/coatation.png"
              alt=""
              className="w-8 ml-1 mt-4"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              aliquam dignissimos recusandae ipsa non corrupti quas sequi iste
              ut laboriosam minima hic excepturi reiciendis, consequuntur
              dolores. Magni fugit libero, non molestias consequuntur, fugiat
              officia quam nemo saepe eum modi blanditiis. Nobis aut suscipit id
              voluptatum totam, fuga quidem labore ipsam.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
