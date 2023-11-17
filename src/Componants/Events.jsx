import React from "react";
import { burger, burimg1, burimg2 } from "../assets";
import SectionComponant from "./HOC/SectionComponant";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

// const Events = () => {
//   return (
//     <motion.div
//       variants={fadeIn("left", "spring", 0.7)}
//       className="relative grid xl:grid-cols-2 sm:grid-cols-2 md:grid-cols-1"
//     >
//       <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2">
//         <div className="px-6 md:px-12 lg:px-24 relative flex justify-start gap-7 flex-col text-amber-950">
//
//         </div>
//         <div className="relative flex justify-center md:justify-end">
//           <img
//             src={burimg2}
//             className="h-[300px] w-full max-h-full max-w-full"
//             alt="Burger Combo"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };
const Events = () => {
  return (
    <div className="relative grid xl:grid-cols-2 rounded-2xl sm:grid-cols-2 md:grid-cols-1 h-full w-full shadow-2xl shadow-[#b19f9f]">
      <motion.div
        variants={fadeIn("right", "spring", 1)}
        className="px-20 py-14 pt-[5rem] "
      >
        <div className="">
          <p className="text-3xl text-amber-950 font-mono">Discover</p>
          <p className="text-4xl font-extrabold text-amber-950 uppercase">
            Upcomming Events
          </p>
        </div>
        <p className="pt-5 w-[1a5rem] xl:w-[25rem] sm:w-[12rem] font-light opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipisc- ing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          sus- pendisse ultrices gravida. Risus commodo viverra maecenas
          accumsan lacus vel facilisis.
        </p>

        
      </motion.div>
      <motion.div
        variants={fadeIn("left", "spring", 1)}
        className="relative flex flex-col px-5 sm:px-10 gap-9 sm:py-10 mt-5 "
      >
        <img
          src={burger}
          alt=""
          className="xl:h-[full] h-full w-[350px] rounded-xl"
        />
      </motion.div>
      <div className="flex justify-start px-10  py-10 pt-[1rem] gap-3 " >
          <div className="bg-yellow-500 cursor-pointer h-5 w-5  rounded-3xl " />
          <div className="bg-[#8a8484] cursor-pointer opacity-50 h-5 w-5 rounded-3xl " />
          <div className="bg-[#8a8484] cursor-pointer opacity-50 h-5 w-5 rounded-3xl " />
          <div className="bg-[#8a8484] cursor-pointer opacity-50 h-5 w-5 rounded-3xl " />
        </div>
    </div>
  );
};

export default SectionComponant(Events);
