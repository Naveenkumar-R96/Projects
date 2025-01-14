import React from "react";
import CartButton from "./CartButton";
const Cart = ({ item, fromCart }) => {
  const { imageUrl, name,  price, id } = item;
  return (
    <div
    className={`group relative flex flex-col  gap-2 border border-zinc-200 rounded-md bg-white p-4 w-[300px] h-[350px] ${fromCart &&  'w-[200px] h-[200px]'}`}
     
    >
      <img
        src={imageUrl}
        alt={name}
        className={`group-hover:translate-y-2 transition-all  bg-contain text-center p-10 ${fromCart &&  ""}`}
      />
      <div className="absolute bottom-0 left-10">
        <h1 className={`text-zinc-700 text-md mt-10 ${fromCart && 'text-[10px]'}`}>{name}</h1>
        <span>${price}</span>
      </div>
      <CartButton item={item} fromCart={fromCart} />
    </div>
  );
};

export default Cart;
