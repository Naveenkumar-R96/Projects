import React from 'react'
import { IoMailUnread } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { TiLocation } from "react-icons/ti";
import './Contact.css'

const Contact = () => {
  return (
   <>
    <div className="contact bg-black text-white py-5 px-7 w-[100%]">
      <div className="contacting-container max-w-[100%] flex">
        <div className="left-  py-5 px-7 w-[30%]">
         <h1 className='text-xl uppercase tracking-wider'>Contact Information</h1>
         <div className="infoo mt-3 ">
          <div className="infoo-box ">
            <div className="icons">
            <IoMailUnread />
            </div>
            <div className="details">
              <h4>Mail Me</h4>
              <p>nk946432@gmail.com</p>
            </div>
          </div>
          <div className="infoo-box flex items-center">
            <div className="icons">
            <LuPhoneCall />
            </div>
            <div className="details">
              <h4>Contact Me</h4>
              <p>+91 9344049020</p>
            </div>
          </div>
          <div className="infoo-box flex items-center">
            <div className="icons">
            <TiLocation />

            </div>
            <div className="details">
              <h4>Location</h4>
              <p> V.Nagar 18 Rasipuram</p>
              <p> TamilNadu </p>
              <p> India</p>
            </div>
          </div>
         </div>
        </div>
        <div className="rightu">
          <h2>Message ME</h2>
          <div className="form"></div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Contact
