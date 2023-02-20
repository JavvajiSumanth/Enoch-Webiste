import React from "react";
import Promises from "../components/Owners/Promises";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";

const PromisesView = () => {
  return (
    <div>
      <MiniHeader heading={"Promises"} subHeading={"Promises"} />
      <Promises />
      <Footer />
    </div>
  );
};

export default PromisesView;
