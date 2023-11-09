import React from "react";
import { burimg2, combo } from "../assets";

const Events = () => {
  return (
    <div className="absolute shadow-xl px-8 py-10">
      <div className=" pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2">
        <div className="px-6 md:px-12 lg:px-24 relative flex justify-start gap-7 flex-col text-amber-950">
          <div></div>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <img
            src={burimg2}
            className="h-[300px] max-h-full max-w-full"
            alt="Burger Combo"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
