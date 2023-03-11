import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import { Link } from "react-router-dom";
const ResidentResources = () => {
  return (
    <>
      <MiniHeader
        heading={"Resident Resources"}
        subHeading={"Resident Resources"}
      />

      <div className="min-h-screen px-4 py-8  md:p-10  mx-auto">
        <h1 className="font-primary tracking-wide text-4xl font-bold mt-8">
          Resident Resources
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 w-full max-w-screen-xl mx-auto ">
          <div className="w-full flex gap-5 flex-col">
            <div>
              <h2 className="font-primary text-3xl mb-1 font-bold">
                Prospective Residents
              </h2>
              <p className="text-secondary text-sm font-medium">
                Find Your Perfect Home
              </p>
            </div>
            <div className="flex flex-col  space-y-3 ">
              <Link
                to="/properties"
                className="uppercase text-center text-xs px-10 w-full md:w-3/4 py-2 bg-blue-600 text-white rounded-full hover:bg-transparent hover:text-blue-600 outline outline-1"
              >
                View Properties for rent
              </Link>

              <Link
                to="/"
                className="text-center uppercase text-xs px-10 w-full md:w-3/4 py-2 bg-blue-600 text-white rounded-full hover:bg-transparent hover:text-blue-600 outline outline-1"
              >
                Apply online
              </Link>

              <Link
                to="/"
                className="text-center uppercase text-xs px-10 w-full md:w-3/4 py-2 bg-blue-600 text-white rounded-full hover:bg-transparent hover:text-blue-600 outline outline-1"
              >
                Download residental rental application
              </Link>

              <Link
                to="/pet-policy"
                className="text-center uppercase text-xs px-10 w-full md:w-3/4 py-2 bg-blue-600 text-white rounded-full hover:bg-transparent hover:text-blue-600 outline outline-1"
              >
                pet policy
              </Link>
              <Link
                to="/"
                className="text-center uppercase text-xs px-10 w-full md:w-3/4 py-2 bg-blue-600 text-white rounded-full hover:bg-transparent hover:text-blue-600 outline outline-1"
              >
                avoiding rental scams
              </Link>
            </div>
          </div>
          <div className="w-full flex gap-5 flex-col">
            <div>
              <h2 className="font-primary text-3xl mb-1 font-bold">
                Current Residents{" "}
              </h2>
              <p className="text-secondary text-sm font-medium">
                How Can We Help?
              </p>
            </div>
            <div className="flex flex-col  space-y-3 ">
              <Link
                to="/contact"
                className="text-center uppercase text-xs px-10 w-full md:w-3/4 py-2 bg-blue-600 text-white rounded-full hover:bg-transparent hover:text-blue-600 outline outline-1"
              >
                contact us
              </Link>

              <Link
                to="/"
                className="text-center uppercase text-xs px-10 w-full md:w-3/4 py-2 bg-blue-600 text-white rounded-full hover:bg-transparent hover:text-blue-600 outline outline-1"
              >
                Tenent Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResidentResources;
