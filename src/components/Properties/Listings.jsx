import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { GiSofa } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { TfiRulerPencil } from "react-icons/tfi";
import { BiBed, BiBath } from "react-icons/bi";
const img =
  "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const Listings = () => {
  return (
    <div className="max-w-screen-xl mx-auto  p-8">
      <p className="my-8">
        We want to make your experience in finding your next dream home an
        enjoyable one! Find houses for rent in both Los Angeles and Orange
        County by selecting from our curated list of available properties, or by
        entering your search criteria below. Give us a call today and we will
        help you find the perfect rental property!
      </p>
      <div className="bg-gray-600 px-4 py-8 md:p-12 w-full grid grid-cols-12 gap-5 items-end">
        <div className="col-span-12 lg:col-span-4">
          <p className="text-white">Search</p>
          <input
            className="w-full mt-2 h-10 outline-white rounded px-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <p className="text-white">Min Rent</p>
          <input
            className="w-full mt-2 h-10 outline-white rounded px-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <p className="text-white">Max Rent</p>
          <input
            className="w-full mt-2 h-10 outline-white rounded px-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <p className="text-white">Beds</p>

          <select
            name="sort"
            id="sort"
            className="w-full mt-2 h-10 outline-white rounded px-2"
          >
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
            <option value="6">6+</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
            <option value="9">9+</option>
            <option value="10">10+</option>
          </select>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <p className="text-white">Baths</p>

          <select
            name="sort"
            id="sort"
            className="w-full mt-2 h-10 outline-white rounded px-2"
          >
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
            <option value="6">6+</option>{" "}
          </select>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <p className="text-white">Property Type</p>

          <select
            name="sort"
            id="sort"
            className="w-full mt-2 h-10 outline-white rounded px-2"
          >
            <option value="Any">Any</option>
            <option value="Single Family Home">Single Family Home</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Duplex">Duplex</option>
            <option value="Multiplex">Multiplex</option>
            <option value="Loft">Loft</option>
            <option value="Mobile Home">Mobile Home</option>
          </select>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <p className="text-white">Pets</p>

          <select
            name="sort"
            id="sort"
            className="w-full mt-2 h-10 outline-white rounded px-2"
          >
            <option value="Any Policy">Any Policy</option>
            <option value="Dogs Allowed">Dogs Allowed</option>
            <option value="Cats Allowed">Cats Allowed</option>
            <option value="Dogs & Cats Allowed">Dogs & Cats Allowed</option>
            <option value="No Pets Allowed">No Pets Allowed</option>
          </select>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <p className="text-white">Sort By</p>

          <select
            name="sort"
            id="sort"
            className="w-full mt-2 h-10 outline-white rounded px-2"
          >
            <optgroup label="Date Posted">
              <option value="date|desc">Date Posted (new -old)</option>
              <option value="date">Date Posted (old - new)</option>
            </optgroup>
            <optgroup label="Price">
              <option value="amount">Price (low - high)</option>
              <option value="amount|desc">Price (high - low)</option>
            </optgroup>
            <optgroup label="Beds">
              <option value="beds">Beds (low - high)</option>
              <option value="beds|desc">Beds (high - low)</option>
            </optgroup>
            <optgroup label="Baths">
              <option value="baths">Baths (low - high)</option>
              <option value="baths|desc">Baths (high - low)</option>
            </optgroup>
            <optgroup label="Area (Sq.Ft.)">
              <option value="area">SqFt (low - high)</option>
              <option value="area|desc">SqFt (high - low)</option>
            </optgroup>
            <optgroup label="Availability Date">
              <option value="availabilityDate">
                Availability (sooner - later)
              </option>
              <option value="availabilityDate|desc">
                Availability (later - sooner)
              </option>
            </optgroup>
          </select>
        </div>
        <button className=" col-span-12 md:col-span-6 lg:col-span-3 px-8 py-3 bg-blue-700 text-white hover:bg-white hover:text-black font-semibold duration-200">
          Submit
        </button>
      </div>

      <div className="h-full bg-slate-200">
        <div className="pt-4 space-y-2">
          <h1 className="text-center text-xl">Current Listings</h1>
          <h1 className="text-center text-md">
            Showing all available listings
          </h1>
        </div>
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[0, 1, 2, 3].map((el) => (
            <div className="group w-full bg-white p-3 flex flex-col gap-3 outline outline-1 outline-slate-300">
              <div className="w-full overflow-hidden">
                <img
                  src={img}
                  className="group-hover:scale-110 ease-in duration-500"
                />
              </div>
              <div className="w-full relative">
                {/* <h1 className="font-medium tracking-wide font-primary text-xl">
                    2 BHK Flat for Rent in Hollywood.
                  </h1> */}
                <h1 className="font-medium tracking-widest font-primary text-xs">
                  <span className="text-blue-700 ml-2 text-xl">$1,345.00 </span>{" "}
                  USD/Month
                </h1>
                <div className="grid grid-cols-3 my-4">
                  <div className="flex items-center  gap-x-2 ">
                    <BiBed size={30} />
                    <div>
                      <p className="text-sm text-secondary">2 bd</p>
                    </div>{" "}
                  </div>
                  <div className="flex  items-center gap-x-2 ">
                    <BiBath size={30} />
                    <div>
                      <p className="text-sm text-secondary">1 ba</p>
                    </div>{" "}
                  </div>
                  <div className="flex items-center  gap-x-2 ">
                    <TfiRulerPencil size={30} />
                    <div>
                      <p className="text-sm text-secondary">335 sqft</p>
                    </div>{" "}
                  </div>
                </div>
                <p className="flex items-center text-sm md:text-md  my-4">
                  <GoLocation
                    style={{
                      marginRight: "10px",
                    }}
                    size={18}
                    color={"red"}
                  />
                  4673 Hollywood Blvd. - 115, Los Angeles, CA 90027
                </p>
                <p className="text-sm hidden lg:block my-2">
                  Newly remodeled studio apartment with wood floors throughout,
                  remodeled bathroom and kitchen. The unit includes lots of
                  storage and a walk in closet. p...
                </p>
                <p className="text-sm  my-1">
                  Amenities: Refrigerator, Oven/Stove, Window A/C
                </p>
                <p className="text-sm my-1">
                  Pet Policy: Cats allowed, Dogs not allowed
                </p>{" "}
                <p className="text-sm my-1">Available: Immediately</p>
                <button className="w-full mt-3 bg-black text-white ease-in duration-150 outline outline-1 px-4 py-1 rounded-sm ml-auto hover:bg-white hover:text-black h-10">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
