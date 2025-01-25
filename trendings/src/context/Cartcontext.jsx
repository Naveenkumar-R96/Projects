import { createContext, useContext, useState } from "react";
import { allProducts } from "../assets";
import { useEffect } from "react";
import { getItemFromStorage,getParsedItemFromStorage,setItemInStorage } from "../util/localStorage";
const CartContext=createContext();

export const CartProvider=({children})=>{
    const [allItems,setAllItem]=useState([])
    const setItem=()=>{
        setAllItem(allProducts)
    }
    
      useEffect(() => {
        setItem();
      }, []);

     /*  useEffect(() => {
          console.log(allItems);
        }, [allItems]);
 */
    const addToCart=(item)=>{
       
        setAllItem(prevItems=>{
            return(
               
                prevItems.map((previtem)=>{
                   
                    return previtem.id=== item.id ? {...previtem,inCart:true} :
                    previtem
                })
            )
        })
    }
   
    const removeFromCart=(item)=>{
        setAllItem((prevItems)=>{
            return prevItems.map((prevItem)=>{
                return prevItem.id===item.id ? {...prevItem,inCart:false} : prevItem
            })
        })
    }

    const updateQuantity=(cartItem,amount)=>{
        setAllItem((prevItem)=>{
            return prevItem.map((item)=>{
                return (
                    item.id === cartItem.id ? { ...item, quantity: item.quantity + amount } : item
                )
            })
        })
    }

    const setLocalStorage=()=>{
        if(allItems.length!== 0){
            const inCartItems=allItems.filter((item)=>item.inCart)
            setItemInStorage('cartitem',inCartItems)
        }
    }

   

    return(
        <CartContext.Provider value={{allItems,setItem,addToCart,removeFromCart,updateQuantity,setAllItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(CartContext)
}