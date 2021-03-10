import React from "react";
import product1 from "../images/product-1.jpg";
import BreadCrumb from "../../function/BreadCrumb";
function Cart() {
  return (
    <>
      <BreadCrumb />
      <div className="cart-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-page-inner">
                <div className="table-reponsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody className="align-middle">
                      <tr>
                        <td>
                          <div className="img">
                            <a href="">
                              <img src={product1} alt="" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
