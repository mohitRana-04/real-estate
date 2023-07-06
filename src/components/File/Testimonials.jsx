import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
// import { productData, responsive } from "./data";
import { Data, responsive } from "./Data";
import "../Styles/Testimonials.css";

export default function App() {
  const product = Data.map((item) => (
    <Product
      name={item.name}
      url={item.id}
      price={item.place}
      description={item.text}
    />
  ));

  return (
    <div className="App">
      <h1>Testimonials</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
