import React from "react";
import Brand from "../Brand";
import ProductDetailStart from "./Product-Detail/ProductDetailStart";
import BreadCrumb from "../../function/BreadCrumb";

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
