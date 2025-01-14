import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className="nav_container flex w-[60%] mx-auto py-4 justify-between">
          <div className="nav_logo">
            <h1 className="text-3xl text-[#818181]">Naveen</h1>
          </div>
          <div className="nav_links text-2xl">
            <ul className="flex gap-5 text-[#818181]">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <button className="btn border-2 border-[#818181] text-[#cac4c4] rounded-lg px-4 text-[20px]">
            <Link to="/contact">Let's Talk</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
