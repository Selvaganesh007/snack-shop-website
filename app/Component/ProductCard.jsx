"use client";
import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(product.minQuantity);
  const [price, setPrice] = useState(
    product.pricePerUnit * product.minQuantity
  );

  const handleAdd = () => {
    const newQuantity = quantity + product.minQuantity;
    setQuantity(newQuantity);
    setPrice(newQuantity * product.pricePerUnit);
  };

  const handleRemove = () => {
    if (quantity > product.minQuantity) {
      const newQuantity = quantity - product.minQuantity;
      setQuantity(newQuantity);
      setPrice(newQuantity * product.pricePerUnit);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="font-semibold mb-2">
          Quantity: {quantity} {product.unit}
        </p>
        <p className="font-bold text-pink-600 mb-4">₹ {price}</p>
        <div className="flex space-x-4">
          <button
            onClick={handleRemove}
            className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded"
          >
            -
          </button>
          <button
            onClick={handleAdd}
            className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
