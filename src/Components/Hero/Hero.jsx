import React, { useState } from "react";
import { motion } from "framer-motion";
import BlackShirt from "../Photos/black-tshirt.jpg";
import WhiteShirt from "../Photos/white tshirt.jpg";
import RedShirt from "../Photos/red t-shirt.jpg";
import BlueShirt from "../Photos/blue tshirt.jpg";
import Titan from "../watchespage/watchesphoto/fossil1.jpg";
import Bag from "../watchespage/watchesphoto/bag1.jpg";
import Electronics from "../watchespage/watchesphoto/electronics.jpg";
import Shoe from "../watchespage/watchesphoto/shoe1.jpg";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/storeitems?category=${category}`);
    window.scrollTo(0, 0);
  };
  const [selectedColor, setSelectedColor] = useState("black");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const renderShirtImage = () => {
    switch (selectedColor) {
      case "white":
        return WhiteShirt;
      case "black":
        return BlackShirt;
      case "red":
        return RedShirt;
      case "blue":
        return BlueShirt;
      default:
        return BlackShirt;
    }
  };

  const imageVariants = {
    exit: { opacity: 0, scale: 0.8 },
    enter: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col items-center md:flex-none md:items-start h-[260vh]"
        id="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="items-center font-bold mt-20 text-black flex flex-col md:flex-row md:ml-48 md:gap-80 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            
          >
            <h1 className=" text-[6rem] md:text-9xl leading-tight">
              <p className="tracking-wide">Unlock</p> Your{" "}
              <br className="md:hidden" />
              Style
            </h1>
            
          </motion.div>

          <motion.div
            className=" h-56 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.img
              key={selectedColor}
              src={renderShirtImage()}
              alt=""
              className="object-contain h-96 rounded-xl shadow-md border border-gray-300"
              variants={imageVariants}
              initial="exit"
              animate="enter"
              exit="exit"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4 mt-4">
              <div className="relative  rounded-3xl">
                <div className="absolute inset-0 bg-slate-100 blur-[1px] rounded-3xl"></div>

                <div className="flex justify-around gap-4 p-2 px-4 rounded-3xl relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-white w-10 h-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ring-slate-400 ${
                      selectedColor === "white" ? "text-black" : "text-white"
                    }`}
                    onClick={() => handleColorChange("white")}
                  >
                    {selectedColor === "white" && "✔"}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-black w-10 h-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ring-black ${
                      selectedColor === "black" ? "text-black" : "text-white"
                    }`}
                    onClick={() => handleColorChange("black")}
                  >
                    {selectedColor === "black" && "✔"}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-red-500 w-10 h-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ring-red-700 ${
                      selectedColor === "red" ? "text-black" : "text-white"
                    }`}
                    onClick={() => handleColorChange("red")}
                  >
                    {selectedColor === "red" && "✔"}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-blue-500 w-10 h-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ring-blue-500 ${
                      selectedColor === "blue" ? "text-black" : "text-white"
                    }`}
                    onClick={() => handleColorChange("blue")}
                  >
                    {selectedColor === "blue" && "✔"}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#3586fc] text-white font-bold py-5 px-6 rounded-full mt-[17rem] md:mt-9 hover:bg-[#1750de] transition-all duration-300  md:ml-48  text-3xl"
        >
          <Link to="/storeitems">Explore Now 🚀</Link>
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:mx-auto mt-40 gap-28 items-center justify-between"
        >
          <h1 className="text-5xl font-semibold mt-20 mb-10">
            Shop by category
          </h1>
          <div className="flex flex-col md:flex-row justify-around md:gap-[29rem]">
            <motion.div
              className="relative group w-80 h-80 "
              whileHover={{ scale: 1.1 }}
              onClick={() => handleClick("watches")}
            >
              {" "}
              <div className=" w-full h-full">
                <img
                  src={Titan}
                  alt=""
                  className="object-cover w-full h-full rounded-lg shadow-2xl cursor-pointer"
                />
              </div>{" "}
              <h1 className="text-2xl text-center pt-2 font-semibold">
                Accessories
              </h1>
              <p className="text-xl text-center pt-2">8 Products Available</p>
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "10px",
                }}
              >
                <p className="text-white text-lg font-semibold">Shop Now</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative group w-80 h-80 "
              whileHover={{ scale: 1.1 }}
              onClick={() => handleClick("bags")}
            >
              <div className=" w-full h-full">
                <img
                  src={Bag}
                  alt=""
                  className="object-cover w-full h-full rounded-lg shadow-2xl cursor-pointer"
                />
                <h1 className="text-2xl text-center pt-2 font-semibold">
                  Bags
                </h1>
                <p className="text-xl text-center pt-2">
                  10 Products Available
                </p>
              </div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "10px",
                }}
              >
                <p className="text-white text-lg font-semibold">Shop Now</p>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-[29rem] justify-around">
            <motion.div
              className="relative group w-80 h-80"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleClick("phone")}
            >
              <div className=" w-full h-full">
                <img
                  src={Electronics}
                  alt=""
                  className="object-cover w-full h-full rounded-lg shadow-2xl cursor-pointer"
                />
              </div>
              <h1 className="text-2xl text-center pt-2 font-semibold">
                Electronics
              </h1>
              <p className="text-xl text-center pt-2">10 Products Available</p>
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "10px",
                }}
              >
                <p className="text-white text-lg font-semibold">Shop Now</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative group w-80 h-80 "
              whileHover={{ scale: 1.1 }}
              onClick={() => handleClick("shoes")}
            >
              <div className=" w-full h-full">
                <img
                  src={Shoe}
                  alt=""
                  className="object-cover w-full h-full rounded-xl shadow-2xl cursor-pointer "
                />
              </div>
              <h1 className="text-2xl text-center pt-2 font-semibold">
                Sneakers
              </h1>
              <p className="text-xl text-center pt-2">7 Products Available</p>
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "10px",
                }}
              >
                <p className="text-white text-lg font-semibold">Shop Now</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
