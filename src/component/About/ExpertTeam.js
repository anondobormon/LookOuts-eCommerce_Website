import React from "react";

export const ExpertTeam = ({ expert }) => {
  return (
    <a href="">
      <div className="bg-white">
        <img src={expert.expert} alt="" />
        <h1 className="text-center mt-2 font-semibold text-3xl">Alex Prince</h1>
        <h1 className="text-xl pb-4 text-gray-400 text-center font-bold">
          CEO
        </h1>
      </div>
    </a>
  );
};
