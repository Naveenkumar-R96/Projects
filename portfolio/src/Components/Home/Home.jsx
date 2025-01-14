import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";
const Home = () => {
  const items = ["React", "JavaScript", "Framer Motion",'Tailwind','Bootstrap','TypeScript', "CSS", "HTML"];
  return (
    <>
      <div className=" bg-[#0f0f0f] ">
        <div className="home w-[100%] mx-auto py-[30px] px-[40px] ">
          <div className="top-container w-[100%] flex flex-wrap">
            <motion.div
              className="left-container py-[30px] px-[30px]  rounded w-[49%] flex "
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
              }}
            >
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
            </motion.div>

            {/* Right Container */}

            <motion.div className="right-container ml-5 w-[49%] py-[30px] px-[30px] "
            
             initial={{ y: "-100vw" }}
             animate={{ y: 0 }}
             transition={{
               duration: 1,
             }}>
              <div className="">
                <div className="top-box w-[100%] px-[20px] py-[10px] text-center text-[#6c6c6c] uppercase text-[20px]  ">
                  <p>Fields that can work with</p>
                </div>
                <div className="bottom-box mt-6 flex w-full ">
                  <div className="box  w-full p-7">
                      {/* <p>More abut me</p> */}
                      <div className="scrol"
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          width: "auto",
                        }}
                      >
                        <motion.div
                          style={{
                            display: "flex",
                            gap: "40px",
                            fontSize: "24px",
                            fontWeight: "bold",
                          }}
                          animate={{
                            x: [0, -1000], // Adjust -1500 based on the total width of your content
                          }}
                          transition={{
                            repeat: Infinity, // Loop infinitely
                            ease: "linear",
                            duration: 9, // Adjust the speed of scrolling
                          }}
                        >
                          {/* Repeat the items twice to create a seamless scrolling effect */}
                          {items.concat(items).map((word, index) => (
                            <div
                              key={index}
                              style={{
                               
                                padding: "10px 20px",
                                background: "#f0f0f0",
                                borderRadius: "8px",
                                color: "#333",
                              }}
                            >
                              {word}
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
