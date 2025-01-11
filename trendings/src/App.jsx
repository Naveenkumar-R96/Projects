import React from 'react'
import { allProducts } from './assets/index'
import Cart from './Components/Cart'

const App = () => {
  return (
  <div className="grid place-items-center py-20">
    <h1 className="text-5xl  text-gray-500 mb-16">
      Trend Alert
    </h1>
    <div className="grid grid-cols-3 place-items-start gap-2">
      {
        allProducts?.map((item)=>(
          <Cart key={item.id}
          item={item}
          />
        ))
      }
    </div>
  </div>
  )
}

export default App
