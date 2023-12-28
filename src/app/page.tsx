import MotionDivElement from "@/components/MotionDivElement";
import MotionDivP from "@/components/MotionDivP";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Transforming Ideas <br /> Intro{""}
            <span className="text-accent">Digial Reality</span>
          </h1>
          <ParticlesContainer />
          <MotionDivP />

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <MotionDivElement />
        </div>
      </div>
    </div>
  );
};

export default page;
