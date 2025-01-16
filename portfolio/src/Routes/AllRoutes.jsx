import React from "react";
import About from "../Components/About/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import PagenotFound from "../Components/PageNotFound/PagenotFound";
import Works from "../Components/Works/Works";
import Contact from "../Components/Contact/Contact";


const AllRoutes = () => {
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Works />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<PagenotFound />} />
  </Routes>
   
  );
};

export default AllRoutes;
