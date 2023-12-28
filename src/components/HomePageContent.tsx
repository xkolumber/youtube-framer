"use client";
import React from "react";
import ParticlesContainer from "./ParticlesContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ProjectsBtn from "./ProjectsBtn";
import Avatar from "./Avatar";

const HomePageContent = () => {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Transforming Ideas <br /> Into {""}
            <span className="text-accent">Digital Reality</span>
          </h1>
          <ParticlesContainer />
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

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
      >
        <Avatar />
      </motion.div>
    </>
  );
};

export default HomePageContent;