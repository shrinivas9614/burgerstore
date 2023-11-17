import { options } from "./optionsData";
import SectionComponant from "../HOC/SectionComponant";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { styles } from "../../style";
import Events from "../Events";
const Options = () => {
  return (
    <div className="relative grid xl:grid-rows-1 sm:grid-rowss-2 md:grid-rows-1">
      <div className="text-amber-950 grid justify-center px-6 py-10 ">
        <h1 className="text-4xl font-extrabold uppercase"> Choose & enjoy </h1>
        <div className=" flex justify-center">
          <p> order burger and eat </p>
        </div>
      </div>
      <motion.div className=" pt-10 px-20 grid xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 h-[15rem] gap-[200px]">
        {options.map((option, index) => {
          return (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.7, 1)}
              index={index}
              key={option.name}
              className={`${styles.paddingY}`}
            >
              <div>
                <img src={option.image} alt={option.name} />
              </div>

              <div className="pt-6 flex justify-center">
                <h1 className="text-xl font-bold ">{option.name}</h1>
              </div>
              <div className="pt-6 px-8 flex justify-center">
                <p className="text-sm opacity-50 ">{option.description}</p>
              </div>

              <div className="flex justify-center pt-10">
                <button className="px-5 py-2 bg-red-700 text-white">
                  Order Now
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SectionComponant(Options, "");
