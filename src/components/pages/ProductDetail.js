import React from "react";
import Brand from "../Brand";
import BreadCrumb from "./Product-component/BreadCrumb";
import ProductDetailStart from "./Product-Detail/ProductDetailStart";

function ProductDetail() {
  return (
    <>
      <BreadCrumb />
      <ProductDetailStart />
      <Brand />
    </>
  );
}

export default ProductDetail;
