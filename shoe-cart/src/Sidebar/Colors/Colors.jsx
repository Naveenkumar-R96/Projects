import React from 'react'
import "./Colors.css"
const Colors = () => {
  return (
    <div>
    <div className="ml">
     
      <label htmlFor="" className='sidebar-label-container color-title'>
        <input type="radio" name='test2' />
        <span className='checkmark'></span>All
      </label>
      <label htmlFor="" className='sidebar-label-container'>
        <input type="radio" name='test2' />
        <span className='checkmark'></span>Black
      </label>
      <label htmlFor="" className='sidebar-label-container'>
        <input type="radio" name='test2' />
        <span className='checkmark'></span>Blue
      </label>
      <label htmlFor="" className='sidebar-label-container'>
        <input type="radio" name='test2' />
        <span className='checkmark'></span>Red
      </label>
      <label htmlFor="" className='sidebar-label-container'>
        <input type="radio" name='test2' />
        <span className='checkmark'></span>Green
      </label>
    </div>
  </div>
  )
}

export default Colors
