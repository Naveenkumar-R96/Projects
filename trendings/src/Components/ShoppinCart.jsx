import { ImCancelCircle } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useCart } from "../context/Cartcontext";
import Cart from './Cart'
import { formatCurrency } from "../util/Formatcurrency";

const ShoppinCart = ({}) => {
  const [isoopen, setisopen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrcie, setTotalPrice] = useState(0);

  

  const { allItems } = useCart();

  useEffect(() => {
    const inCartItem = allItems.filter((item) => {
      return item.inCart;
    });
    setCartItems(inCartItem?.reverse())
    const price=inCartItem.reduce((acc,curr)=>{
        return acc+curr.price
    },0)
    setTotalPrice(price)
  }, [allItems]);

  return (
    <>
    {cartItems.length!==0 &&(<div
        className={`w-[300px] h-screen bg-greay-100 fixed top-0 z-30 border-l-4 rounded-tl-lg bg-gray-200 border-red-300 ${
          isoopen ? "right-0 " : "-right-[300px]"
        }`}
      >
        <div className="w-full h-16 bg-white absolute left-0 top-0 z-10 grid place-items-center border rounded-lg">
          <h1 className="text-xl text-gray-600 ">Shopping Cart</h1>
          <button className="w-9 h-9 bg-yellow-400 absolute right-3 z-20 grid place-items-center border-2 rounded-full">
            <ImCancelCircle
              className="text-white"
              onClick={() => setisopen(false)}
            />
          </button>
        </div>
        <button
          className="w-9 h-9 bg-yellow-400 absolute -left-14 top-3 z-20 grid place-items-center border-2 rounded-full"
          onClick={() => setisopen(true)}
        >
          <GiShoppingCart className="text-xl text-white" />
          <span className="w-6 h-6 bg-pink-400 absolute -bottom-4 -left-2 grid place-items-center border border-gray-300 rounded-full text-sm text-white">{cartItems.length>9 ? "9+":cartItems.length}</span>
        </button>
        <div className="h-screen flex flex-col gap-y-3 overflow-y-scroll px-5 pb-24 pt-20">
            {cartItems?.map((item)=>{
                return <Cart key={item.id} item={item} fromCart={true}/>
            })}
        </div>
        <div className="w-full h-20 bg-white absolute bottom-0 left-0 z-10 grid place-items-center border border-rounded-lg">
          <h1 className="text-xl">Total : {formatCurrency(totalPrcie)}</h1>
          <button className="rounded-md bg-blue-300 px-2 text-white hover:bg-blue-400">
            submti
          </button>
        </div>
      </div>)}
      
    </>
  );
};

export default ShoppinCart;
