import React from "react";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";
import Navbar from "./Navbar";
import SliderStart from "./SliderStart";
function Header() {
  return (
    <>
      <Topbar />
      <Navbar />
      <BottomBar />
      <SliderStart />
    </>
  );
}

export default Header;
