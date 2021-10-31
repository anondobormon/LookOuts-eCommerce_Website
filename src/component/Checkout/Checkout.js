import React from "react";
import { Footer } from "../Home/Footer/Footer";
import { OtherHeader } from "../OtherHeader/OtherHeader";
import { CheckoutForm } from "./CheckoutForm";
import { OrderSummery } from "./OrderSummery";

export const Checkout = () => {
  return (
    <>
      <OtherHeader currentPage={"Checkout"} url={"url"} />
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl m-auto gap-8 px-4 py-4 md:py-10">
        <div className="col-span-2">
          <h1 className="text-2xl font-bold">Shipping Address</h1>
          <CheckoutForm />
        </div>
        <OrderSummery />
      </div>
      <Footer />
    </>
  );
};
