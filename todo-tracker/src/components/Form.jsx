import React, { useEffect, useState } from "react";

const Form = ({ addItems,currentItem }) => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.trim() || !price.trim() || !status.trim()) {
      return;
    }
    addItems({ id: Date.now(), product, status, price });
    setProduct("");
    setPrice("");
    setStatus("");
  };

  useEffect(()=>{
    if(currentItem){
      setProduct(currentItem.product)
      setPrice(currentItem.price)
      setStatus(currentItem.status)
    }
  },[currentItem])


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2  justify-center mt-10 flex-wrap max-sm:">
        <input
          type="text"
          placeholder="To Do"
          className="py-1.5 mt-2 mb-2 px-3 shadow rounded text-center gap-2 "
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          placeholder="Start Time"
          className="py-1.5 mt-2 mb-2 px-3 shadow rounded text-center "
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="End Time"
          className="py-1.5 mt-2 mb-2 px-3 shadow rounded text-center "
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button
          className="h-10 py-1 px-3 mt-2 mb-2 font-semibold rounded border  text-black bg-teal-300"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
