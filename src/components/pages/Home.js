import React from "react";
import Brand from "../Brand";
import CallUs from "../CallUs";
import CategoryStart from "../CategoryStart";
import Feature from "../Feature";
import FeaturedProduct from "../FeaturedProduct";
import NewsletterStart from "../NewsletterStart";
import RecentProduct from "../RecentProduct";
import Review from "../Review";
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
      <CallUs />
      <RecentProduct />
      <Review />
    </>
  );
}

export default Home;
