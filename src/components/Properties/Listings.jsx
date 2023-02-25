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
      <div className="">
        <div className="h-14 bg-gray-600 flex items-center  px-4 w-full ">
          <p className="text-white">SORT BY</p>
          <select name="sort" id="sort" className="w-40 p-1 ml-4">
            <option value="Most Recent">Most Recent</option>
          </select>
          <button className="text-white ml-auto mx-4">Show Map</button>
          <button className="text-white">Filter</button>
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
                    <span className="text-blue-700 ml-2 text-xl">
                      $1,345.00{" "}
                    </span>{" "}
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
                    Newly remodeled studio apartment with wood floors
                    throughout, remodeled bathroom and kitchen. The unit
                    includes lots of storage and a walk in closet. p...
                  </p>
                  <p className="text-sm  my-1">
                    Amenities: Refrigerator, Oven/Stove, Window A/C
                  </p>
                  <p className="text-sm my-1">
                    Pet Policy: Cats allowed, Dogs not allowed
                  </p>{" "}
                  <p className="text-sm my-1">Available: Immediately</p>
                  <button className="w-full mt-3 bg-black text-white ease-in duration-150 outline outline-1 px-4 py-1 rounded-sm ml-auto hover:bg-white hover:text-black">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;

// const getConfigurableProps = () => ({
//   showArrows: true,
//   showStatus: true,
//   showIndicators: true,
//   infiniteLoop: true,
//   showThumbs: true,
//   useKeyboardArrows: true,
//   autoPlay: true,
//   stopOnHover: true,
//   swipeable: true,
//   emulateTouch: true,
//   autoFocus: false,
//   thumbWidth: 100,
//   selectedItem: 0,
//   interval: 2000,
//   transitionTime: 500,
//   swipeScrollTolerance: 5,
// });
