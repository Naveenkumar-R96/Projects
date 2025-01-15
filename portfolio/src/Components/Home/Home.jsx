import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { BsPersonWorkspace, BsTwitterX } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import { GiFallingStar } from "react-icons/gi";
import profile from "../../assets/img/profile.jpg";
import pc from "../../assets/img/pc.png";
import { useRef } from "react";
const Home = () => {
  const items = [
    "React",
    "JavaScript",
    "Framer Motion",
    "Tailwind",
    "Bootstrap",
    "TypeScript",
    "CSS",
    "HTML",
    "Github",
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); //
  return (
    <>
      <div className="bg-[#0f0f0f] h-auto">
        <div className="home w-[100%] mx-auto py-[30px] px-[40px] max-sm:px-[20px]">
          <div className="top-container flex flex-wrap max-sm:flex-nowrap max-sm:gap-3 justify-evenly items-center">
            <motion.div
              className="left-container py-[20px] px-[20px] rounded w-[60%] flex justify-center max-sm:w-auto"
              initial={{ x: "50%", y: "50%" }}
              animate={{ x: 0, y: 0 }}
              transition={{
                duration: 1,
              }}
            >
              <div className="image-container py-5 px-5 w-[200px] h-[200px] bg-[#323232] rounded-lg mr-8 max-sm:hidden">
                <div className="img-box h-[100%] w-[100%] rounded-lg">
                  <img src={profile} alt="" className="rounded-2xl" />
                </div>
              </div>
              <Link to="/about">
                <div className="detail-container hover:text-white">
                  <h4 className="text-[#818181] uppercase text-3xl font-medium tracking-[1px] max-sm:text-xl">
                    A Web Developer
                  </h4>
                  <h3 className="text-[42px] text-white tracking-wide font-medium hover:text-white max-sm:text-3xl">
                    NaveenKumar
                  </h3>
                  <p className="text-[#818181] tracking-[1px] font-semibold max-sm:text-sm">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </p>
                  <div className="icon">
                    <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white ml-[80%] max-sm:ml-[80%] md:mt-8" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="contact-container text-white w-[20%] h-auto p-4 max-sm:w-[40%] max-sm:h-auto"
              initial={{ y: "100vw" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
              }}
            >
              <div className="flex justify-evenly text-4xl mt-4 max-sm:mt-1 max-sm:text-2xl">
                <FaGithub className="bg-white text-black rounded-full" />
                <FaLinkedin className="" />
                <BsTwitterX className="" />
              </div>
              <h3 className="uppercase text-2xl text-[#818181] mt-2 ml-3 max-sm:text-xl">
                Stay with me
              </h3>
              <h1 className="text-4xl tracking-wider ml-3 max-sm:text-2xl">
                Profiles{" "}
                <span>
                  <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white ml-[70%] max-sm:ml-[50%]" />
                </span>
              </h1>
            </motion.div>
          </div>
        </div>

        <section className="mid-container max-w-[90%] m-auto">
          <div className="flex justify-evenly max-sm:flex-wrap">
            <motion.div
              className="mid-box w-[20%] h-[200px] flex flex-col justify-center items-center p-4 pb-5 mt-4 max-sm:w-[75%] max-sm:mb-4"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
              }}
            >
              <div className="icon-box">
                <BsPersonWorkspace className="text-white text-[100px]" />
              </div>
              <div className="mid-details flex justify-start">
                <div className="mid-info">
                  <p className="uppercase text-[#bebdbd] text-2xl mt-3 max-sm:text-xl">
                    Major Works
                  </p>
                  <p className="text-[20px] text-white max-sm:text-2xl">Projects</p>
                </div>
                <div className="mid-icon">
                  <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white mt-[100%] ml-[90%]" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="right-container ml-5 w-[70%] py-[30px] px-[30px] max-sm:w-full max-sm:ml-0 max-sm:px-[10px]"
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
              }}
            >
              <div>
                <div className="top-box w-[100%] px-[20px] py-[10px] text-center text-[#6c6c6c] uppercase text-[20px] max-sm:text-[16px]">
                  <p>Fields that can work with</p>
                </div>
                <div className="bottom-box mt-6 flex w-full">
                  <div className="box w-full p-7">
                    <div
                      className="scrol"
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
                          x: [0, -1000],
                        }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          duration: 9,
                        }}
                      >
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
        </section>

        <motion.section className="flex mt-9 justify-around mb-[300px] gap-2 max-w-[90%] m-auto"
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{
            duration: 0.8,
            ease: "easeOut",}}>
          <div
            className="specialization w-[25%] h-[200px] flex gap-5 justify-center p-5 mb-[300px]"
          
            
          >
            <div className="icons-container mt-7 text-white text-[90px]">
              <PiCertificateLight />
            </div>
            <div>
              <h3 className="text-2xl text-[#818181] mt-5">Achievements</h3>
              <h1 className="text-white mt-3 text-3xl">Credential</h1>
              <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white ml-[80%] mt-3" />
            </div>
          </div>
          <div className="projects w-[40%] h-[200px] bg-gradient-to-r from-[#383737] to-[#181818] rounded-lg flex justify-evenly">
            <img
              src={pc}
              alt=""
              className="w-[200px] h-[100%]"
              style={{ filter: "contrast(0)" }}
            />
            <div>
              <h3 className="text-[#818181] text-2xl mt-5">Works</h3>
              <h1 className="text-4xl text-white">
                My major Works and Projects
              </h1>
              <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white ml-[80%] mt-3" />
            </div>
          </div>
          <div className="talk w-[20%] bg-gradient-to-r from-[#383737] to-[#181818] rounded-lg h-[200px] ">
            <GiFallingStar className="text-white mt-5 ml-5 text-5xl " />
            <h1 className="mt-4 ml-5 text-4xl text-white">
              Lets Work Together{" "}
              <span>
                <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white ml-[70%] " />
              </span>
            </h1>
          </div>
        </motion.section> 
      </div>
    </>
  );
};

export default Home;
