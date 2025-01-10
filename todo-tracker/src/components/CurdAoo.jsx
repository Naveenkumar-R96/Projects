import React from "react";
import Form from "./Form";
import { useState } from "react";
import Table from "./Table";
const CurdAoo = () => {
  const [items, setItems] = useState([]);

  const addItems=(item)=>{
    setItems([...items,{id: Date.now(),...item}])
  
  }
  

  return (
    <div className="w-3/4 bg-[#1d293d] shadow-lg rounded  py-10 px-3">
      <h2 className="text-center text-4xl/9 font-bold tracking-tighter text-white">
        Crud App
      </h2>
      <Form addItems={addItems} />
      <Table />
    </div>
  );
};

export default CurdAoo;
