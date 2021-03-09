import React from "react";
import "./ProductList.css";
function ProductList() {
  return (
    <div className="product-view">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {/* TOP */}
              <div className="col-md-12">
                <div className="product-view-top">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="product-search">
                        <input type="email" />
                        <button>
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-short">
                        <div className="dropdown">
                          <div
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Product Short
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              Newest
                            </a>
                            <a href="#" className="dropdown-item">
                              Popular
                            </a>
                            <a href="#" className="dropdown-item">
                              Most Sale
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-price-range">
                        <div className="dropdown">
                          <div
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Product Price Range
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              $0 to $50
                            </a>
                            <a href="#" className="dropdown-item">
                              $51 to $100
                            </a>
                            <a href="#" className="dropdown-item">
                              $101 to $150
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END TOP */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
