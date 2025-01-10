import React from "react";

const Table = ({ items ,setItem,editItem}) => {

 const handleDelete=(id)=>{
  const update = items.filter((item)=>(
    item.id !== id
  ))
 setItem(update)
 }

  return (
    <div  className=' overflow-auto '>
    <table className="shadow-lg bg-white  table-auto rounded mt-4 w-full border-collapse border border-slate-500">
      <tr className="">
        <th className="bg-zinc-100 text-center border border-slate-500  px-4 py-3 w-20px">Number</th>
        <th className="bg-zinc-100 text-center border border-slate-500  px-4 py-3 w-200px">Work</th>
        <th className="bg-zinc-100 text-center border border-slate-500  px-4 py-3">Start Time</th>
        <th className="bg-zinc-100 text-center border border-slate-500  px-4 py-3">End Time</th>
        <th className="bg-zinc-100 text-center border border-slate-500  px-4 py-3">Status</th>
      </tr>
    { items.length > 0 ? (items.map((item, ind) => (
        <tr key={ind}>
          <td className="px-4  border text-center border-slate-500 py-4">{ind+1}</td>
          <td className="px-4  border text-center border-slate-500 py-4">{item.product}</td>
          <td className="px-4  border text-center border-slate-500 py-4">{item.price}</td>
          <td className="px-4  border text-center border-slate-500 py-4">{item.status}</td>
          <td className="text-center">
          <button type='submit' onClick={()=>editItem(item)} className='bg-green-700 text-white px-3 m-2 py-1.5 rounded mx-2 mt-2'>Edit</button>
          <button type='submit' className='bg-teal-500 text-white px-3 m-2 py-1.5 rounded '
          onClick={()=>handleDelete(item.id)}>Done</button>
          </td>
        </tr>
      ))) : <p className="text-center w-[100%]">No Record Found</p> }
      {/*  <tr>
       
      
    </tr>*/}
    </table>
    </div>
  );
};

export default Table;
