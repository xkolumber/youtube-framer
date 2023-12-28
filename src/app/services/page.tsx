import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import React from "react";

const page = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center relative">
      <Circles />
      <div className="container mx-auto">
        <div>
          <div className="text-center flex xl:w-[30wv] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              suscipit doloribus dolorem iure at vero autem itaque minima
              adipisci quod.
            </p>
          </div>

          <ServiceSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default page;
