import React from "react";
// import { SwiperSlide } from "swiper/react";

export const SliderComponent = ({ data }) => {
  console.log(data.ImageSrc2);
  return (
    // <SwiperSlide>
    <div className="border h-full bg-gray-100 m-auto w-full ">
      <div className="rounded-md p-4">
        <h6 className="text-xs w-10 mb-4 p-0.5 text-white bg-green-400 rounded-md">
          50%
        </h6>
        <div className="flex align-center justify-center w-full h-full md:py-8 mb-2">
          <img src={data.imageSrc} alt="" />
        </div>
        <h6 className="flex justify-between">
          <span className="font-semibold">Nike Shoes</span>
          <span className="text-xs">$20</span>
        </h6>
        <h6 className="flex justify-between">
          <span className="text-xs">Rolex Power House</span>
          <span className="font-bold">$36.45</span>
        </h6>
      </div>
    </div>
    // </SwiperSlide>
  );
};
