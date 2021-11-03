import React from "react";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Navbar/Nav";
import { NewsLatter } from "../Newsletter/NewsLatter";
import { OtherHeader } from "../OtherHeader/OtherHeader";
// import { SuccessModal } from "../SucessfullModal/SuccessModal";
import { SingleProductCart } from "./SingleProductCart";
import { Specification } from "./Specification";

export const SingleProduct = () => {
  return (
    <div>
      <Nav />
      <OtherHeader currentPage={"Product"} url="product" />
      <div className="max-w-7xl m-auto gap-8 px-4 py-4 md:py-10">
        <SingleProductCart />
        <Specification />
      </div>
      {/* <SuccessModal /> */}

      <NewsLatter />
      <Footer />
    </div>
  );
};
