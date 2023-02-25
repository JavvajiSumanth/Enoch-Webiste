import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

const Pricing = () => {
  return (
    <div className="font-pricing-secondary">
      <MiniHeader heading={"Pricing"} subHeading={"Pricing"} />
      <div className="px-4 py-8  md:p-10  mx-auto">
        <h1 className="text-center text-[#6ea32d] font-primary text-xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <h1 className="text-center font-semibold font-pricing text-6xl my-4">
          Plans & Pricing
        </h1>
        <p className="text-center text-xl w-3/4 md:w-1/2 m-auto  font-semibold mb-8 ">
          Choose a property management plan that's right for you. Whether you're
          just getting started with real estate or you're an experienced
          investor, there's a plan for you.
        </p>
      </div>
      <div className="min-h-screen bg-slate-100 ">
        <div className="grid grid-cols-1 lg:grid-cols-3  max-w-screen-xl mx-auto gap-6 py-14">
          <div className=" bg-white p-8 text-center">
            <img
              src="https://www.verdeigroup.com/hubfs/VerdeiGroup_February2022/image/5eaee7e523b1780ed7a70631_face-id.svg"
              width="96"
              alt="AUTOPILOT"
              className="mx-auto"
            />
            <h1 className="text-[32px] font-pricing font-bold my-4 ">
              AUTOPILOT
            </h1>
            <p className="font-semibold my-4 text-[#939494]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              architecto.
            </p>
            <p className="font-pricing text-3xl mb-4">
              <span className="text-6xl">12</span>%/mo
            </p>
            <div className="space-y-1 my-6">
              <p className="text-[#939494] font-semibold">
                per unit - monthly collected rent
              </p>
              <p className="text-[#939494] font-semibold">
                $195 monthly minimum required
              </p>
              <p className="font-bold">+ $0 zero tenant placement fees</p>
            </div>
            <button className="my-4 font-bold px-8 py-3 bg-[#fc9f5b] rounded-md text-white">
              Get Started
            </button>
            <p className="font-bold text-md tracking-wide">
              60-Day Risk Free Guarantee
            </p>
            <p className="font-bold text-md tracking-wide">
              No Upfront Money Required
            </p>
          </div>
          <div className=" bg-white p-8 text-center">
            <img
              src="https://www.verdeigroup.com/hubfs/5eaee7e523b1784cf5a70601_organization.svg"
              width="96"
              alt="STANDARD"
              className="mx-auto"
            />
            <h1 className="text-[32px] font-pricing font-semibold my-4 ">
              STANDARD
            </h1>
            <p className="font-semibold my-4 text-[#939494]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              architecto.
            </p>
            <p className="font-pricing text-3xl mb-4">
              <span className="text-6xl">12</span>%/mo
            </p>
            <div className="space-y-1 my-6">
              <p className="text-[#939494] font-semibold">
                per unit - monthly collected rent
              </p>
              <p className="text-[#939494] font-semibold">
                $195 monthly minimum required
              </p>
              <p className="font-bold">+ $0 zero tenant placement fees</p>
            </div>
            <button className="my-4 font-bold px-8 py-3 bg-[#6ea32d] rounded-md text-white">
              Get Started
            </button>
            <p className="font-bold text-md tracking-wide">
              60-Day Risk Free Guarantee
            </p>
            <p className="font-bold text-md tracking-wide">
              No Upfront Money Required
            </p>
          </div>
          <div className=" bg-white p-8 text-center">
            <img
              src="https://www.verdeigroup.com/hubfs/5eaee7e523b178d68aa70609_goal.svg"
              width="96"
              alt="ESSENTIAL"
              className="mx-auto"
            />
            <h1 className="text-[32px] font-pricing font-semibold my-4 ">
              ESSENTIAL
            </h1>
            <p className="font-semibold my-4 text-[#939494]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              architecto.
            </p>
            <p className="font-pricing text-3xl mb-4">
              <span className="text-6xl">12</span>%/mo
            </p>
            <div className="space-y-1 my-6">
              <p className="text-[#939494] font-semibold">
                per unit - monthly collected rent
              </p>
              <p className="text-[#939494] font-semibold">
                $195 monthly minimum required
              </p>
              <p className="font-bold">+ $0 zero tenant placement fees</p>
            </div>
            <button className="my-4 font-bold px-8 py-3 bg-[#6ea32d] rounded-md text-white">
              Get Started
            </button>
            <p className="font-bold text-md tracking-wide">
              60-Day Risk Free Guarantee
            </p>
            <p className="font-bold text-md tracking-wide">
              No Upfront Money Required
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
