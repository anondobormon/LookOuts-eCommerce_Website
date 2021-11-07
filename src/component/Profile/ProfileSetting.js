import React from "react";

export const ProfileSetting = () => {
  return (
    <div className=" p-4 col-span-2">
      <h1 className="text-xl font-bold">Profile Settings</h1>
      <div className="py-4 md:py-4">
        <form action="">
          <div className="grid grid-cols-1 my-2 md:my-4 md:grid-cols-2 gap-4">
            <div>
              <label className="my-4 font-bold" htmlFor="username">
                User Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                className="w-full py-2 my-2 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="my-4 font-bold" htmlFor="username">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full py-2 my-2 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>
          <label htmlFor="address" className="py-2 font-bold">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            placeholder="Address"
            className="w-full my-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>

          <div>
            <label className="block my-4 font-bold">Cover photo</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-8 my-4 rounded py-2 bg-indigo-400 focus:bg-indigo-700 font-semibold text-white"
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};
