import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FakeData from "../../FakeData.json";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Navbar/Nav";
import { NewsLatter } from "../Newsletter/NewsLatter";
import { OtherHeader } from "../OtherHeader/OtherHeader";
import { SuccessModal } from "../SucessfullModal/SuccessModal";
import { SingleProductCart } from "./SingleProductCart";
import { Specification } from "./Specification";

export const SingleProduct = () => {
  const [modal, setModal] = useState(false);

  let { id } = useParams();
  let product = FakeData.find((pd) => pd.id == id);

  const showModal = () => {
    setModal(true);
  };
  return (
    <div>
      <Nav />
      <OtherHeader currentPage={"Product"} url="product" />
      <div className="max-w-7xl m-auto gap-8 px-4 py-4 md:py-10">
        <SingleProductCart showModal={showModal} product={product} />
        <Specification />
      </div>
      {modal && <SuccessModal link={"/cart"} />}

      <NewsLatter />
      <Footer />
    </div>
  );
};
