import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  console.log(product);
  return (
    <Link
      to="/single-product"
      className="flex h-36 border overflow-hidden items-center rounded"
    >
      <img src={product.imageSrc} alt="" className="w-36 h-full bg-gray-100" />
      <div className=" px-3 text-left">
        <h6 className="font-bold text-xl">{product.name}</h6>
        <h6 className="text-sm text-gray-500">Lorem ipsum dolor sit.</h6>
        <h6 className="text-lg font-bold">$10</h6>
      </div>
    </Link>
  );
};
