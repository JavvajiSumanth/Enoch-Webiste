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
          <Link to="/">Getting your property ready</Link>
          <Link to="/">Tenant Screening</Link>
          <Link to="/">Fair Repair Costs</Link>
        </div>
      </div>
      <div className="dropdown p-3">
        <button className="dropbtn">RESIDENTS</button>
        <div className="dropdown-content">
          <Link to="/">Resident Benfits</Link>
          <Link to="/">Resident Resources</Link>
        </div>
      </div>

      <div className="p-3">
        <Link to={"/"}>RENTALS</Link>
      </div>
      <div className="p-3">
        <Link to={"/"}>ABOUT US</Link>
      </div>
      <div className="p-3">
        <Link to={"/"}>CONTACT</Link>
      </div>
    </div>
  );
};

export default NavBar;
