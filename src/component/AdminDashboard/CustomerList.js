import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const CustomerList = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg mb-4 font-semibold">Customer List</h1>
        <Link
          to="/users"
          className="text-xs mb-4 rounded px-2 py-1 font-bold bg-indigo-200 font-semibold"
        >
          See All
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-full border w-10 h-10 overflow-hidden">
            <img src="https://i.ibb.co/60m08Mf/1-4.png" alt="" />
          </div>
          <h1 className="text-sm font-bold ml-4">John Smith</h1>
        </div>
        <div className="px-4">
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-500 focus:ring-white">
                <span className="sr-only">Open user menu</span>

                <DotsVerticalIcon className="w-6 h-6" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={classNames(
                        active ? "bg-purple-50" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={classNames(
                        active ? "bg-purple-50" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
};
