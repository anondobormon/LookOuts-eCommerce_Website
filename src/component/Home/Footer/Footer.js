import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import React from "react";
// import { LocationMarkerIcon } from "@heroicons/react/outline";

export const Footer = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-cente">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-2 ">
            <h1 className="font-bold text-xl mb-2"> Address:</h1>
            <p className="flex my-3">
              <LocationMarkerIcon className="w-6 mr-2" />
              Chittagong Bangladesh
            </p>
            <p className="flex my-3">
              <PhoneIcon className="w-6 mr-2" />
              01234546789
            </p>
            <div className="flex text-black">
              <MailIcon className="w-6 mr-2" /> abcd123456@gmail.com
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-xl mb-2">Help & Information</h1>
            <a href="">
              <p className="py-1">Help & Contact Us</p>
            </a>
            <a href="">
              <p className="py-1">Returns & Refunds</p>
            </a>
            <a href="">
              <p className="py-1">Online Stores</p>
            </a>
            <a href="">
              <p className="py-1">Terms & Conditions</p>
            </a>
          </div>
          <div className="">
            <h1 className="font-bold text-xl mb-2">About Us</h1>
            <a href="">
              <p className="py-1">About Us</p>
            </a>
            <a href="">
              <p className="py-1">What We Do</p>
            </a>
            <a href="">
              <p className="py-1">FAQ Page</p>
            </a>
            <a href="">
              <p className="py-1">Contact Us</p>
            </a>
          </div>
          <div className="">
            <h1 className="font-bold text-xl mb-2">Social Media</h1>
            <a href="">
              <p className="py-1">Facebook</p>
            </a>
            <a href="">
              <p className="py-1">Twitter</p>
            </a>
            <a href="">
              <p className="py-1">Instagram</p>
            </a>
            <a href="">
              <p className="py-1">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
