"use client";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import ProductCard from "./ProductCard";
import sendRequest from "@/utils/axiosUtils";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await sendRequest("GET", "products");
        setProducts(data.products); // Assuming the response structure has a `products` key
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error("Error fetching products:", err);
        toast.current?.show({
          severity: "error",
          summary: "error",
          detail: "Error fetching products:",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div>
        Loading... <ProgressSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default ProductList;
