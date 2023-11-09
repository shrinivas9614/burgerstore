import { burgerIcon, delivari } from "../assets";
import Hero from "./Hero";

const Navigation = () => {
  return (
    <div>
      <div className="flex gap-5 justify-start">
        <img src={burgerIcon} alt="" className="h-[40px] w-[40px] pt-3  " />
        <p className="py-2 text-[25px] text-amber-950 font-bold uppercase">
          burger House
        </p>
      </div>
      <div className="grid grid-flow-row mr-3 justify-end ">
        <div className="flex gap-3">
          <img src={delivari} alt="" className="h-[40px] w-[40px]" />
          <p className="text-xs pt-2 font-extrabold">
            For Express Delivary Call +91 9522125477
          </p>
        </div>
      </div>
        <div className=" text-sm font-bold text-amber-950">
          <ul
            className="flex uppercase gap-8 justify-end pt-4"
            style={{ letterSpacing: "2px" }}
          >
            <li>Home</li>
            <li>Menu </li>
            <li>Our Story </li>
            <li>Contact Us </li>
          </ul>
        </div>
    </div>
  );
};

export default Navigation;
Navigation;
