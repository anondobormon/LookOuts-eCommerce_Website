import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import React from "react";

export const SingleProductCart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="overflow-hidden">
        <img
          className="w-full bg-gray-100"
          src="https://i.ibb.co/PzLtQm0/p-17-removebg-preview.png"
          alt=""
        />
      </div>

      <div className="col-span-2">
        <div className="px-2 mb-4">
          <h1 className="text-2xl font-bold py-4">Name of the product</h1>
          <h1 className="font-bold text-2xl">$ 50</h1>
          <p className="text-gray-500 text-xl py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse
            soluta qui ducimus dolores perferendis alias minus odit. Expedita,
            dicta.
          </p>
        </div>
        <select
          name=""
          className="border-2 border-black w-52 font-bold py-2"
          id=""
        >
          <option value="XL">XL</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XXL">XXL</option>
          <option value="3XL">3XL</option>
        </select>
        <h1 className="pt-8 text-xl font-semibold">Select Color</h1>
        <div className="py-4">
          <button className="w-10 h-10 mr-4 rounded bg-red-400 focus:bg-red-600 focus:ring-2 focus:ring-yellow-500"></button>
          <button className="w-10 h-10 mr-4 rounded bg-blue-400 focus:bg-blue-600 focus:ring-2 focus:ring-yellow-500"></button>
          <button className="w-10 h-10 mr-4 rounded bg-gray-400 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-500"></button>
          <button className="w-10 h-10 mr-4 rounded bg-green-400 focus:bg-green-600 focus:ring-2 focus:ring-yellow-500"></button>
        </div>

        <div className="flex my-2 items-center">
          <button className="border-2 p-1 rounded-md border-black focus:text-red-600">
            <PlusIcon className="w-6 h-6 " />
          </button>
          <input
            type="number"
            name="order"
            id="order"
            className=" font-bold text-center py-1 w-52 border-2 border-black mx-4"
            placeholder="0"
            value="1"
          />
          <button className="border-2 p-1 rounded-md border-black focus:text-red-600">
            <MinusIcon className="w-6 h-6 " />
          </button>
        </div>
        <button className="px-8 my-4 focus:bg-gray-600 md:my-8 bg-black py-2 text-white font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
