import React from "react";

export const ServiceCard = ({ img, service }) => {
  return (
    <div className="border-2 rounded-md text-center py-4 px-4">
      <img className="w-36 m-auto" src={img} alt="" />
      <p className="font-semibold py-2 text-xl">{service}</p>
      <p className="my-2 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in!
      </p>
    </div>
  );
};
