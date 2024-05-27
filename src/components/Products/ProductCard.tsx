import React from "react";

const ProductCard = ({ product }: any) => {
  return (
    <div className="rounded shadow-lg p-2 bg-white">
      <div className="px-6 py-4">
        <img
          src={`${product.thumbnail}`}
          alt={product.image}
          style={{ maxWidth: "100%" }}
          className="shadow-2 border-round"
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
