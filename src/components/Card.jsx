import React from "react";

const Card = ({ product }) => {
  return (
    <div className="w-72 h-96 bg-white shadow-2xl dark:bg-black dark:text-white rounded-xl dark:shadow-white">
      <div className="w-full h-3/5">
        <img
          src={product.image}
          alt=""
          className="rounded-tl-xl h-full w-full rounded-tr-xl object-cover"
        />
      </div>
      <div className="w-full h-2/5 px-4">
        <h1 className="font-extrabold text-xl">{product.company}</h1>
        <p>Model:{product.model}</p>
        <p>Price: Rs {product.price}</p>
      </div>
    </div>
  );
};

export default Card;
