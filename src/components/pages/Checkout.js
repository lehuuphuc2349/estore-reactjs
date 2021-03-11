import React from "react";
import BreadCrumb from "../../function/BreadCrumb";
import "./Checkout.css";
function Checkout() {
  const slideShippAddress = () => {
    const checkbox = document.getElementById("shipto");
    let shippingAddress = document.querySelector("#shipping-address");
    if (checkbox.checked == true) {
      shippingAddress.style.display = "block";
    } else {
      shippingAddress.style.display = "none";
    }
  };
  return (
    <>
      <BreadCrumb />
      <div className="checkout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-inner">
                <div className="billing-address">
                  <h2>Billing Address</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholderc="Address"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Country</label>
                      <select className="custom-select">
                        <option selected>Viet Nam</option>
                        <option>United States</option>
                        <option value="">China</option>
                        <option value="">Japan</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="City"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="State"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Zip Code"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="newaccount"
                        />
                        <label
                          className="custom-control-label"
                          for="newaccount"
                        >
                          Create an account
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="shipto"
                          onClick={slideShippAddress}
                        />
                        <label className="custom-control-label" for="shipto">
                          Ship to diffrent Address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shipping-address">
                  <h2>Billing Address</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholderc="Address"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Country</label>
                      <select className="custom-select">
                        <option selected>Viet Nam</option>
                        <option>United States</option>
                        <option value="">China</option>
                        <option value="">Japan</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="City"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="State"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Zip Code"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="newaccount"
                        />
                        <label
                          className="custom-control-label"
                          for="newaccount"
                        >
                          Create an account
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Shipto"
                        />
                        <label className="custom-control-label" for="Shipto">
                          Ship to diffrent Address
                        </label>
                      </div>
                    </div>
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

export default Checkout;
