import { XCircleIcon } from "@heroicons/react/solid";
import React from "react";

export const CartTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 my-4 border gap-4 p-4">
      <div className="md:col-span-3 flex items-center">
        <input
          className="mr-2 w-6 h-6 sm:mr-4 md:mr-8"
          type="checkbox"
          name="added"
          id="added"
        />
        <img
          src="https://i.ibb.co/s1tgVGH/880-removebg-preview.png"
          alt=""
          className="w-32 h-32 mr-1 sm:mr-1 md:mr-2 rounded-md bg-gray-200"
        />
        <p className="text-xl md:mx-4">Lorem, ipsum dolor.</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-2xl font-bold">$ 456</p>
      </div>

      <div className="flex items-center justify-center">
        <button className="w-10 h-10 border-2 rounded-xl text-2xl text-black">
          -
        </button>
        <span className="px-4">2</span>
        <button className="w-10 h-10 border-2 rounded-xl text-2xl text-black">
          +
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button className="w-10 h-10">
          <XCircleIcon className="w-full hover:text-red-600" />
        </button>
      </div>
    </div>
  );
};
