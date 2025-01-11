import React from 'react'

const Cart = ({item}) => {
    const { imageUrl } = item;
  return (
    <div className='group flex flex-col gap-y-2 border border-zinc-200 rounded-md bg-white p-24'>
      <img src={imageUrl} alt="image" width={300} height={300} className='group-hover:translate-y-2 transition-all duration-500' />
    </div>
  )
}

export default Cart
