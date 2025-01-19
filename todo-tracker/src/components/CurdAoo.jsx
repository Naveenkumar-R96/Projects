import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [currentItem,seCurrentItem]=useState(null);
  // Load items from localStorage when the component mounts

  useEffect(()=>{
    const stored=JSON.parse(localStorage.getItem('items'))
    if(stored && stored.length >0){
      setItems(stored)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(items))
  },[items])

  const editItem=(item)=>{
    seCurrentItem(item)
  }

  const addItems = (item) => {
    if(currentItem){
      const updateItem=items.map(i=>(i.id===currentItem.id ? item : i))
      setItems(updateItem)
      seCurrentItem(null)
    }
    
    else{
      setItems([...items,{id:Date.now(),...item}])
    }
    
   
    
  console.log(item)
  };
  return (
    <div className="w-3/4 bg-[#1d293d] shadow-lg rounded  ">
      <h2 className="text-center text-4xl font-bold tracking-tighter text-white">
        Todo tracker
      </h2>
      <Form addItems={addItems} currentItem={currentItem}/>
      <Table items={items} setItem={setItems}  editItem={editItem}/>
      
    </div>
  );
};

export default CrudApp;
