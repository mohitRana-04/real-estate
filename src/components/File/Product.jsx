import React from "react";

export default function Product(props) {
  const imageUrl = `https://picsum.photos/20${props.url}/200`;
  return (
    <div className="card">
      <img className="product--image" src={imageUrl} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}
