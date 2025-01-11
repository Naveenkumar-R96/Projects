import { createContext, useContext, useState } from "react";
import { allProducts } from "../assets";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [allItems,setAllItem]=useState([])
    const setItem=()=>{
        setAllItem(allProducts)
    }
    const addToCart=(item)=>{
       console.log(item)
        setAllItem(prevItems=>{
            return(
                prevItems.map((previtem)=>{
                    if(previtem.inCart){
                        return previtem
                    }
                    return previtem.id=== item.id ? {...previtem,inCart:true} :
                    previtem
                })
            )
        })
    }

    const removeFromCart=(item)=>{
        setAllItem((prevItems)=>{
            return prevItems.map((prevItem)=>{
                return prevItem.id===item.id ? {...prevItem,inCart:false,quantity:1} : prevItem
            })
        })
    }
    return(
        <CartContext.Provider value={{allItems,setItem,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(CartContext)
}