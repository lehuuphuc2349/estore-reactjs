import React from "react";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";
import Navbar from "./Navbar";
function Header() {
  return (
    <>
      <Topbar />
      <Navbar />
      <BottomBar />
    </>
  );
}

export default Header;
