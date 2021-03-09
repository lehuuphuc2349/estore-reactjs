import React from "react";
import BreadCrumb from "./Product-component/BreadCrumb";
import ProductList from "./Product-component/ProductList";
import Brand from "../Brand";
function Product() {
  return (
    <>
      <BreadCrumb />
      <ProductList />
      <Brand />
    </>
  );
}

export default Product;
