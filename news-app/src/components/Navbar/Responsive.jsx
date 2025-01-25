import React from 'react'

const Responsive = ({open,setOpen}) => {
  return (
    <div className='content'>
      {open && (
       <ul className='responsive'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
       </ul>
      )
      
      }
    </div>
  )
}

export default Responsive
