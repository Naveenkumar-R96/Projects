import React from 'react'
import { useState } from 'react'
import { useCart } from '../context/Cartcontext'

const NavBar = () => {

  const {allItems,setAllItem}=useCart()
  const handleQuery = (e) => {
    const query = e.target.value;
    setAllItem((prevItems) => {
      return prevItems.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
    });
  }

  return (
    <div>
      <div className="nav-containe flex w-full justify-around m-5">
        <h1 className='text-3xl text-zinc-400'>Trenz</h1>
        <input 
          type="text" 
          placeholder='Search' 
          className='border border-zinc-200 rounded p-2' 
         
          onChange={handleQuery} 
        />
       
      </div>
    </div>
  )
}

export default NavBar
