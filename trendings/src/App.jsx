import React, { useEffect } from 'react'
import Cart from './Components/Cart'
import { useCart } from './context/Cartcontext'
import ShoppinCart from './Components/ShoppinCart';

const App = () => {
  const { allItems, setItem } = useCart();

  useEffect(() => {
    setItem();
  }, []);
  useEffect(() => {
    console.log(allItems);
  }, [allItems]);
  return (
  <div className="grid place-items-center py-20">
    <h1 className="text-5xl  text-gray-500 mb-16">
      Trend Alert
    </h1>
    <div className="grid grid-cols-3 place-items-center gap-2 max-md:grid-cols-1  ">
      {allItems && allItems.length > 0 ? (
        allItems.map((item) => (
          <Cart key={item.id} item={item} />
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
    <ShoppinCart/>

  </div>
  )
}

export default App
