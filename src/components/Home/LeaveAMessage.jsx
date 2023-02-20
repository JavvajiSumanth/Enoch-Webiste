import React from "react";
import MapImg from "../../assets/images/us.png";

const LeaveAMessage = () => {
  return (
    <div
      className="min-h-[80vh] bg-contain bg-no-repeat bg-center "
      style={{
        backgroundImage: `url(${MapImg})`,
        backgroundColor: "#111111",
      }}
    >
      <h1 className="uppercase tracking-wide text-3xl text-white text-center font-primary py-16">
        Leave a message
      </h1>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-4/5 mx-auto">
        <div>
          <h1 className="uppercase tracking-wide text-2xl text-white  font-primary ">
            GET IN TOUCH
          </h1>
          <p className="text-secondary mt-4 text-md tracking-wide">
            Let's chat about your real estate management needs.
          </p>
        </div>
        <div>
          <input
            className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full lg:w-4/5 rounded-sm p-4 text-white caret-white"
            type="text"
            name="name"
            placeholder="First & Last Name"
            id="name"
          />
          <input
            className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full lg:w-4/5 rounded-sm p-4 text-white caret-white"
            type="email"
            name="name"
            placeholder="Email"
            id="name"
          />
          <input
            className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full lg:w-4/5 rounded-sm p-4 text-white caret-white"
            type="tel"
            name="name"
            placeholder="Phone"
            id="name"
          />
          <textarea
            className="bg-transparent outline outline-1 outline-white mb-4 w-full lg:w-4/5 rounded-sm p-4 text-white caret-white"
            name="description"
            id="description"
            cols="30"
            rows="6"
            placeholder="Describe your property needs"
          ></textarea>

          <button
            type="submit"
            className="uppercase px-12 py-2 rounded-full outline outline-1 outline-white font-primary text-white hover:text-black hover:bg-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveAMessage;
