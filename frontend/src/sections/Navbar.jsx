import React from "react";
import logo from "../media/Mahabaprint-img.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <div className="links">
          <a href="/">Home</a>
          <a href="/">Our Business</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
