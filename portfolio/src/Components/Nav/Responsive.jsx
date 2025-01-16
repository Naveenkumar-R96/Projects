import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
const Responsive = ({open}) => {
  return (
    <div className="text-white">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 ,y:-100}}
            animate={{ opacity: 1 ,y:0}}
            exit={{ opacity: 0 }}
            className="absolute top-20 left-0  h-screen z-10 w-full"
          >
            <div className="text-xl  uppercase bg-white text-black py-5  rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-5 tracking-wide" >
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Resume</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Responsive;
