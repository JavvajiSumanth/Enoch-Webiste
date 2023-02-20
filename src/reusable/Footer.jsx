import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[50vh] bg-black text-white ">
      <div className="max-w-screen-xl p-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-auto py-10 gap-y-4">
          <div className="col-span-1 md:col-span-2 md:px-4">
            <div className="h-[120px] w-[180px] bg-white"></div>
            <p className="mt-4 w-11/12 md:w-3/5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eius
              optio commodi aperiam! Ipsam mollitia esse repellat consequatur
              voluptatum, doloremque quibusdam vel similique dolores inventore
            </p>
          </div>
          <div className="">
            <h1 className="font-primary text-white text-2xl tracking-wide">
              Quick Links
            </h1>
            <div className="flex flex-col space-y-1 text-secondary mt-4">
              <a href="#">Properties</a>
              <a href="#">Owners</a>
              <a href="#">Tenants</a>
              <a href="#">Blog</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Owner Login</a>
              <a href="#">Tenant Login</a>
            </div>
          </div>
          <div className="">
            <h1 className="font-primary text-white text-2xl tracking-wide">
              Contact Info
            </h1>
            <div className="flex flex-col space-y-1 text-secondary mt-4">
              <a href="#">Phone: </a>
              <a href="#">E-mail: test@test.com</a>
              <a href="#">Location: </a>
            </div>
          </div>
        </div>
        <p className="text-center">
          Copyright {new Date().getFullYear()} Company Name . All Rights
          Reserved. Property Manager Website powered by PMW | Sitemap
        </p>
      </div>
    </div>
  );
};

export default Footer;
