"use client";
import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../variants";

const MotionDivP = () => {
  return (
    <motion.p
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
      asperiores est nobis optio quas aut?
    </motion.p>
  );
};

export default MotionDivP;
