import React from "react";
import { Footer } from "../Footer/Footer";
import { NewsLatter } from "../Newsletter/NewsLatter";
import { CategorySlider } from "../Swiper/CategorySlider";
import { SwiperSlider } from "../Swiper/SwiperSlider";
import { Carousel } from "./Carousel";
import { DiscountBanner } from "./DiscountBanner";
import { LightCollection } from "./LightCollection";
import { Main } from "./Main";
import { OnSellingProduct } from "./OnSellingProduct";
import { Product } from "./Product";
import { Testimonial } from "./Testimonial/Testimonial";
import { TopBrands } from "./TopBrands";

export const Body = () => {
  return (
    <div>
      <Carousel />
      <CategorySlider />
      <Main />
      <SwiperSlider />
      <DiscountBanner />
      <Product />
      <OnSellingProduct />
      <TopBrands />
      <LightCollection />
      <Testimonial />
      <NewsLatter />
      <Footer />
    </div>
  );
};
