import React from "react";

export const OrderSummery = () => {
  return (
    <div>
      <div className="p-8">
        <div className="flex items-center my-4 justify-between">
          <h1 className="text-md font-bold">Product</h1>
          <h1 className="text-md font-bold">Total</h1>
        </div>
        <hr />
        <div>
          <div className="flex items-center my-4 justify-between">
            <h1 className="text-md">Product Name</h1>
            <h1 className="text-md">$200</h1>
          </div>
          <div className="flex items-center my-4 justify-between">
            <h1 className="text-md">Product Nme</h1>
            <h1 className="text-md">$456</h1>
          </div>
          <hr />
          <div className="flex items-center my-4 justify-between">
            <h1 className="text-md font-bold">Shipping</h1>
            <h1 className="text-md">Free Shipping</h1>
          </div>
        </div>
        <hr />
        <div className="flex items-center my-4 justify-between">
          <h1 className="text-md font-extrabold">Total</h1>
          <h1 className="text-md font-extrabold">$ 1254</h1>
        </div>
        <div className="flex my-3 items-center">
          <input type="checkbox" name="back" id="bank" className="mr-6" />
          <p className="text-md">Direct Bank Transfer</p>
        </div>
        <div className="flex my-3 items-center ">
          <input type="checkbox" name="back" id="bank" className="mr-6" />
          <p className="text-md">Check Payment</p>
        </div>
        <div className="flex my-3 items-center ">
          <input type="checkbox" name="back" id="bank" className="mr-6" />
          <p className="text-md">Cash on Delivery</p>
        </div>
      </div>
    </div>
  );
};
