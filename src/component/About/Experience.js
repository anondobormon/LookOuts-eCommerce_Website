import React from "react";

export const Experience = () => {
  return (
    <div className="bg-gray-100 py-4 md:py-10">
      <div className="max-w-screen-2xl m-auto gap-8 px-4 grid grid-cols-1 md:grid-cols-2 py-4 md:py-10">
        <div className="">
          <p className="text-3xl font-semibold mt-3">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <p className="text-base text-gray-500  mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            tempora corporis itaque amet? A cum quis aspernatur fuga odio
            consequatur!
          </p>
          <p className="text-base text-gray-500 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            tempora corporis itaque amet? A cum quis aspernatur fuga odio
            consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quibusdam, enim, cum sit eum a incidunt amet explicabo quas
            totam impedit ipsam laudantium reiciendis iure culpa neque obcaecati
            error dicta! Quam!
          </p>
        </div>
        <div className="py-6">
          <div className="w-full opacity-70 my-4 flex items-center justify-between h-10 bg-yellow-400 rounded-md text-right overflow-hidden font-bold">
            <p className="h-full text-white w-32 flex items-center px-8 bg-yellow-600">
              UI/UX
            </p>
            <p className="  h-full flex items-center text-right pl-12 pr-1 bg-gray-200">
              80%
            </p>
          </div>
          <div className="w-full my-4 flex opacity-70 items-center justify-between h-10 bg-yellow-400 rounded-md text-right overflow-hidden font-bold">
            <p className="text-white w-32 h-full flex items-center px-8 bg-yellow-600">
              BACKEND
            </p>
            <p className="h-full flex items-center text-right pl-40 pr-1 bg-gray-200">
              60%
            </p>
          </div>
          <div className="w-full my-4 flex items-center  opacity-70 justify-between h-10 bg-yellow-400 rounded-md text-right overflow-hidden font-bold">
            <p className="text-white w-32 h-full flex items-center px-8 bg-yellow-600">
              FRONTEND
            </p>
            <p className="h-full flex items-center text-right pl-20 pr-1 bg-gray-200">
              70%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
