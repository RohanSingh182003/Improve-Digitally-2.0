import React, { useContext, useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import Menu from "./Menu";
import { Link, NavLink } from "react-router-dom";
import AppContext from "../../../context/AppContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user , logout } = useContext(AppContext);
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
      <ul className="hidden lg:flex items-center justify-evenly lg:space-x-8 xl:space-x-12">
        <NavLink
          to={"/"}
          className="cursor-pointer hover:text-orange-500 font-semibold"
        >
          Home
        </NavLink>
        <NavLink
          to={"/blogs"}
          className="cursor-pointer hover:text-orange-500 font-semibold"
        >
          Blog
        </NavLink>
        <NavLink
          to={"/contacts"}
          className="cursor-pointer hover:text-orange-500 font-semibold"
        >
          Contact Us
        </NavLink>
        <NavLink
          to={"/writeBlog"}
          className="cursor-pointer hover:text-orange-500 font-semibold"
        >
          Write a Blog
        </NavLink>
        {user ? (
          <Link to='/' onClick={logout} className="cursor-pointer hover:text-orange-500 font-semibold">
            Logout
          </Link>
        ) : (
          <NavLink
            to={"/login"}
            className="cursor-pointer hover:text-orange-500 font-semibold"
          >
            Login as Admin
          </NavLink>
        )}
      </ul>
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
