import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className="nav-containe flex w-full justify-around m-5">
            <h1 className='text-3xl text-zinc-400'>Trenz</h1>
            <input type="text" placeholder='Search'className='border border-zinc-200 rounded p-2 ' />
        </div>
    </div>
  )
}

export default NavBar
