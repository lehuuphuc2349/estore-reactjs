import React from "react";
import "./CallUs.css";
function CallUs() {
  return (
    <div className="call-to-action">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Call us for any queries</h1>
          </div>
          <div className="col-md-6">
            <a href="tel:0905982524">0905-982-524</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallUs;
