import React from "react";
import "../Styles/Product.css";
export default function Product(props) {
  const imageUrl = `https://picsum.photos/20${props.id}`;
  return (
    <div className="card-3">
      <img className="product--image" src={imageUrl} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}
