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
      slidesToScroll: 3,
    };

    return (
      <div>
        <b style={{ fontWeight: 100 }}>Testimonials</b>
        <h1 style={{ fontSize: "50px" }}>What Customers Says about us</h1>
        <Slider {...settings}>
          {Data.map((item) => {
            const imageUrl = `https://picsum.photos/20${item.id}`;

            return (
              <>
                <div className="card-2">
                  <img style={{ borderRadius: "50%" }} src={imageUrl} alt="" />
                  {/* <span>{item.place}</span> */}

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
