import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";
import project from "../../assets/img/my-works.png";
import profile from "../../assets/img/profile.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
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
  return (
    <>
      <div className="bg-[#0f0f0f] h-auto">
        <div className="home w-[100%] mx-auto py-[30px] px-[40px]">
          <div className="top-container w-[100%] flex flex-wrap justify-evenly">
            <motion.div
              className="left-container py-[30px] px-[30px] rounded w-[60%] flex justify-center"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
              }}
            >
              <div className="image-container py-5 px-5 w-[200px] h-[200px] bg-[#323232] rounded-lg mr-8">
                <div className="img-box h-[100%] w-[100%] rounded-lg">
                  <img src={profile} alt="" className="rounded-2xl" />
                </div>
              </div>
              <Link to="/about">
                <div className="detail-container ml-8 hover:text-white w-[70%]">
                  <h4 className="text-[#818181] uppercase text-3xl font-medium tracking-[1px]">
                    A Web Developer
                  </h4>
                  <h3 className="text-[42px] text-white tracking-wide font-medium hover:text-white">
                    NaveenKumar
                  </h3>
                  <p className="text-[#818181] tracking-[1px] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </p>
                  <div className="icon">
                    <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white ml-[80%]" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="contact-container text-white w-[20%] h-[200px] mt-10 p-4">
              <div className="flex justify-evenly text-4xl mt-4">
                <FaGithub className="bg-white text-black rounded-full" />
                <FaLinkedin className="" />
                <BsTwitterX className="" />
              </div>
              <h3 className="uppercase text-2xl text-[#818181] mt-4 ml-5">
                Stay with me
              </h3>
              <h1 className="text-4xl tracking-wider ml-5">
                Profiles{" "}
                <span>
                  <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white ml-[70%]" />
                </span>
              </h1>
            </div>
          </div>
        </div>

        <section className="mid-container max-w-[90%] m-auto">
          <div className="flex justify-evenly">
            <div className="mid-box w-[20%] h-[200px] flex flex-col justify-center items-center p-4 pb-5 mt-4">
              <div className="icon-box">
                <BsPersonWorkspace className="text-white text-[100px]" />
              </div>
              <div className="mid-details flex justify-start">
                <div className="mid-info">
                  <p className="uppercase text-[#bebdbd] text-2xl mt-3">
                    Experiences
                  </p>
                  <p className="text-[20px] text-white">Internships</p>
                </div>
                <div className="mid-icon">
                  <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white mt-[100%] ml-[90%]" />
                </div>
              </div>
            </div>
            <motion.div
              className="right-container ml-5 w-[70%] py-[30px] px-[30px]"
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
              }}
            >
              <div>
                <div className="top-box w-[100%] px-[20px] py-[10px] text-center text-[#6c6c6c] uppercase text-[20px]">
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

        <section className="flex justify-around mb-[300px]">
          <div className="specialization w-[30%] h-[200px] flex gap-5 justify-center p-5 mb-[300px]">
            <div className="icons-container mt-7 text-white text-[90px]">
              <PiCertificateLight />
            </div>
            <div>
              <h3 className="text-3xl text-[#818181] mt-5">Achievements</h3>
              <h1 className="text-white mt-3 text-4xl">Credential</h1>
              <FaAngleDoubleRight className="text-[#818181] text-3xl transition duration-500 hover:text-white ml-[90%] mt-3" />
            </div>
          </div>
          <div className="projects w-[50%] h-[200px] bg-gradient-to-r from-[#383737] to-[#181818] rounded-lg">
            {/* <GrProjects className="text-white text-[90px] mt-7" /> */}
            <img src={project} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
