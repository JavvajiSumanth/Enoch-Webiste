import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const images = [
  "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
  "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg",
  "https://images.pexels.com/photos/5524205/pexels-photo-5524205.jpeg",
  "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg",
  "https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg",
];
const Header = () => {
  const [url, setUrl] = useState(
    "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
  );

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log(url);
  //       setUrl(images[Math.floor(Math.random() * images.length)]);
  //     }, 5000);

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-screen  absolute min-h-screen z-10 w-full">
        <div className="h-16 hidden md:flex items-center  text-white p-10">
          <div className="mr-auto p-3">Logo</div>
          <div className="p-3">
            <Link to={"/"}>HOME</Link>
          </div>
          <div className="p-3">
            <Link to={"/"}>PROPERTIES</Link>
          </div>
          <div className="dropdown p-3">
            <button className="dropbtn">OWNERS</button>
            <div className="dropdown-content">
              <Link to="/">Promises</Link>
              <Link to="/">What do we do</Link>
              <Link to="/">Pricing (Plans & pricing)</Link>
              <Link to="/">Getting your property ready</Link>
              <Link to="/">Tenant Screening</Link>
              <Link to="/">Fair Repair Costs</Link>
            </div>
          </div>
          <div className="dropdown p-3">
            <button className="dropbtn">RESIDENTS</button>
            <div className="dropdown-content">
              <Link to="/">Resident Benfits</Link>
              <Link to="/">Resident Resources</Link>
            </div>
          </div>

          <div className="p-3">
            <Link to={"/"}>RENTALS</Link>
          </div>
          <div className="p-3">
            <Link to={"/"}>ABOUT US</Link>
          </div>
          <div className="p-3">
            <Link to={"/"}>CONTACT</Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-white  text-sm sm:text-lg text-center">
            LOS ANGELES AND ORANGE COUNTY PROPERTY MANGEMENT SERVICES ELEVATED.
          </h1>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl   font-light w-[95vw] text-center bg-dark my-10 font-sans tracking-wide">
            COMPETENCY. TRANSPARENCY. PROFESSIONALISM.
          </h1>

          <div className="flex justify-center ">
            <button className="transition-colors duration-300 text-white px-5 py-3 text-md rounded-full outline outline-1 mr-5 hover:text-black hover:bg-white hover:outline-white ">
              GET STARTED TODAY
            </button>
            <button className="transition-colors duration-300  text-black px-4 py-3 text-md rounded-full bg-white outline outline-1 outline-white hover:text-white hover:bg-transparent  ease-out ">
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
