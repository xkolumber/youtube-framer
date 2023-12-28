import Image from "next/image";
import React from "react";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-0 -bottom-2 mix-blend-color-dodge animate-pulse duration z-10">
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Circles;
