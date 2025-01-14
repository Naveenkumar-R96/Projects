import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <>
      <div className="bg-black text-">
        <div className="nav_container flex w-[60%] mx-auto py-4 justify-between">
          <div className="nav_logo">
            <h1 className="text-3xl text-[#818181]">Naveen</h1>
          </div>
          <motion.div
            className="nav_links text-2xl max-sm:hidden px-4 rounded-full border-2 border-[#c5c3c3] hover:border-[#cbc9c9] transition duration-150 "
            initial={{y: "-10vw" }}
            animate={{ y: 0.5 }}
            transition={{
              duration: 1,
            }}
          >
            <ul className="flex gap-5 text-[#818181] "> 
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
          <button className="btn border-2 border-[#818181] text-[#cac4c4] rounded-lg px-4 text-[20px]">
            <Link to="/contact">Let's Talk</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
