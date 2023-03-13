import React from "react";
import Navbar from "../Navbar";

function Mainlayouts() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Mainlayouts;
