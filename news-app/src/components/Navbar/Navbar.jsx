import React from 'react'
import "./Navbar.css"
import { useNewsContext } from '../Context/Context'
import Responsive from './Responsive'
import { useState } from 'react'
const Navbar = () => {



    const [open,setOpen]=useState(false)

    const categories =["Business","Entertainment","General","Health","Science","Sports","Technology"]

    const {category,changeCategory,setQuery}=useNewsContext()

    const handleSearch=(e)=>{
        e.preventDefault()
        const query=e.target.elements.search.value.trim()
       
        setQuery(query)}

  return (
  <nav className='header'>
    <div className="logo">
        <h4>Naveen Kumar</h4>
        <small>NewsApp</small>
    </div>
    <ul className='category-list'>
        {categories.map((categoryName)=>{
            return (<li key={categoryName} onClick={()=>(changeCategory(categoryName))}>{categoryName}</li>)
        })}
    </ul>
    <h1 onClick={()=>setOpen(!open)} className='toggler'>haai</h1>
    <Responsive open={open} setOpen={setOpen}/>
    <div className="search-bar">
        <form action="submit" onSubmit={handleSearch}>
            <input type="text" name='search' placeholder='search News' />
            <button type='submit'>
                search
            </button>
        </form>
    </div>
  </nav>
  )
}

export default Navbar
