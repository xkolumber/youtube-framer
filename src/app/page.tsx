import Avatar from "@/components/Avatar";
import MotionDivElement from "@/components/MotionDivElement";
import MotionDivP from "@/components/MotionDivP";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";

const page = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Transforming Ideas <br /> Into {""}
            <span className="text-accent">Digital Reality</span>
          </h1>
          <ParticlesContainer />
          <MotionDivP />

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <MotionDivElement />
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      </div>
      <div className="w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar />
      </div>
    </div>
  );
};

export default page;
