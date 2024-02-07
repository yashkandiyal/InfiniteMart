import { useState } from "react";
import React from "react";
import { addtocart } from "../redux/CartSlices";
import { useDispatch, useSelector } from "react-redux";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

const Card = ({
  id,
  category,
  name,
  image,
  price,
  description,
  quantity,
  color,
  size,
  searchTerm,
}) => {
  const [colour, setcolour] = useState("");
  const [dimension, setDimension] = useState("");
  const [show, setShow] = useState(false);
  const [quant, setQuant] = useState("");
  const [missingFields, setMissingFields] = useState([]);
  const dispatch = useDispatch();
  const availableItems = useSelector((state) => state.cart.availableItems);

  // ... rest of the component

  const handleAddToCart = () => {
    const missing = [];

    if (colour === "") {
      missing.push("Color");
    }
    if (dimension === "") {
      missing.push("Size");
    }
    if (quant === "") {
      missing.push("Quantity");
    }

    if (missing.length > 0) {
      setShow(true);

      setMissingFields(missing);
    } else {
      setShow(false);
      dispatch(
        addtocart({
          id,
          name,
          image,
          price: price,
          quantity: Number(quant),
          color: colour,
          size: dimension,
        })
      );
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const shouldCloseOnInteractOutside = (e) => {
    const popoverElement = document.getElementById("your-popover-id");
    const buttonElement = document.getElementById("your-button-id");

    return (
      !popoverElement?.contains(e.target) && !buttonElement?.contains(e.target)
    );
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-2xl rounded-xl w-80 flex-wrap align-middle ">
      <div className="relative mx-3 mt-1 overflow-hidden text-gray-700 bg-white rounded-xl h-72">
        <img src={image} className="object-cover w-full h-full" alt={name} />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-sans text-xl font-semibold text-blue-gray-900">
            {name}
          </h1>
          <h2 className="font-sans text-lg font-semibold text-blue-gray-900">
            ${price}
          </h2>
        </div>

        <p className="font-sans text-base font-normal text-gray-700 opacity-75">
          {description}
        </p>
        <div className="flex justify-between ga flex-wrap mt-5 text-black">
          <select
            className="mt-2 bg-white text-black px-2 py-1 rounded-md border focus:outline-none focus:border-black"
            required
            onChange={(e) => setcolour(e.target.value)}
            value={colour}
          >
            <option value="">Color</option>
            {color.map((col, index) => (
              <option key={index} value={col}>
                {col}
              </option>
            ))}
          </select>
          <select
            className="mt-2 bg-white text-black px-2 py-1 rounded-md border focus:outline-none focus:border-black"
            value={quant}
            onChange={(e) => setQuant(e.target.value)}
          >
            <option>Qty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <select
            className="mt-2 bg-white text-black px-2 py-1 rounded-md border focus:outline-none focus:border-black"
            onChange={(e) => setDimension(e.target.value)}
            required
            value={dimension}
          >
            <option value="">Size</option>
            {size.map((sizee, index) => (
              <option key={index} value={sizee}>
                {sizee}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Popover
          isOpen={isOpen}
          onOpenChange={(newIsOpen) => setIsOpen(newIsOpen)}
          shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
          onClose={handleClose}
          placement="bottom"
          backdrop={false}
        >
          <PopoverTrigger>
            <button
              id="your-button-id"
              className="inline-block w-full px-6 py-3 text-sm font-sans font-semibold uppercase transition-all border border-gray-800 rounded-md shadow-md bg-black text-white hover"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </PopoverTrigger>
          {show && (
            <PopoverContent id="your-popover-id" className="p-3 font-semibold">
              <p>Please fill in the following fields:</p>
              <ul className="flex justify-around gap-2">
                {missingFields.map((field, index) => (
                  <li key={index}>{field}</li>
                ))}
              </ul>
            </PopoverContent>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default Card;
