import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavBar from "./NavBar";

const images = [
  "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
  "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg",
  "https://images.pexels.com/photos/5524205/pexels-photo-5524205.jpeg",
  "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg",
  "https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg",
];
const Header = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-screen  absolute min-h-screen z-10 w-full">
        <NavBar />

        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-white text-sm sm:text-lg  text-center">
            LOS ANGELES AND ORANGE COUNTY PROPERTY MANGEMENT SERVICES ELEVATED.
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-light w-[95vw] text-center bg-dark my-10 font-sans tracking-wide">
            COMPETENCY. TRANSPARENCY. PROFESSIONALISM.
          </h1>

          <div className="flex justify-center flex-col items-center sm:flex-row">
            <button className="transition-colors duration-300 text-white px-5 py-3 text-md rounded-full outline outline-1 sm:mr-5 mb-4 sm:mb-0 hover:text-black hover:bg-white hover:outline-white min-w-[190px] ">
              GET STARTED TODAY
            </button>
            <button className="transition-colors duration-300  text-black px-4 py-3 text-md rounded-full bg-white outline outline-1 outline-white hover:text-white hover:bg-transparent ease-out min-w-[190px] ">
              VIEW VACANCIES
            </button>
          </div>
        </div>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        animationHandler="fade"
        swipeable={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={4000}
        stopOnHover={false}
      >
        <div className="carousel-image-item">
          <img
            className="h-full min-h-screen object-cover brightness-90"
            src={images[0]}
          />
        </div>
        <div className="carousel-image-item">
          <img
            className="h-full min-h-screen object-cover brightness-90"
            src={images[1]}
          />
        </div>
        <div className="carousel-image-item">
          <img
            className="h-full min-h-screen object-cover brightness-90"
            src={images[2]}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
