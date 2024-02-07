import React, { useState } from "react";
import { addtocart } from "../redux/CartSlices";
import { useDispatch } from "react-redux";

const Card = ({ name, image, price, description, color, quantity, size }) => {
  const dispatch = useDispatch();
  const [colour, setColour] = useState("");
  const [Size, setSize] = useState("");
  const [qty, setQty] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-2xl   rounded-xl w-80 md:ml-28 ml-[2rem]">
      <div className="relative mx-3 mt-1 overflow-hidden text-gray-700 bg-white  rounded-xl h-72">
        <img src={image} className="object-cover w-full h-full" alt={name} />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="font-sans text-base font-medium text-blue-gray-900">
            {name}
          </p>
          <p className="font-sans text-base font-medium text-blue-gray-900">
            ${price}
          </p>
        </div>
        <p className="font-sans text-sm font-normal text-gray-700 opacity-75">
          {description}
        </p>
        <div className="flex gap-2 justify-center mt-3">
          <select value={colour} onChange={(e) => setColour(e.target.value)}>
            <option value="">Color</option>
            {color.map((col, index) => (
              <option key={index} value={col}>
                {col}
              </option>
            ))}
          </select>
          <select value={qty} onChange={(e) => setQty(e.target.value)}>
            <option value="">Qty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select value={Size} onChange={(e) => setSize(e.target.value)}>
            <option>Size</option>
            {size.map((s, index) => (
              <option key={index} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          className="bg-black text-white inline-block w-full px-6 py-3 text-sm font-sans font-semibold uppercase transition-all border border-gray-800 rounded-md shadow-md hover:shadow-lg active:scale-40 "
          onClick={() => {
            if (qty !== "" && colour !== "" && Size !== "") {
              setShow(true);
              dispatch(
                addtocart({
                  name,
                  color: colour,
                  price,
                  quantity: Number(qty),
                  description,
                  size: Size,
                  image,
                })
              );
            }

            // Show "Added to Cart!" for 2 seconds
            setTimeout(() => {
              setShow(false);
            }, 2000);
          }}
        >
          {show ? <p>Added to Cart!</p> : <div>Add to Cart</div>}
        </button>
      </div>
    </div>
  );
};

export default Card;
