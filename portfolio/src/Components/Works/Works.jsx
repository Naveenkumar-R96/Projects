import React, { useState } from "react";
import "./Works.css";
import { motion } from "framer-motion";
import Project1 from '../../assets/img/pr1.jpg';
import Project2 from '../../assets/img/pr2.jpg';
import Project3 from '../../assets/img/project3.jpeg';

const Works = () => {
  const [cards, setCards] = useState([
    {
      title: "Project ",
      description:
        "This is the description for Project 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Project1,
      isFlipped: false,
      isAnimating: false,
    },
    {
      title: "Project 2",
      description:
        "This is the description for Project 2. Dolorem tempora modi adipisci quis corporis ratione.",
      image: Project2,
      isFlipped: false,
      isAnimating: false,
    },
    {
      title: "Project 3",
      description:
        "This is the description for Project 3. Minima quae voluptatum repellat velit?",
      image: Project3,
      isFlipped: false,
      isAnimating: false,
    },
    {
      title: "Project 1",
      description:
        "This is the description for Project 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Project1,
      isFlipped: false,
      isAnimating: false,
    },
    {
      title: "Project 2",
      description:
        "This is the description for Project 2. Dolorem tempora modi adipisci quis corporis ratione.",
      image: Project2,
      isFlipped: false,
      isAnimating: false,
    },
    {
      title: "Project 3",
      description:
        "This is the description for Project 3. Minima quae voluptatum repellat velit?",
      image: Project3,
      isFlipped: false,
      isAnimating: false,
    },
    {
      title: "Project 1",
      description:
        "This is the description for Project 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Project1,
      isFlipped: false,
      isAnimating: false,
    },
    {
      title: "Project 2",
      description:
        "This is the description for Project 2. Dolorem tempora modi adipisci quis corporis ratione.",
      image: Project2,
      isFlipped: false,
      isAnimating: false,
    },
    {
      title: "Project 3",
      description:
        "This is the description for Project 3. Minima quae voluptatum repellat velit?",
      image: Project3,
      isFlipped: false,
      isAnimating: false,
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
        <h1 className="text-white text-[200px]  opacity-25 absolute -top-20 right-9">Work</h1>
      <div className="cursor-pointer gap-4 flex">
        <div className="w-[99%] m-auto flex gap-10 justify-center overflow-x-scroll wrapper items-center h-[80vh]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flip-card w-[400px] h-[300px] rounded-md grid-cols-2 wrapper over "
              onMouseEnter={() => handleFlip(index)}
            >
              <motion.div
                className="flip-card-inner h-[100%] text-white col-span-3 w-[300px] max-sm:max-w-[100px]"
                initial={false}
                animate={{ rotateY: card.isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => handleAnimationComplete(index)}
              >
                {/* Front Side */}
                <div
                  className="flip-card-front w-[100%] h-[100%] bg-cover border-1 rounded-lg p-4 text-white flex items-center flex-col "
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <h1 className="text-center">{card.title}</h1>
                  <p>{card.description}</p>
                </div>

                {/* Back Side */}
                <div
                  className="flip-card-back w-[100%] h-[100%] bg-cover border-1 rounded-lg p-4 text-white"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <h1 className="text-center">{card.title} Details</h1>
                  <p>
                    {card.description} (More details can go here or be loaded dynamically.)
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
