import { useEffect, useState } from "react";
import { burgerIcon, delivari } from "../assets";
import { styles } from "../style";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed w-full"
    >
      <div className={`${styles.paddingX}`}>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex gap-5 justify-start">
            <img src={burgerIcon} alt="" className="h-[40px] w-[40px] pt-3  " />
            <p className="py-2 text-[25px] text-amber-950 font-bold uppercase">
              burger House
            </p>
          </div>
        </Link>
        <div className="grid grid-flow-row mr-3  justify-end ">
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
            <a href="" id="menu">
              <li>Menu </li>
            </a>
            <a href="" id="home">
              <li>Home</li>
            </a>
            <a href="" id="offers">
              <li>Offers</li>
            </a>
            <a href="" id="contactus">
              <li>Contact Us </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
