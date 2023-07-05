import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../Styles/Testimonials.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "./Data";

// const Testimonials = () => {
//   return (
//     <div>
//       <b style={{ fontWeight: 100 }}>Testimonials</b>
//     </div>
//   );
// };

// export default Testimonials;
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <div>
        <b style={{ fontWeight: 100 }}>Testimonials</b>
        <h1 className="cutomer" style={{ fontSize: "50px" }}>
          What Customers Says about us
        </h1>{" "}
        <br />
        <br />
        <Slider {...settings}>
          {Data.map((item) => {
            const imageUrl = `https://picsum.photos/20${item.id}`;

            return (
              <>
                <div className="card-2">
                  <img src={imageUrl} alt="" />

                  <h2>Some Title</h2>
                  <h4 style={{ fontWeight: 300 }}>{item.text}</h4>
                  <h3 style={{ letterSpacing: 2 }}>{item.name}</h3>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    );
  }
}
