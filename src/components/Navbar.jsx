import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import NavbarDown from "./NavbarDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const isScrolled = window.scrollY > navbar.offsetTop;
        if (isScrolled) {
          navbar.classList.add(
            "fixed",
            "left-0",
            "right-0",
            "z-10",
            "bg-white",
            "h-[80px]",
            "py-[10px]"
          );
        } else {
          navbar.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "right-0",
            "h-[80px]"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav id="navbar" className="w-full flex justify-between px-5 py-5 static">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center mr-[200px]">
          <input
            className="h-8 w-[400px] border-[1.5px] border-red-500"
            type="text"
            placeholder="Title,Author,Publisher or ISBN"
          />
          <div className="h-8 w-8 bg-red-600">
            <CiSearch className="mt-[4px] text-slate-200 ml-1 text-2xl" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <RxAvatar className="text-red-500" />
          <p className="text-slate-400">My Account</p>
          <div
            onMouseEnter={() => setVisible(!visible)}
            onMouseLeave={() => setVisible(visible)}
          >
            {visible ? (
              <IoIosArrowDown className="text-red-500" />
            ) : (
              <IoIosArrowForward className="text-red-500" />
            )}
          </div>
          <div className="h-7 border-red-500 border-[1px]"></div>
          <Link to="/cart">
            <CiShoppingCart className="text-red-500 text-xl" />
          </Link>
        </div>
      </nav>

      {/* navbarDown */}
      <NavbarDown />
    </div>
  );
};

export default Navbar;
