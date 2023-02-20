import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { GiSofa } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
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
          <div className="p-3">
            {[0, 1, 2, 3].map((el) => (
              <div className="w-full bg-white p-3 flex flex-col sm:flex-row gap-3 my-4">
                <div className="w-full sm:w-3/5 md:w-4/6 lg:w-2/5 ">
                  {/* <Carousel {...getConfigurableProps()}>
                {[img, img, img, img, img].map((img, idx) => (
                  <div key={idx}>
                    <img src={img} />
                  </div>
                ))}
              </Carousel> */}
                  <div>
                    <img src={img} />
                  </div>
                </div>
                <div className="w-full relative">
                  <h1 className="font-medium tracking-wide font-primary text-xl">
                    2 BHK Flat for Rent in Hollywood.
                  </h1>
                  <div className="grid grid-cols-2 md:grid-cols-3  my-4">
                    <div className="flex items-center  gap-x-4 ">
                      <GiSofa />
                      <div>
                        <h1 className="font-medium text-md font-primary">
                          RENT
                        </h1>
                        <p className="text-sm text-secondary">$1,250</p>
                      </div>{" "}
                    </div>
                    <div className="flex  items-center gap-x-4 ">
                      <GiSofa />
                      <div>
                        <h1 className="font-medium text-md font-primary">
                          BED / BATH
                        </h1>
                        <p className="text-sm text-secondary">Studio / 1 ba</p>
                      </div>{" "}
                    </div>
                    <div className="flex items-center  gap-x-4 ">
                      <GiSofa />
                      <div>
                        <h1 className="font-medium text-md font-primary">
                          AVAILABLE
                        </h1>
                        <p className="text-sm text-secondary">NOW</p>
                      </div>{" "}
                    </div>
                    {/* <div className="flex items-center  gap-x-4 ">
                    <GiSofa />
                    <div>
                      <h1 className="font-medium text-md font-primary">
                        Furnishing
                      </h1>
                      <p className="text-sm text-secondary">Furnishing</p>
                    </div>{" "}
                  </div>
                  <div className="flex  items-center gap-x-4 ">
                    <GiSofa />
                    <div>
                      <h1 className="font-medium text-md font-primary">Area</h1>
                      <p className="text-sm text-secondary">Area</p>
                    </div>{" "}
                  </div>
                  <div className="flex items-center  gap-x-4 ">
                    <GiSofa />
                    <div>
                      <h1 className="font-medium text-md font-primary">
                        Availability
                      </h1>
                      <p className="text-sm text-secondary">Availability</p>
                    </div>{" "}
                  </div> */}
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
                  <p className="text-sm hidden lg:block">
                    Newly remodeled studio apartment with wood floors
                    throughout, remodeled bathroom and kitchen. The unit
                    includes lots of storage and a walk in closet. It is located
                    on the second floor of a mixed use apartment building. Close
                    to many vintage stores, coffee shops, restaurants and more!
                    Just minutes away from Griffith Park. The building is
                    located at the corner of Hollywood Blvd. and Vermont. No
                    p...
                  </p>
                  <p className="text-sm hidden lg:block mt-3">
                    Amenities: Refrigerator, Oven/Stove, Window A/C
                  </p>
                  <p className="text-sm hidden lg:block">
                    Pet Policy:Cats allowed, Dogs not allowed
                  </p>
                  <div className=" lg:absolute right-0 bottom-0 flex ">
                    <button className="outline outline-1 px-4 py-1 rounded-sm ml-auto">
                      View Details
                    </button>
                    <button className="outline outline-1 px-4 py-1 ml-2 rounded-sm bg-slate-700 text-white">
                      Apply Now
                    </button>
                  </div>
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
