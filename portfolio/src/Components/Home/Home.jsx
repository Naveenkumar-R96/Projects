import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="container bg-[#0f0f0f] ">
        <div className="home w-[100%] mx-auto py-[30px] px-[40px] ">
          <div className="top-container w-[100%] flex flex-wrap">
            <div className="left-container py-[30px] px-[30px]  rounded w-[49%] flex ">
              <div className="image-container py-5 px-5 w-[200px] h-[200px] bg-[#323232] rounded-lg">
                <div className="img-box  bg-teal-200 h-[100%] w-[100%] rounded-lg"></div>
              </div>
              <Link to="/about">
                <div className="detail-container ml-8 hover:text-white">
                  <h4 className="text-[#818181] uppercase text-3xl font-medium tracking-[1px] ">
                    A Web Developer
                  </h4>
                  <h3 className=" text-[42px] text-[#d4cfcf] tracking-wide font-medium hover:text-white">
                    NaveenKumar
                  </h3>
                  <p className="text-[#818181]  tracking-[1px] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </p>
                  <div className="icon">
                    <FaAngleDoubleRight className=" text-[#818181] text-3xl transition durastion-500 hover:text-white ml-[80%]" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Container */}

            <div className="right-containe ml-5 w-[49%] py-[30px] px-[30px] ">
              <div className="max-w-[100%]">
                <div className="top-box w-[100%] px-[20px] py-[10px] text-center text-[#6c6c6c] uppercase text-[20px]  ">
                  <p>Latest Works and Feathured</p>
                </div>
                <div className="bottom-box">
                  <div className="box">
                    l
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
