import React from "react";
import { combo } from "../assets";

const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2">
      <div className="px-6 md:px-12 lg:px-24 relative flex justify-start gap-7 flex-col text-amber-950">
        <div className="text-amber-950 border border-amber-950 h-12 md:w-[30rem] lg:w-[30rem] xl:w-[30rem]">
          <p className="text-amber-950 font-extrabold text-center">
            It is a great time to test burger
          </p>
        </div>
        <div>
          <p className="text-6xl md:text-9xl font-extrabold">BURGER</p>
          <p className="text-4xl md:text-6xl font-extrabold">Week</p>
        </div>
      </div>
      <div className="relative flex justify-center md:justify-end">
        <img src={combo} className="h-[100%] max-h-full max-w-full" alt="Burger Combo" />
      </div>
    </div>
  );
};

export default Hero;
