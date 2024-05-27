"use client";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import sendRequest from "@/utils/axiosUtils";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useRef(null);
  const toastPrefix: any = toast.current;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await sendRequest("GET", "products");
        setProducts(data.products.slice(0, 100));
      } catch (err) {
        console.error("Error fetching products:", err);
        toastPrefix.show({
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
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="-fluid py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 bg-white p-3 rounded-md">
        {products?.map((product, i) => (
          <div key={i}>
            <ProductCard product={product} />{" "}
          </div>
        ))}
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default AllProducts;
