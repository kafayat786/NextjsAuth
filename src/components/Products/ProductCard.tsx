import React from "react";

const ProductCard = ({ product }: any) => {
  return (
    <div
      className="rounded shadow-lg p-2 my-1 bg-white"
      style={{ minHeight: "320px" }}
    >
      <div className="px-6 pb-2 text-center">
        <img
          src={`${product.thumbnail}`}
          alt={product.image}
          style={{ maxWidth: "190px" }}
          className="shadow-2 border-round m-auto"
        />
        <div className="font-bold text-xl mb-2 text-center">
          {product.title}
        </div>
        <p className="text-gray-700 font-bold text-base text-center">
          Price: ${product.price}
        </p>
        {/* Add other product details as needed */}
      </div>
    </div>
  );
};

export default ProductCard;
