import React from "react";
import "./NewsletterStart.css";
function NewsletterStart() {
  //   const stytle = {
  //     newsletter: {
  //       position: "relative",
  //       padding: "30px 0",
  //       backgroundColor: "#ff6f61",
  //     },
  //   };
  return (
    <div className="newsletter">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1>Subscribe Our Newsletter</h1>
          </div>
          <div className="col-md-6">
            <div className="form">
              <input type="email" value="Your Email Here" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterStart;
