import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.trim() || !price.trim() || !status.trim()) {
      return;
    }
    addItem({ id: Date.now(), product, status, price });
    setProduct("");
    setPrice("");
    setStatus("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-around mt-10 flex-wrap">
        <input
          type="text"
          placeholder="Product Name"
          className="py-1.5 mt-2 mb-2 px-3 shadow rounded"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          className="py-1.5 mt-2 mb-2 px-3 shadow rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          className="py-1.5 mt-2 mb-2 px-3 shadow rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button
          className="h-10 py-1 px-3 mt-2 mb-2 font-semibold rounded border border-slate-200 text-slate-600 bg-white"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
