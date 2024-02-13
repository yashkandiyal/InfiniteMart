import React, { useState, useEffect } from "react";
import Card from "./Card";
import CarouselContent from "./CarouselContent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomNextArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-next"
    onClick={onClick}
    style={{
      right: "10px",
      zIndex: 1,
      background: "blue",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "opacity .5s ease-in-out",
      opacity: 1,
    }}
  />
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-prev"
    onClick={onClick}
    style={{
      left: "10px",
      zIndex: 1,
      background: "red",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "opacity 0.5s ease-in-out",
      opacity: 1,
    }}
  ></div>
);

const MyCarousel = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCardVisible(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="h-[76vh] md:h-screen">
      <h1 className="text-center mb-28 mt-[2.5rem] md:mt-0 text-4xl">
        Recently viewed
      </h1>
      <div>
        {isCardVisible && (
          <Carousel
            responsive={responsive}
            customNextArrow={<CustomNextArrow />}
            customPrevArrow={<CustomPrevArrow />}
            infinite={false}
            draggable={false}
            itemClass="carousel-item"
            transitionDuration={500}
            slidesToSlide={3}
          >
            {CarouselContent.map((item, index) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                quantity={item.quantity}
                size={item.size}
                color={item.color}
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default MyCarousel;
