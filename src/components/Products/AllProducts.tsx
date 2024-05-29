"use client";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import sendRequest from "@/utils/axiosUtils";
import ProductCard from "./ProductCard";
import { InputText } from "primereact/inputtext";

interface Product {
  id: number;
  name: string;
  // other product properties
}
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
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

  useEffect(() => {
    const results = products.filter((product: any) =>
      product?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

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
      <div className="mt-3 text-center">
        <InputText
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          style={{ width: "60%" }}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 w-100 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 bg-white p-3 rounded-md">
        {filteredProducts.map((product, i) => (
          <div key={i}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default AllProducts;
