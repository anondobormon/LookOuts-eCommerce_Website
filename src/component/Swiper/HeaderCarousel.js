import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Sofa1 from "../../images/Sofa1.png";
import "./Swiper.css";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export const HeaderCarousel = () => {
  return (
    <>
      <Swiper
        style={{ background: ` url(${Sofa1});` }}
        className="mySwiper carousel-bg custom-background"
      >
        <SwiperSlide className="">
          <div className="">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-18 lg:px-8 md:flex sm:items-center lg:justify-between">
              <div className="sm:w-2/5">
                <h5 className="md:text-base py-4 font-bold text-yellow-600 sm:text-3xl">
                  <span className="block">CHAIR</span>
                  <span className="block">COLLECTION</span>
                  <span className="block">2021</span>
                </h5>

                <h2 className="tracking-tight">
                  <span className="block text-6xl font-semibold">
                    Welcome To
                  </span>
                  <span className="block text-6xl font-semibold">
                    Look
                    <span className="text-red-500">Out's</span> Shop
                  </span>
                  <span className="block py-5 lg:py-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet, <br /> veniam nulla voluptate reiciendis officia
                    corrupti?
                  </span>
                </h2>
                <a
                  href=""
                  className="px-5 my-4 py-2 inline-flex items-center justify-center text-base bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Shop Now
                  <svg
                    className="w-6 h-6 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              <div className="sm:w-3/5">
                <img src={Sofa1} alt="" className="w-auto" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};
