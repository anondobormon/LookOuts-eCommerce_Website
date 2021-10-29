import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import FakeData from "../../FakeData.json";
import { SliderComponent } from "./SliderComponent";
import "./Swiper.css";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export const SwiperSlider = () => {
  console.log(FakeData);
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {FakeData.map((data) => (
          <SwiperSlide>
            <SliderComponent data={data} />
            {/* <p>ahat is i</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
