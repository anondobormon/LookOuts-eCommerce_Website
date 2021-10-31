import React from "react";

export const CheckoutForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        id="name"
        name="name"
        className="border-2 my-3 border-gray-400 p-2 w-full"
        placeholder="Name"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        className="border-2 my-3 border-gray-400 p-2 w-full"
        placeholder="Email"
        required
      />
      <div className="col-span-2">
        <input
          type="text"
          id="address"
          name="address"
          className="border-2 my-3 border-gray-400 p-2 w-full"
          placeholder="Address"
          required
        />
      </div>
      <input
        type="number"
        id="mobile"
        name="mobile"
        className="border-2 my-3 border-gray-400 p-2 w-full"
        placeholder="Email"
        required
      />
      <input
        type="number"
        id="mobile-optional"
        name="mobile-optional"
        className="border-2 my-3 border-gray-400 p-2 w-full"
        placeholder="Mobile Optional"
        required
      />
      <input
        type="text"
        id="city"
        name="city"
        className="border-2 my-3 border-gray-400 p-2 w-full"
        placeholder="City"
        required
      />
      <input
        type="number"
        id="postcode"
        name="postcode"
        className="border-2 my-3 border-gray-400 p-2 w-full"
        placeholder="Postcode"
        required
      />
      <div className="col-span-2">
        <input className="mr-6" type="checkbox" name="save" id="save" />
        <span>Save this information fot next time!</span>
      </div>
      <textarea
        name="notes"
        id="notes"
        className="border-2 my-3 border-gray-400 p-4 col-span-2 w-full"
        placeholder="Notes about your order e.g. special notes fo delivery"
      ></textarea>
      <button
        type="submit"
        className="w-36 py-3 font-semibold text-white bg-black"
      >
        Place Order
      </button>
    </div>
  );
};
