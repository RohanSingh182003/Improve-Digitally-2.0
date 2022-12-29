import React from "react";
import {
    AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube,
  AiFillPhone,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { RiMessage2Fill } from "react-icons/ri";
import Services from "../../../helpers/Services.json";
import Resources from "../../../helpers/Resources.json";
import Company from "../../../helpers/Company.json";

const Footer = () => {
  return (
    <div className="w-full">
      {/* ----------------------------- top container ----------------------------- */}
      <div className="h-56 w-full bg-gray-900 grid place-ites-center">
        <div className="text-white h-fit grid place-items-center mt-12 md:flex items-center justify-evenly">
          <p className="capitalize text-2xl md:text-4xl text-center md:text-start md:w-1/2">
            Intrested to get our featured services?
          </p>
          <button className="px-6 py-3 rounded-2xl bg-orange-500 hover:bg-white hover:text-black transition-all duration-200 mt-6 flex items-center">
            Get Started Now <AiOutlineArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      {/* ----------------------------- services container ----------------------------- */}
      <div className="p-6 bg-gray-700 text-white md:p-12">
        {/* upper container section  */}
        <div className="md:grid md:grid-cols-3">
          {/* left side section  */}
        <div className="md:p-8 md:border-r border-gray-300">
        <p className="mt-8 font-semibold text-lg mb-4">Services Offered</p>
        <div className="grid grid-cols-2 mt-4">
          {Services.map((item, i) => (
            <p key={i} className="text-sm mb-1 hover:text-orange-500 transition-all duration-150 cursor-pointer">
              {item}
            </p>
          ))}
        </div>
        </div>
        {/* right side section  */}
        <div className="md:col-span-2 md:grid md:grid-cols-2 md:px-16">
        <div className="grid grid-cols-2 mt-4">
          <div className="place-self-center">
            <p className="mt-8 font-semibold text-lg mb-4">Resoures</p>
            {Resources.map((item, i) => (
              <p key={i} className="text-sm mb-1 hover:text-orange-500 transition-all duration-150 cursor-pointer">
                {item}
              </p>
            ))}
          </div>
          <div className="place-self-center">
            <p className="mt-8 font-semibold text-lg mb-4">Company</p>
            {Company.map((item, i) => (
              <p key={i} className="text-sm mb-1 hover:text-orange-500 transition-all duration-150 cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        {/* contact section  */}
        <div className="place-self-center md:mt-10">
        <p className="mt-8 font-semibold text-lg mb-4">Contact</p>
        <div className="flex items-center space-x-3">
          <HiLocationMarker className=" text-orange-500 text-2xl" />
          <p>Jamia Nagar, Okhla</p>
        </div>
        <div className="ml-10">
          <p>New Delhi, Delhi</p>
          <p>Pin - 110025</p>
        </div>
        <div className="flex items-center space-x-3 mt-4">
          <AiFillPhone className=" text-orange-500 text-2xl" />
          <p>+91 0033664455</p>
        </div>
        <div className="flex items-center space-x-3 mt-2">
          <RiMessage2Fill className=" text-orange-500 text-2xl" />
          <p>info@testemail.co</p>
        </div>
        </div>
        {/* ----------------------------- email newsletter container ----------------------------- */}
        <div className="md:col-span-2">
          <p className="mt-8 font-semibold text-lg mb-4 md:flex">
            Subscribe to our Email Newsletter
          </p>
          <input
            placeholder="Your Email*"
            type="email"
            name="email"
            id="email"
            className="w-full md:w-2/3 bg-white text-gray-900 p-2 focus:outline-none"
          />
          <button className="w-full md:w-1/3 p-2 bg-orange-500 text-white mt-2">
            Subscribe
          </button>
        </div>
        </div>
        </div>
        {/* ----------------------------- social icons container ----------------------------- */}
        <div className="flex flex-col md:flex-row w-full items-center h-24 justify-between mt-12">
          <div className="w-full h-0.5 bg-gray-200"></div>
          <div className="w-full flex items-center justify-center space-x-2 px-6 mt-5">
            <AiFillFacebook className="text-4xl text-white" />
            <AiFillYoutube className="text-4xl text-white" />
            <AiFillTwitterSquare className="text-4xl text-white" />
            <AiFillInstagram className="text-4xl text-white" />
            <AiFillLinkedin className="text-4xl text-white" />
          </div>
          <div className="w-[60%] md:w-full h-0.5 bg-gray-200"></div>
        </div>
        {/* ----------------------------- ending text container ----------------------------- */}
        <div className="grid place-items-center h-24 mt-4">
            <p className="text-white font-extrabold">Improve Degitally</p>
            <p className="text-gray-300 text-xs">Copyright &copy; 2022 Improve Digitally</p>
            <p className="text-sm text-white font-semibold">Private Policy | Terms of Service| FAQ</p>
        </div>
      </div>
        <div className="h-6 bg-orange-500 w-full"></div>
    </div>
  );
};

export default Footer;
