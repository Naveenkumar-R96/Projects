import React from 'react'

const Table = () => {
  return (
   <table className='shadow-lg bg-white mx-auto lg:w-[80%] rounded mt-4'>
    <tr className=''>
        <th className='bg-zinc-100 text-start px-4 py-3'>Id</th>
        <th className='bg-zinc-100 text-start px-4 py-3'>Product Name</th>
        <th className='bg-zinc-100 text-start px-4 py-3'>Price</th>
        <th className='bg-zinc-100 text-start px-4 py-3'>Status</th>
        <th className='bg-zinc-100 text-start px-4 py-3'>Action</th>
    </tr>
    <tr>
        <td className='px-4 py-4'>1</td>
        <td className='px-4 py-4'>Mouse</td>
        <td className='px-4 py-4'>350</td>
        <td className='px-4 py-4'>stocks</td>
        <button type='submit' className='bg-green-700 text-white px-3 py-1.5 rounded mx-2 mt-2'>Edit</button>
        <button type='submit' className='bg-red-700 text-white px-3 py-1.5 rounded '>Delete</button>
    </tr>
   </table>
  )
}

export default Table
