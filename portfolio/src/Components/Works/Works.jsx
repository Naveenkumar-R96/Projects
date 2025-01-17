import React, { useState } from "react";
import "./Works.css";
import { motion } from "framer-motion";
import Project1 from '../../assets/img/pr1.jpg';
import Project2 from '../../assets/img/pr2.jpg';
import Project3 from '../../assets/img/project3.jpeg';
import { FaGithub } from "react-icons/fa";

import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Works = () => {
  const [cards, setCards] = useState([
    {
      title: "Project ",
      description:
        "This is the description for Project 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Project1,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #typscript"
    },
    {
      title: "Project 2",
      description:
        "This is the description for Project 2. Dolorem tempora modi adipisci quis corporis ratione.",
      image: Project2,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #typscript"
    },
    {
      title: "Project 3",
      description:
        "This is the description for Project 3. Minima quae voluptatum repellat velit?",
      image: Project3,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #typscript"
    },
    {
      title: "Project 1",
      description:
        "This is the description for Project 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Project1,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #typscript"
    },
    {
      title: "Project 2",
      description:
        "This is the description for Project 2. Dolorem tempora modi adipisci quis corporis ratione.",
      image: Project2,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #typscript"
    },
    {
      title: "Project 3",
      description:
        "This is the description for Project 3. Minima quae voluptatum repellat velit?",
      image: Project3,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #typscript"
    },
    {
      title: "Project 1",
      description:
        "This is the description for Project 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Project1,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #typscript"
    },
    {
      title: "Project 2",
      description:
        "This is the description for Project 2. Dolorem tempora modi adipisci quis corporis ratione.",
      image: Project2,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #typscript"
    },
    {
      title: "Project 3",
      description:
        "This is the description for Project 3. Minima quae voluptatum repellat velit?",
      image: Project3,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #typscript"
    },
  ]);

  const handleFlip = (index) => {
    if (!cards[index].isAnimating) {
      const updatedCards = [...cards];
      updatedCards[index].isFlipped = !updatedCards[index].isFlipped;
      updatedCards[index].isAnimating = true;
      setCards(updatedCards);
    }
  };

  const handleAnimationComplete = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].isAnimating = false;
    setCards(updatedCards);
  };

  return (
    <div className=" top-container h-screen bg-black relative "/*  style={{backgroundImage: `url(${Project2})`,backgroundSize: "cover",
      backgroundPosition: "center", backgroundRepeat:'no-repeat',  width: "100%",}} */ >
        <h1 className="text-white text-[200px]  opacity-25 absolute -top-20 right-9 max-sm:text-[100px] max-sm:-top-1">Work</h1>
      <div className="cursor-pointer w-[90%] m-auto ">
        <div className="flex wrape gap-4 items-center  h-[80vh] ml-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flip-card  h-[300px] rounded-md   "
              onMouseEnter={() => handleFlip(index)}
              initial={{y:'-100vh'}}
              animate={{y:0}}
             transition={{
              duration:1
             }}

            >
              <motion.div
                className="flip-card-inner h-[100%] text-white col-span-3 w-[300px] max-sm:w-[200px]"
                initial={false}
                animate={{ rotateY: card.isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => handleAnimationComplete(index)}
              >
                {/* Front Side */}
                <div
                  className="flip-card-front w-[100%] h-[100%] bg-cover border-1 rounded-lg p-5   bg-white text-black cards flex justify-center items-center flex-col "
                 
                >
                  <h1 className="text-center mb-3 text-3xl max-sm:text-[18px] text-black">{card.title}</h1>
                  <p className="max-sm:text-[16px] text-2xl opacity-60">{card.description}</p>
                </div>

                {/* Back Side */}
                <div
                  className="flip-card-back w-[100%] h-[100%] bg-cover border-1 rounded-lg text-white  flex flex-col justify-center p-5 bg-black back"
              /*     style={{ backgroundImage: `url(${card.image})` }} */
                >
                 <img src={card.image} alt="" className="w-[300px] h-[100px] mb-3 border-t-2"/>
                 <p className="w-[200px] text-2xl max-sm:text-[16px]">{card.backing}</p>
                  <div className="flex justify-between mt-4" >
                    <button className="bg-white px-6 text-black text-2xl bc-button ">Visit</button>
                    <FaGithub className="text-2xl" />

                  </div>
                </div>
              </motion.div>
            

            </motion.div>
            
          ))}
        </div>
       
      </div>
      <FaLongArrowAltRight  className="text-white absolute text-[200px] left-[150px] top-[400px] opacity-30 scale-x-[1]"/>
      <Footer/>
    </div>
  );
};

export default Works;
