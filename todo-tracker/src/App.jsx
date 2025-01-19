import React from 'react'
import CurdAoo from './components/CurdAoo'
import { FaHeart } from 'react-icons/fa'
const App = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen '>
      <CurdAoo/>
      
    </div>
    <p className="text-white justify-center gap-2 mb-4 flex ">With <FaHeart className="foot-icon text-red-600"/> Naveen </p>
    </>
  )
}

export default App
