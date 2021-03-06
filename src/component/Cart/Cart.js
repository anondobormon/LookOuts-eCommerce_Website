import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Navbar/Nav";
import { NewsLatter } from "../Newsletter/NewsLatter";
import { OtherHeader } from "../OtherHeader/OtherHeader";
import { SuccessModal } from "../SucessfullModal/SuccessModal";
import { CartSummery } from "./CartSummery";
import { CartTable } from "./CartTable";

export const Cart = () => {
  const [order, setOrder] = useState();

  const [modal, setModal] = useState(false);
  const showModal1 = () => {
    setModal(true);
  };

  const cartData = JSON.parse(localStorage.getItem("order"));

  return (
    <div>
      <Nav />
      <OtherHeader currentPage={"Shopping Cart"} url={"cart"} />
      <div className="max-w-7xl m-auto gap-8 px-4 py-4 md:py-10">
        <h1 className="text-4xl font-bold py-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            {cartData.map((pd) => (
              <CartTable product={pd} key={pd.name} />
            ))}
          </div>
          <CartSummery showModal={showModal1} />
        </div>
      </div>
      {modal && <SuccessModal link={"/profile"} />}
      <NewsLatter />
      <Footer />
    </div>
  );
};
