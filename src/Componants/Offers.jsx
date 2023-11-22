import React from "react";
import { burger, burimg1 } from "../assets";
import SectionComponant from "./HOC/SectionComponant";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../style";

const Offers = () => {
  return (
    <div className="relative grid xl:grid-cols-2 sm:grid-cols-2 md:grid-cols-1">
      <motion.div
        variants={fadeIn("right", "spring", 1)}
        className={`${styles.paddingX} ${styles.paddingY}  `}
      >
        <img
          src={burger}
          alt=""
          className="xl:h-[full] sm:h-[full] md:h-[full] md:w-[full]  sm:w-[full] w-full rounded-xl"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "spring", 1)}
        className={`relative flex flex-col gap-12 ${styles.paddingX} ${styles.paddingY}  mr-10`}
      >
        <img
          src={burimg1}
          alt=""
          className="h-[12rem] object-cover rounded-xl"
        />
        <img
          src={burimg1}
          alt=""
          className="h-[12rem] object-cover rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default SectionComponant(Offers, "offers");
