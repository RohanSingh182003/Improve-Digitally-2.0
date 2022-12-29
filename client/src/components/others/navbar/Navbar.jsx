import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import Menu from "./Menu";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="border shadow-lg w-full h-14 md:h-24 flex justify-between items-center p-4 sticky top-0 bg-white z-50">
      {/* ---------------------------- for small & medium device only ---------------------------- */}
      <GiHamburgerMenu
        onClick={() => setToggle(true)}
        className="text-2xl text-gray-900 lg:hidden"
      />
      {toggle && <Menu setToggle={setToggle} />}
      <p className="font-extrabold text-sm md:text-2xl">
        <span className="text-gray-700">Improve</span>{" "}
        <span className="text-orange-500">Digitally</span>
      </p>
      {/* ---------------------------- for large device only ---------------------------- */}
      <div className="hidden lg:flex items-center justify-evenly lg:space-x-8 xl:space-x-12">
        <p className="cursor-pointer hover:text-orange-500 font-semibold">
          Home
        </p>
        <p className="cursor-pointer hover:text-orange-500 font-semibold">
          Blog
        </p>
        <p className="cursor-pointer hover:text-orange-500 font-semibold">
          Contact Us
        </p>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className='flex space-x-2 items-center cursor-pointer hover:text-orange-500'>
            <p className="font-semibold">
              Web Development
            </p>
            <AiOutlineDown/>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className='flex space-x-2 items-center cursor-pointer hover:text-orange-500'>
            <p className="cursor-pointer hover:text-orange-500 font-semibold">
              Company
            </p>
            <AiOutlineDown/>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex space-x-2 md:space-x-4 items-center">
        <div className="flex items-center space-x-1">
          <BiPhoneCall className="text-3xl bg-orange-500 text-white rounded-full p-1" />
          <p className="hidden md:block font-extrabold">+91 0003336644</p>
        </div>
        <button className="text-xs md:text-lg py-2 px-3 bg-gray-700 hover:bg-orange-500 hover:shadow-xl rounded-2xl transition-all duration-200 text-white shadow-md shadow-gray-600">
          Get A Proposal
        </button>
      </div>
    </div>
  );
};

export default Navbar;
