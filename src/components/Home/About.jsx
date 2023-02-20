import React from "react";

const About = () => {
  return (
    <div className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
      <div>
        <img
          src="https://www.cremmgmt.com/images/about-us.jpg"
          alt="img"
          className="h-full"
        />
      </div>
      <div className="px-6 py-20 md:p-20 bg-stone-100">
        <div className="flex flex-col justify-center h-full text-left gap-5">
          <h3 className=" text-[#333333] text-2xl font-primary">ABOUT US</h3>
          <p className="text-secondary text-xl ">
            ELEVATED LOS ANGELES AND PROPERTY MANAGEMENT.
          </p>

          <p className="text-secondary text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            laborum voluptatem porro adipisci dicta quae quis quidem saepe
            maxime. Suscipit dolorum nulla, totam tenetur sed consequuntur
            aliquam, ipsa facere,
          </p>
          <p className="text-secondary text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            repellat dignissimos consequuntur odit repellendus libero
            necessitatibus voluptatum minus, officia eaque praesentium modi,
            illum saepe omnis. Odio porro corporis ipsum incidunt ad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
