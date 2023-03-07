import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-16 hidden md:flex items-center text-white p-10">
      <div className="mr-auto p-3">Logo</div>
      <div className="p-3">
        <Link to={"/"}>HOME</Link>
      </div>
      <div className="p-3">
        <Link to={"/properties"}>PROPERTIES</Link>
      </div>
      <div className="dropdown p-3">
        <button className="dropbtn">OWNERS</button>
        <div className="dropdown-content">
          <Link to="/promises">Promises</Link>
          <Link to="/what-we-do">What do we do</Link>
          <Link to="/pricing">Pricing (Plans & pricing)</Link>
          <Link to="/getting-your-property-ready">
            Getting your property ready
          </Link>
          <Link to="/tenant-screening">Tenant Screening</Link>
          <Link to="/">Fair Repair Costs</Link>
        </div>
      </div>
      <div className="dropdown p-3">
        <button className="dropbtn">RESIDENTS</button>
        <div className="dropdown-content">
          <Link to="/resident-benfits">Resident Benfits</Link>
          <Link to="/resident-resources">Resident Resources</Link>
        </div>
      </div>

      <div className="p-3">
        <Link to={"/"}>RENTALS</Link>
      </div>
      <div className="p-3">
        <Link to={"/about"}>ABOUT US</Link>
      </div>
      <div className="p-3">
        <Link to={"/contact"}>CONTACT</Link>
      </div>
    </div>
  );
};

export default NavBar;
