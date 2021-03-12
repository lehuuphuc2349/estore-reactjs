import React from "react";
import BreadCrumb from "../../function/BreadCrumb";
import "./login.css";
function LoginAndRegister() {
  return (
    <>
      <BreadCrumb />
      <div className="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="register-form">
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Retype Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login-form">
                <div className="row">
                  <div className="col-md-6">
                    <label>E-mail / Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail/Username"
                    />
                  </div>
                  <div className="col-md-6">
                    <labe>Password</labe>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="newaccount"
                      />
                      <label className="custom-control-label" for="newaccount">
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAndRegister;
