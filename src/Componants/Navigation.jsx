import { useEffect, useState } from "react";
import { burgerIcon, delivari, menu } from "../assets";
import { styles } from "../style";
import { Link } from "react-router-dom";

const Navigation = () => {
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

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={`w-full ${styles.paddingX} ${styles.paddingY} ${
        scrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex gap-5 justify-start">
            <img src={burgerIcon} alt="" className="h-[40px] w-[40px] pt-2" />
            <p className="py-2 text-[25px] text-amber-950 font-bold uppercase">
              burger House
            </p>
          </div>
        </Link>
        <div className="grid grid-flow-row mr-3 justify-end items-center">
          {/* Hidden on small devices */}
          <div className="hidden sm:flex gap-3">
            <img src={delivari} alt="" className="h-[40px] w-[40px]" />
            <p className="text-lg pt-2 font-bold">
              For Express Delivery Call +91 9522125477
            </p>
          </div>
          {/* Show only on medium and large devices */}
          <div className="hidden md:flex text-lg font-bold text-amber-950">
            <ul
              className="flex uppercase gap-8 justify-end pt-4"
              style={{ letterSpacing: "2px" }}
            >
              <li>
                <a href="#" onClick={toggleSidebar}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSidebar}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSidebar}>
                  Offers
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSidebar}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          {/* You can use a hamburger icon here */}
          <img src={menu} alt="" className="h-5 w-5" />
        </button>
      </div>
      {/* Responsive Navigation */}
      {toggle && (
        <>
          <div
            className={` p-6 bg-[#e7a33d]  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}
          >
            <div className="flex gap-3">
              <img src={delivari} alt="" className="h-[40px] w-[40px]" />
              <p className="text-xs pt-2 font-extrabold">
                For Express Delivery Call +91 9522125477
              </p>
            </div>
            <ul className="flex flex-col  items-end mt-4">
              <li>
                <a href="#" onClick={toggleSidebar}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSidebar}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSidebar}>
                  Offers
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSidebar}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
