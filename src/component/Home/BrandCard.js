import React from "react";

export const BrandCard = ({ brand }) => {
  return (
    <div className="h-44 w-44 border rounded-md">
      <img src={brand.brand} alt="" />
    </div>
  );
};
