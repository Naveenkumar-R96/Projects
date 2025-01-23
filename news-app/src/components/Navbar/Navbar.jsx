import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    const categories =["Business","Entertainment","General","Health","Science","Sports","Technology"]
  return (
  <nav className='header'>
    <div className="logo">
        <h4>Naveen Kumar</h4>
        <small>NewsApp</small>
    </div>
    <ul className='category-list'>
        {categories.map((categoryName)=>{
            return (<li key={categoryName} className='category-item'>{categoryName}</li>)
        })}
    </ul>
    <div className="search-bar">
        <form action="">
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
