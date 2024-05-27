"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { InputText } from "primereact/inputtext";

const ProductDataTable = ({ products }: any) => {
  const [globalFilter, setGlobalFilter] = useState<any>(null);

  const formatCurrency = (value: any) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (product: any) => {
    return (
      <img
        src={`${product.thumbnail}`}
        alt={product.image}
        style={{ maxWidth: "70px" }}
        className="w-2rem shadow-2 border-round"
      />
    );
  };

  const priceBodyTemplate = (product: any) => {
    return formatCurrency(product.price);
  };

  const ratingBodyTemplate = (product: any) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };

  const header = (
    <div className="flex align-items-center justify-end gap-2">
      <span className="p-input-icon-left">
        <i className="pi pi-search ms-3" />
        <InputText
          type="search"
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="ps-8"
        />
      </span>
    </div>
  );
  const footer = `In total there are ${
    products ? products.length : 0
  } products.`;

  return (
    <div className="card">
      <DataTable
        value={products}
        header={header}
        footer={footer}
        globalFilter={globalFilter}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column sortable field="title" header="Name"></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column
          sortable
          field="price"
          header="Price"
          body={priceBodyTemplate}
        ></Column>
        <Column sortable field="category" header="Category"></Column>
        <Column
          sortable
          field="rating"
          header="Reviews"
          body={ratingBodyTemplate}
        ></Column>
      </DataTable>
    </div>
  );
};

export default ProductDataTable;
