import { MailIcon } from "@heroicons/react/solid";
import React from "react";

export const NewsLatter = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8 text-cente">
        <div className="flex justify-between items-center">
          <div className="h-44">
            <h1 className="text-2xl font-bold">
              Get Expert Tips In Your Inbox
              <span className="w-16 h-1 bg-black mt-2 block "></span>
            </h1>
            <p className="text-xs my-4 text-gray-400">
              Subscribe to our newslatter and stay update!
            </p>
            <form action="" className="flex ">
              <div className="flex text-gray-400 focus-within:text-gray-600 items-center relative rounded-md h-10 bg-white shadow-sm">
                <MailIcon className="w-10  ml-2" />
                <input
                  type="email"
                  name="price"
                  id="price"
                  className="border-opacity-0 outline-none h-10 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter email"
                />
              </div>
              <button
                type="submit"
                className="px-6 mx-2 py-2 text-base bg-black text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
