import React from "react";

export const OtherHeader = ({ currentPage, url }) => {
  return (
    <div>
      <div className="py-10 lg:py-20 text-center bg-gray-200">
        <div className="text-xl text-center font-semibold">
          <a href="">Home</a> / <a href={url}>{currentPage}</a>
        </div>
      </div>
    </div>
  );
};
