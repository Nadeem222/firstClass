import React from "react";

const Card = ({ product }) => {
  return (
    <div className="w-128 h-64 bg-white rounded-xl flex">
      <div className="w-2/4/2">
        <img src={product.image} alt="" className="rounded-tl-xl h-full  rounded-bl-xl object-cover"/>
      </div>
      <div className="w-1/2">
        <h1>{product.company}</h1>
        <p>Model:{product.model}</p>
        <p>Price: Rs {product.price}</p>
      </div>
    </div>
  );
};

export default Card;
