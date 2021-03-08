import React from "react";
import Brand from "../Brand";
import CategoryStart from "../CategoryStart";
import Feature from "../Feature";
import FeaturedProduct from "../FeaturedProduct";
import NewsletterStart from "../NewsletterStart";
import SliderStart from "../SliderStart";
function Home() {
  return (
    <>
      <SliderStart />
      <Brand />
      <Feature />
      <CategoryStart />
      <NewsletterStart />
      <FeaturedProduct />
    </>
  );
}

export default Home;
