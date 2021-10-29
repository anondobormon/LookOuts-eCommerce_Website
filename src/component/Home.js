import React from "react";
import { Body } from "./Home/Body";
import { Nav } from "./Home/Nav";
// import { About } from "./OtherComponent/About";

export const Home = () => {
  return (
    <div>
      <Nav />
      <Body />
      {/* <About /> */}
    </div>
  );
};
