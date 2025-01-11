import React from "react";
import { useCart } from "../context/Cartcontext";

const CartButton = ({ item }) => {
  const { addToCart,removeFromCart } = useCart();
  return (
    <div className="w-max absolute right-5 top-5">
      <div className="space-x-3">
        {!item.inCart ? (
          <button
            className="bg-zinc-400 border rounded-md px-2 py-1 text-sm text-white hover:bg-zinc-500 transition-colors"
            onClick={() => addToCart(item)}
          >
            Add To Cart
          </button>
        ) : (
          <div>
            <div className="flex">
              <button className="border rounded-lg px-3">-</button>
              <p className="flex items-center gap-x-1 mx-1">
                <span className="min-w-7 bg-gray-100 grid place-items-center border rounded-full">
                  1
                </span>
                <span className="text-xs">in cart</span>
              </p>
              <button className="border rounded-lg px-3">+</button>
            </div>
            <button className="bg-pink-300 mx-auto mt-3 block rounded-md px-2 py-1 text-white " onClick={()=>removeFromCart(item)}>Remove</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartButton;
