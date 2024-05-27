"use client";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import sendRequest from "@/utils/axiosUtils";
import ProductDataTable from "./ProductDataTable";
import ProductCount from "./ProductCount";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useRef(null);

  const countProductsByCategory = (products: any) => {
    const first100Products = products.slice(0, 100);
    const categoryCounts = first100Products.reduce((acc: any, product: any) => {
      const category = product.category;
      if (acc[category]) {
        acc[category]++;
      } else {
        acc[category] = 1;
      }
      return acc;
    }, {});
    const result = Object.keys(categoryCounts).map((category) => ({
      label: category,
      count: categoryCounts[category],
    }));
    return result;
  };

  const categoryCounts = countProductsByCategory(products);
  const toastPrefix: any = toast.current;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await sendRequest("GET", "products");
        setProducts(data.products.slice(0, 100));
        countProductsByCategory(data.products); // Assuming the response structure has a `products` key
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
        Loading... <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="-fluid py-6">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 bg-white p-3 rounded-md">
        {categoryCounts.map((category, i) => (
          <div key={i} className="bg-[#fafafc] p-5 text-center rounded-lg">
            <h1 className="font-bold my-3 capitalize">{category.label}</h1>
            <p className="text-lg">{category.count}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-1 rounded-md mt-4 p-5">
        <div>
          <ProductCount categoryCounts={categoryCounts} />
        </div>
      </div>
      <div className="bg-white p-1 rounded-md mt-5 p-5">
        <div className="mt-5">
          <ProductDataTable products={products} />
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default ProductList;
