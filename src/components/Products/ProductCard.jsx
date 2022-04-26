import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { name, imgURL, price } = product;

  return (
    <div className="productCard">
      <div className="productCard__img">
        <img src={imgURL} alt={name} />
      </div>

      <div className="productCard__content">
        <h4 className="productCard__title">{name}</h4>

        <p className="productCard__price">&#8358;{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
