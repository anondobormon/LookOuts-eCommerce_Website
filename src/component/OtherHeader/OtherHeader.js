import React from "react";

export const OtherHeader = ({ currentPage, url }) => {
  return (
    <div className="custom-background other-bg">
      <div className="py-10 lg:py-20 text-center">
        <div className="text-xl text-center text-white font-semibold">
          <a href="/">Home</a> / <a href={url}>{currentPage}</a>
        </div>
      </div>
    </div>
  );
};
