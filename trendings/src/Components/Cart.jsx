import React from 'react'
import CartButton from './CartButton';
const Cart = ({item}) => {
    const { imageUrl ,name,text,price,id} = item;
  return (
    <div className='group relative flex flex-col  gap-2 border border-zinc-200 rounded-md bg-white p-24' key={id}>
      <img src={imageUrl} alt="image" className='group-hover:translate-y-2 transition-all duration-500 w-[200px] h-[200px] bg-cover ' />
      <div className="absolute bottom-5 left-10">
        <h1 className='text-zinc-700 text-md'>{name}</h1>
        <span>${price}</span>
      </div>
      <CartButton item={item}/>
    </div>
  )
}

export default Cart
