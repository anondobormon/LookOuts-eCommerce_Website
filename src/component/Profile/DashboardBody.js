import {
  CakeIcon,
  LocationMarkerIcon,
  MailIcon,
  PencilAltIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import React from "react";
import { ProfileSetting } from "./ProfileSetting";

export const DashboardBody = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">User Profile</h1>
      <div className="grid grid-cols-1 my-2 md:my-6 md:grid-cols-3 gap-4">
        <div>
          <div className="p-2 md:p-4 border custom-shadow">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Profile</h1>
              <span className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center">
                <PencilAltIcon className="w-6 h-6" />
              </span>
            </div>
            <img
              src="https://i.ibb.co/60m08Mf/1-4.png"
              alt=""
              className="w-32 h-32 m-auto my-4 border-2 border-gray-200 rounded-md"
            />
            <p className="text-base text-center">User ID: PXL-101121</p>
            <p className="text-xl font-semibold text-center">John Smith</p>
            <p className="text-base text-center">Dhaka Bangladesh</p>
            <p className="text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              nihil labore totam, hic repudiandae dolor aliquam eaque voluptatum
              consectetur inventore.
            </p>
            <p className="flex items-center mt-8 font-semibold">
              <PhoneIcon className="w-4 h-4 mr-4" /> <span>012345678</span>
            </p>
            <p className="flex items-center font-semibold">
              <MailIcon className="w-4 h-4 mr-4" /> <span>abcde@gmail.com</span>
            </p>
            <p className="flex items-center font-semibold">
              <CakeIcon className="w-4 h-4 mr-4" /> <span>10-12-21</span>
            </p>
            <p className="flex items-center font-semibold">
              <LocationMarkerIcon className="w-4 h-4 mr-4" />{" "}
              <span>Full Address</span>
            </p>
          </div>
          <div className="p-2 md:p-4 border rounded my-4 custom-shadow">
            <h1 className="text-2xl font-bold">Payment Method</h1>
            <div className="flex items-center mt-6">
              <div className="w-12 h-8 flex items-center justify-between text-xs text-white mr-2 bg-gray-500 rounded-md px-3 font-bold">
                VISA
              </div>
              <h1 className="text-2xl  text-gray-400">Visa**********1438</h1>
            </div>
            <p className="text-md text-gray-500 mt-4">
              Next Billing Charged $ 344
            </p>
            <p className="text-md text-gray-500">Autopay on March 2022221</p>
            <button className="my-4 px-4 py-2 rounded bg-indigo-400 text-md text-white focus:bg-indigo-600">
              Add Payment Info
            </button>
          </div>
        </div>
        <ProfileSetting />
      </div>
    </div>
  );
};
