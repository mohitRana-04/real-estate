import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Data, responsive } from "./Data";
import Product from "./Product";
const Testimonials = () => {
  const product = Data.map((item) => (
    <Product
      name={item.place}
      // url={item.imageurl}
      id={item.id}
      price={item.name}
      description={item.description}
    />
  ));
  return (
    <div>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};

export default Testimonials;
