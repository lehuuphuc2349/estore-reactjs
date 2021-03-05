import React from "react";
import "./Topbar.css";
function Topbar() {
  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <i className="fa fa-envelope">lephuc2349@gmail.com</i>
          </div>
          <div className="col-sm-6">
            <i className="fa fa-phone-alt">0905-982-524</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
