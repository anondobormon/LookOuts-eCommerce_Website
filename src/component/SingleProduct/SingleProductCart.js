import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export const SingleProductCart = ({ showModal, product }) => {
  const [orderList, setOrderList] = useState(1);
  let [size, setSize] = useState("XL");
  const [color, setColor] = useState("Gray");

  const increment = () => {
    setOrderList(orderList + 1);
  };
  const decrement = () => {
    if (orderList > 1) {
      setOrderList(orderList - 1);
    }
  };

  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  const sizeHandler = (e) => {
    setSize(e.target.value);
  };
  const handleSubmit = () => {
    let detailsData = {
      id: product.id,
      color: color,
      size: size,
      orderQuantity: orderList,
      name: product.name,
      image: product.imageSrc,
      price: product.price,
    };

    let storeData = localStorage.getItem("order");
    console.log(storeData);
    let dataStack = [];
    if (storeData === null) {
      dataStack.push(detailsData);
      localStorage.setItem("order", JSON.stringify(dataStack));
    } else {
      let dataStack = JSON.parse(localStorage.getItem("order"));
      dataStack.push(detailsData);
      localStorage.setItem("order", JSON.stringify(dataStack));
    }
    showModal();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="overflow-hidden">
        <img className="w-full bg-gray-100" src={product.imageSrc} alt="" />
      </div>

      <div className="col-span-2">
        <div className="px-2 mb-4">
          <h1 className="text-2xl font-bold py-4">{product.name}</h1>
          <h1 className="font-bold text-2xl">$ 50</h1>
          <p className="text-gray-500 text-xl py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse
            soluta qui ducimus dolores perferendis alias minus odit. Expedita,
            dicta.
          </p>
        </div>
        <select
          onChange={sizeHandler}
          name="Size"
          className="border w-52 rounded px-2 py-2"
          id=""
        >
          <option value="XL">XL</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XXL">XXL</option>
          <option value="3XL">3XL</option>
        </select>
        <h1 className="pt-8 text-xl font-semibold">Select Color</h1>
        <div className="py-4">
          <button
            onClick={colorHandler}
            type="text"
            name="Color"
            className="w-10 h-10 mr-4 rounded bg-red-400 focus:bg-red-600 focus:ring-2 focus:ring-yellow-500"
            value="Red"
          ></button>
          <button
            type="text"
            name="Color"
            onClick={colorHandler}
            className="w-10 h-10 mr-4 rounded bg-blue-400 focus:bg-blue-600 focus:ring-2 focus:ring-yellow-500"
            value="Blue"
          ></button>
          <button
            onClick={colorHandler}
            type="text"
            name="Color"
            className="w-10 h-10 mr-4 rounded bg-gray-400 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-500"
            value="gray"
          ></button>
          <button
            onClick={colorHandler}
            type="text"
            name="Color"
            className="w-10 h-10 mr-4 rounded bg-green-400 focus:bg-green-600 focus:ring-2 focus:ring-yellow-500"
            value="Green"
          ></button>
        </div>

        <div className="flex my-2 items-center">
          <button
            onClick={decrement}
            className="border-2 p-1 rounded-md border-black focus:text-red-600"
          >
            <MinusIcon className="w-6 h-6 " />
          </button>
          <input
            type="number"
            name="order"
            id="orderQuantity"
            className=" font-bold text-center py-1 w-52 border-2 border-black mx-4"
            placeholder="0"
            value={orderList}
          />
          <button
            onClick={increment}
            className="border-2 p-1 rounded-md border-black focus:text-red-600"
          >
            <PlusIcon className="w-6 h-6 " />
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="px-8 my-4 focus:bg-gray-600 md:my-8 bg-black py-2 text-white font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
