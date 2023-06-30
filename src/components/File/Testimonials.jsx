import React from "react";
import { Data } from "./Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="center">
      <b style={{ fontWeight: 100 }}>Testimonials</b>
      <h1>This is what the Owner and</h1>
      <h1>Dealer have to say</h1>
      <div>
        <Slider {...settings}>
          {Data.map((item) => {
            return (
              <>
                <div className="card">
                  <h4>{item.name}</h4>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
