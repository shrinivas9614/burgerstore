import React from "react";
import { combo } from "../assets";
import SectionComponant from "./HOC/SectionComponant";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../style";
const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2" >
      <motion.div
        variants={fadeIn("right", "spring", 0.9)}
        className="px-6 md:px-12 lg:px-24 relative flex justify-start gap-7 flex-col text-amber-950"
      >
        <div className="text-amber-950 border-dashed border-x-2 border-y-2 border-amber-950 h-12 px-5 py-2 md:w-[30rem] lg:w-[30rem] xl:w-[30rem]">
          <p className="text-amber-950 font-extrabold text-center "  >
            It is a great time to test burger
          </p>
        </div>
        <div>
          <p className="text-6xl md:text-9xl font-extrabold">BURGER</p>
          <p className="text-4xl md:text-6xl font-extrabold">Week</p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "spring", 0.9)}
        className={`${styles.paddingX} ${styles.paddingY} h-full w-full  relative flex justify-center md:justify-end`}
      >
        <img
          src={combo}
          className="h-[100%] w-[100%] max-h-full max-w-full"
          alt="Burger Combo"
        />
      </motion.div>
    </div>
  );
};

export default SectionComponant(Hero, "");
