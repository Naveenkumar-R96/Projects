import React from 'react'
import Nav from "./Navigation/Nav"  
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from './Sidebar/Sidebar'
import './App.css'
const App = () => {
  return (
    <body>
    <Sidebar/>
    <Nav/>
    <Recommended/>
    <Products/>
    
    </body>
  )
}

export default App
