import React, { useState, useEffect } from "react";
import "./ScrollTop.css";
function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });
  return (
    <div className="scroll-to_top">
      {isVisible && (
        <a onClick={scrollToTop} href="" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      )}
    </div>
  );
}

export default ScrollTop;
