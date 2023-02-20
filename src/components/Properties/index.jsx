import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import Listings from "./Listings";

const Properties = () => {
  return (
    <>
      <MiniHeader
        heading={"LOS ANGELES AND ORANGE COUNTY PROPERTIES FOR RENT"}
        subHeading={"Find the Perfect Home"}
      />
      <Listings />
      <Footer />
    </>
  );
};

export default Properties;
