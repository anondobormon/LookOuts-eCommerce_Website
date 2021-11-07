import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import Img from "../../images/Woman.png";
import Img1 from "../../images/Woman1.png";

export const DiscountBanner = () => {
  return (
    <div
      style={{ background: "#40CFCF", minHeight: "60vh" }}
      className="flex justify-between items-center flex-wrap sm:my-6 md:my-12"
    >
      <Fade left>
        <img src={Img} alt="" />
      </Fade>
      <Zoom>
        <div className="text-center m-auto py-16 w-96 h-96">
          <h4 className="text-lg font-semibold">WINTER CHALLENGE</h4>
          <h4 className="text-5xl my-3 font-bold">GET 50% OFF</h4>
          <h4 className="my-4 text-base">
            Use this code to receive 50% discount off all Product
          </h4>
          <Link
            to="/product"
            className="mt-8 bg-black px-6 py-3 text-white text-md font-bold "
          >
            Go to Collection
          </Link>
        </div>
      </Zoom>
      <Fade right>
        <img className="hidden lg:block" src={Img1} alt="" />
      </Fade>
    </div>
  );
};
