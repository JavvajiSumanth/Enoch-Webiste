import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";

const ManagementServices = () => {
  return (
    <div className="min-h-screen px-4 py-8  md:p-10 max-w-screen-lg mx-auto">
      <h1 className="font-primary tracking-wide text-3xl text-center mt-8">
        MANAGEMENT SERVICES
      </h1>
      <h1 className="tracking-widest text-xl text-center mt-4 text-secondary">
        OWNERSHIP WITHOUT THE HASSLE
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 w-full max-w-screen-xl mx-auto">
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <HiOutlineDocument />
          </div>

          <div>
            <h2 className="font-primary text-xl mb-1">RENT INVOICING</h2>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              animi tenetur iure facilis necessitatibus sint veniam excepturi,
              numquam quis, praesentium eligendi facere!
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <RiMoneyDollarCircleLine />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">RENT COLLECTION</h2>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              animi tenetur iure facilis necessitatibus sint veniam excepturi,
              numquam quis, praesentium eligendi facere!
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <SlGraph />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">EXPENSES</h2>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              animi tenetur iure facilis necessitatibus sint veniam excepturi,
              numquam quis, praesentium eligendi facere!
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <VscTools />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">REPAIR & MAINTENANCE</h2>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              animi tenetur iure facilis necessitatibus sint veniam excepturi,
              numquam quis, praesentium eligendi facere!
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <BsFileEarmarkBarGraph />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">FINANCIAL REPORTING</h2>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              animi tenetur iure facilis necessitatibus sint veniam excepturi,
              numquam quis, praesentium eligendi facere!
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <BiBuildings />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">
              APARTMENT TURNOVER SERVICE
            </h2>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              animi tenetur iure facilis necessitatibus sint veniam excepturi,
              numquam quis, praesentium eligendi facere!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementServices;
