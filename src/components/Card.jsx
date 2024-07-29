import React from "react";

const Card = ({ product }) => {
  return (
    <div className="w-72 h-96 bg-black text-white dark:bg-white dark:text-black rounded-xl ">
      <div className="w-full h-3/5">
        <img src={product.image} alt="" className="rounded-tl-xl h-full w-full rounded-tr-xl object-cover"/>
      </div>
      <div className="w-full h-2/5">
        <h1>{product.company}</h1>
        <p>Model:{product.model}</p>
        <p>Price: Rs {product.price}</p>
      </div>
    </div>
  );
};

export default Card;
