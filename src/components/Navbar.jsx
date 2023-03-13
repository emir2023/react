import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "500px",
        height: "100px",

        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <Link id="hh" to="/">
        Home
      </Link>
      <Link to="/products">Products</Link>
      <Link to="/aboutUs">About us</Link>
      {/* 
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/aboutUs">Products</NavLink> */}
    </div>
  );
}

export default Navbar;
