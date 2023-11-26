import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const NavbarDown = () => {
  return (
    <div>
      {/* second filter section on clicking */}
      <div className="w-[100%] flex justify-between px-8">
        <div className="flex gap-2">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-slate-700 text-[14px]">Book</p>
            <IoIosArrowDown className="text-red-500" />
            <div className="h-7 border-red-500 w-0 border-[1px]"></div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <p className="text-slate-700 text-[14px]">New Arrivals</p>
            <div className="h-7 border-red-500 w-0 border-[1px]"></div>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <p className="text-slate-700 text-[14px]">Box Sets</p>
            <div className="h-7 border-red-500 w-0 border-[1px]"></div>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <p className="text-slate-700 text-[14px]">Best Sellers</p>
            <div className="h-7 border-red-500 w-0 border-[1px]"></div>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <p className="text-slate-700 text-[14px]">Fiction Books</p>
            <div className="h-7 border-red-500 w-0 border-[1px]"></div>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <p className="text-slate-700 text-[14px]">Award Winners</p>
            <div className="h-7 border-red-500 w-0 border-[1px]"></div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <p className="text-slate-700 text-[14px]">Featured Authors</p>
            <div className="h-7 border-red-500 w-0 border-[1px]"></div>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <p className="text-slate-700 text-[14px]">Todays Deal</p>
            <div className="h-7 border-red-500 w-0 border-[1px]"></div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <p className="text-slate-700 text-[14px]">Request Book</p>
            <div className="h-7 border-red-500 w-0 border-[1px]"></div>
          </div>
        </div>
        <div>
          <CiHeart className="text-3xl text-red-600" />
        </div>
      </div>

      {/* border line  */}
      <hr className=" border-red-500  border-[0.5px] mt-4 w-[100%]" />
    </div>
  );
};

export default NavbarDown;
