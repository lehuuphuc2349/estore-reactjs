import React from "react";
import ProductList from "./Product-component/ProductList";
import Brand from "../Brand";
import BreadCrumb from "../../function/BreadCrumb";

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
