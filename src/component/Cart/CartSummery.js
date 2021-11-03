import React from "react";

export const CartSummery = () => {
  return (
    <div className=" my-4 p-4 border">
      <h1 className="text-xl pb-4 font-bold">Order Summery</h1>
      <hr />
      <div className="flex px-4 py-3 items-center justify-between">
        <h1 className="text-md font-bold">Total</h1>
        <h1 className="text-md font-bold">$ 550</h1>
      </div>
      <div className="flex px-4 py-3 items-center justify-between">
        <h1 className="text-md font-bold">Shipping Cost</h1>
        <h1 className="text-md font-bold"> $ 50</h1>
      </div>
      <div className="flex px-4 py-3 items-center justify-between">
        <h1 className="text-md font-bold">Vat & Tax</h1>
        <h1 className="text-md font-bold">$ 20</h1>
      </div>
      <hr />
      <div className="flex px-4 py-3 items-center justify-between">
        <h1 className="text-md font-bold">Grand Total</h1>
        <h1 className="text-md font-bold">$ 570</h1>
      </div>

      <button className="px-4 m-auto py-2 text-white text-md bg-black">
        Place Order
      </button>
    </div>
  );
};
