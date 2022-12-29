import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube, AiOutlineDown } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

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
        <div className="w-full p-4 border-b mt-4">
          <p className="font-extrabold">Home</p>
        </div>
        <div className="w-full p-4 border-b mt-4">
          <p className="font-extrabold">Blog</p>
        </div>
        <div className="w-full p-4 border-b mt-4">
          <p className="font-extrabold">Contact Us</p>
        </div>
        {/* ---------------------- Web Development Accordian ---------------------- */}
        <div className="collapse border-b mt-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-900 flex items-center justify-between">
            <p className="font-extrabold">About Us</p>
            <AiOutlineDown className="text-gray-500" />
          </div>
          <div className="collapse-content text-gray-900">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dignissimos earum dolores minus nisi illo fugiat odio ipsa quis
              expedita accusamus consectetur, architecto iste id nostrum
              accusantium, nemo harum explicabo.
            </p>
          </div>
        </div>
        {/* ---------------------- Company Accordian ---------------------- */}
        <div className="collapse border-b mt-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-gray-900 flex items-center justify-between">
            <p className="font-extrabold">Company</p>
            <AiOutlineDown className="text-gray-500" />
          </div>
          <div className="collapse-content text-gray-900">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae corrupti fuga odit libero velit dolorem dicta, beatae
              tenetur magni dignissimos aut obcaecati earum. Rem minima autem
              sequi ratione, temporibus ad.
            </p>
          </div>
        </div>
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