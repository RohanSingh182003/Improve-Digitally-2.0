import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube, AiOutlineDown } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Menu = ({ setToggle }) => {
  return (
    <div className="min-h-screen w-full absolute top-0 left-0 bg-white">
      {/* ------------------------------------- heading -------------------------------------*/}
      <div className="flex p-6 items-center justify-between mb-6">
        <p className="font-extrabold text-2xl">
          <span className="text-gray-700">Improve</span>{" "}
          <span className="text-orange-500">Digitally</span>
        </p>
        <p
          onClick={() => setToggle(false)}
          className="text-orange-500 text-4xl"
        >
          x
        </p>
      </div>
      {/* ------------------------------------- menu items -------------------------------------*/}
      <div className="w-full">
        <ul className="w-full p-4 border-b mt-4">
          <NavLink to={'/'} className="font-extrabold">Home</NavLink>
        </ul>
        <ul className="w-full p-4 border-b mt-4">
          <NavLink to={'/blogs'} className="font-extrabold">Blog</NavLink>
        </ul>
        <ul className="w-full p-4 border-b mt-4">
          <NavLink to={'/contacts'} className="font-extrabold">Contact Us</NavLink>
        </ul>
        <ul className="w-full p-4 border-b mt-4">
          <NavLink to={'/writeBlog'} className="font-extrabold">Write a Blog</NavLink>
        </ul>
        <ul className="w-full p-4 border-b mt-4">
          <NavLink to={'/login'} className="font-extrabold">Login as Admin</NavLink>
        </ul>
      </div>
      {/* ------------------------------------- phone number -------------------------------------*/}
      <div className="w-full grid place-items-center px-6 mt-6">
        <div className="flex space-x-2 items-center">
          <BiPhoneCall className="text-4xl bg-orange-500 text-white rounded-full p-1" />
          <p className="text-xl text-gray-700">+91 0002223366</p>
        </div>
      </div>
      {/* ------------------------------------- get a proposal -------------------------------------*/}
      <div className="w-full grid place-items-center px-6 mt-6">
        <button className="py-2 px-3 bg-blue-900 rounded-2xl text-white shadow-md shadow-gray-600">
          Get A Proposal
        </button>
      </div>
      {/* ------------------------------------- social icons -------------------------------------*/}
      <div className="w-full flex items-center justify-center space-x-2 px-6 mt-5">
        <AiFillFacebook className="text-4xl text-blue-500"/>
        <AiFillYoutube className="text-4xl text-red-500"/>
        <AiFillTwitterSquare className="text-4xl text-cyan-500"/>
        <AiFillInstagram className="text-4xl text-red-500"/>
        <AiFillLinkedin className="text-4xl text-blue-500"/>
      </div>
    </div>
  );
};

export default Menu;
