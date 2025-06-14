import React from "react";
import ProductCard from "./ProductCard";
import { productList } from "../Data/mockProducts";

export default function Products() {
  return (
    <main id="products" className="min-h-screen bg-pink-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
        Our Sweet Products 🍬
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {(productList || []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}