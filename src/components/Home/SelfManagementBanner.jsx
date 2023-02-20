import React from "react";

const SelfManagementBanner = () => {
  return (
    <div className="min-h-[140px] bg-black p-6 flex items-center justify-center flex-col md:flex-row text-center">
      <p className="text-white text-3xl font-primary uppercase tracking-wider mb-4 md:mb-0 md:mr-6 ">
        Tired of Self-<span>Management?</span>
      </p>
      <button className="outline outline-white text-white px-10 py-3 uppercase text-sm outline-1 rounded-full">
        Let's chat
      </button>
    </div>
  );
};

export default SelfManagementBanner;
