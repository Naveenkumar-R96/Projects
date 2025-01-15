import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiMenu5Line } from "react-icons/ri";
import Responsive from "./Responsive";

const Nav = () => {
  const [open,setopen]=useState(false)
  return (
    <>
      <div className="bg-black text-">
        <div className="nav_container flex w-[100%] mx-auto py-4 justify-between px-5">
          <div className="nav_logo">
            <h1 className="text-3xl text-[#818181]">Naveen</h1>
          </div>
          <motion.div
            className="nav_links text-2xl max-sm:hidden px-4 rounded-full border-2 border-[#c5c3c3] hover:border-[#cbc9c9] transition duration-150 hidden md:block "
            initial={{y: "-10vw" }}
            animate={{ y: 0.5 }}
            transition={{
              duration: 1,
            }}
          >
            <ul className="flex gap-5 text-[#818181] item-center "> 
              <li>
                <Link
                  to="/"
                  className="link hover:text-[#e4e0e0] transition duration-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="link hover:text-[#e4e0e0] transition duration-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="link hover:text-[#e4e0e0] transition duration-500"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="link hover:text-[#e4e0e0] transition duration-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <button className="btn border-2 border-[#818181] text-[#cac4c4] rounded-lg px-4 text-[20px] hidden md:block">
            <Link to="/contact">Let's Talk</Link>
          </button>
          <div className="md:hidden">
          <RiMenu5Line className="text-white text-2xl mt-2"  onClick={()=>setopen(!open)}/>

          </div>
        </div>
        <Responsive open={open}/>
      </div>
    </>
  );
};

export default Nav;
