import React from "react";
import "./home.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import LaptopPic from "../../assets/laptop.webp";
import GrowPic from "../../assets/Grow.webp";
import GrowBuisinessStats from "./GrowBuisinessStats";
import GrowYourBuisiness from "../../helpers/GrowYourBuisiness.json";
import EnhanceOrganicSearch from "../../assets/Enhance-Organic-Search.webp";
import SeoServices from "../../assets/SEO Service.png";
import SemServices from "../../assets/SEM Service.png";
import SmoServices from "../../assets/SMO Services.png";
import SmmServices from "../../assets/SMM Services.png";
import EmailMarketing from "../../assets/Email Marketing.png";
import WebDevelopment from "../../assets/Website-Development.svg";
import BlogImg1 from "../../assets/BlogImg1.png";
import BlogImg2 from "../../assets/BlogImg2.png";
import BlogImg3 from "../../assets/BlogImg3.png";
import Imac from "../../assets/Imac.webp";
import MacIcon1 from "../../assets/MacIcon1.png";
import MacIcon2 from "../../assets/MacIcon2.png";
import MacIcon3 from "../../assets/MacIcon3.png";
import MacIcon4 from "../../assets/MacIcon4.png";
import OurLatestMedia1 from "../../assets/OurLatestMedia1.webp";
import OurLatestMedia2 from "../../assets/OurLatestMedia2.webp";
import OurLatestMedia3 from "../../assets/OurLatestMedia3.png";
import LoveFromClients from "../../assets/LoveFromClients.png";
import CommentsCrousel from "./CommentsCrousel";
import CompanyNamesCrousel from "./CompanyNamesCrousel";

const Home = () => {
  return (
    <>
      {/* ------------------------------------ first section ------------------------------------ */}
      <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between md:px-28 py-8 md:py-0">
        {/* left side container */}
        <div className="font-extrabold">
          <p className="text-orange-500 mb-6">Grow Digitally</p>
          <p className="text-3xl md:text-6xl text-gray-700">Boost your</p>
          <p className="text-3xl md:text-6xl text-orange-500">
            website traffic!
          </p>
          <div className="flex flex-col md:flex-row mt-12 md:space-x-6">
            <input
              type="email"
              placeholder="Mail Address*"
              className="p-2 border-b-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="yoursite.com*"
              className="p-2 border-b-2 focus:outline-none mt-2 md:mt-0"
            />
          </div>
          <button className="mt-8 py-4 px-12 rounded-2xl bg-gray-700 text-white hover:bg-orange-500 transition-all duration-150 shadow-xl">
            Check Now
          </button>
        </div>
        {/* right side container */}
        <div className="w-fit md:mt-12 border-radious-1 bg-gradient-to-r from-pink-200  to-cyan-200">
          <img src={LaptopPic} alt="LaptopPic" className="w-96 md:w-[30rem]" />
        </div>
      </section>
      {/* ------------------------------------ second section ------------------------------------ */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between md:px-28 py-8 md:py-0">
        {/* left side container */}
        <div className="w-fit md:mt-12 border-radious-2 bg-gradient-to-r from-pink-200  to-cyan-200">
          <img src={GrowPic} alt="GrowPic" className="w-96 md:w-[30rem]" />
        </div>
        {/* right side container */}
        <div className="h-full px-8 md:w-1/2">
          <p className="text-orange-500 font-bold">Our Buisiness Commitments</p>
          <p className="text-gray-700 text-6xl font-extrabold">
            Grow your <span className="text-orange-500">business</span> daily
          </p>
          <div className="my-6 md:grid md:grid-cols-3">
            {GrowYourBuisiness.map((item) => (
              <GrowBuisinessStats
                incRate={item.incRate}
                defination={item.defination}
                color={item.color}
                type={item.type}
              />
            ))}
          </div>
          <button className="mt-2 py-3 px-12 rounded-2xl bg-gray-700 text-white hover:bg-orange-500 transition-all duration-150 shadow-xl">
            Get Free Consultation
          </button>
        </div>
      </section>
      {/* ------------------------------------ third section ------------------------------------ */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row md:items-center justify-between md:px-28 py-8 md:py-0">
        {/* left side container */}
        <div className="font-extrabold px-8 my-4 md:px-0 md:my-4">
          <p className="text-orange-500 mb-6">Organic Search Growth</p>
          <p className="text-3xl md:text-6xl text-gray-700">Enhance your</p>
          <p className="text-3xl md:text-6xl text-orange-500">Organic Search</p>
          <p className="text-3xl md:text-6xl text-gray-700">Visibility!</p>
          <div className="mt-8 flex items-center space-x-4">
            <button className="py-4 px-8 rounded-3xl bg-gray-700 text-white hover:bg-orange-500 transition-all duration-150 shadow-xl">
              Get Started
            </button>
            <button className="p-3 rounded-full bg-orange-500 text-white hover:bg-gray-700 transition-all duration-150 shadow-xl">
              <BsFillPlayFill className="text-3xl" />
            </button>
          </div>
        </div>
        {/* right side container */}
        <div className="w-fit md:mt-12 border-radious-3 bg-gradient-to-r from-pink-200  to-cyan-200">
          <img
            src={EnhanceOrganicSearch}
            alt="LaptopPic"
            className="w-96 md:w-[30rem]"
          />
        </div>
      </section>
      {/* ------------------------------------ fourth section ------------------------------------ */}
      <section className="mt-8">
        <div className="w-full grid place-items-center text-gray-700 text-2xl md:text-4xl font-extrabold px-4 py-14 md:gap-4">
          <p>
            Increase organic{" "}
            <span className="text-orange-500">organic traffic</span>
          </p>
          <p>and enhance your buisiness web presence</p>
        </div>
        {/* ------------------------- cards ------------------------- */}
        <div className="grid md:grid-cols-3 md:px-28">
          {/* card 1 */}
          <div className="p-6 pb-12 cursor-pointer hover:shadow-2xl flex flex-col items-center md:items-start">
            <img src={SeoServices} alt="SeoServices" />
            <p className="mt-6 text-gray-700 text-2xl font-extrabold">
              SEO Services
            </p>
            <p className="mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              alias magnam enim beatae nemo vero repellat deserunt assumenda
              minima, numquam, doloremque itaque dolores sunt rerum error,
              sapiente illo ut. Iste?
            </p>
            <AiOutlinePlusCircle className="mt-8 text-4xl text-orange-300" />
            <div className="flex w-full justify-end opacity-10 -z-10">
              <img src={SeoServices} alt="SeoServices" className="w-28" />
            </div>
          </div>
          {/* card 2 */}
          <div className="p-6 pb-12 cursor-pointer hover:shadow-2xl flex flex-col items-center md:items-start">
            <img src={SemServices} alt="SeoServices" />
            <p className="mt-6 text-gray-700 text-2xl font-extrabold">
              SEM Services
            </p>
            <p className="mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              alias magnam enim beatae nemo vero repellat deserunt assumenda
              minima, numquam, doloremque itaque dolores sunt rerum error,
              sapiente illo ut. Iste?
            </p>
            <AiOutlinePlusCircle className="mt-8 text-4xl text-orange-300" />
            <div className="flex justify-end opacity-10 -z-10 w-full">
              <img src={SemServices} alt="SemServices" className="w-28" />
            </div>
          </div>
          {/* card 3 */}
          <div className="p-6 pb-12 cursor-pointer hover:shadow-2xl flex flex-col items-center md:items-start">
            <img src={SmoServices} alt="SeoServices" />
            <p className="mt-6 text-gray-700 text-2xl font-extrabold">
              SMO Services
            </p>
            <p className="mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              alias magnam enim beatae nemo vero repellat deserunt assumenda
              minima, numquam, doloremque itaque dolores sunt rerum error,
              sapiente illo ut. Iste?
            </p>
            <AiOutlinePlusCircle className="mt-8 text-4xl text-orange-300" />
            <div className="flex justify-end opacity-10 -z-10 w-full">
              <img src={SmoServices} alt="SmoServices" className="w-28" />
            </div>
          </div>
          {/* card 4 */}
          <div className="p-6 pb-12 cursor-pointer hover:shadow-2xl flex flex-col items-center md:items-start">
            <img src={SmmServices} alt="SmmServices" />
            <p className="mt-6 text-gray-700 text-2xl font-extrabold">
              SMM Services
            </p>
            <p className="mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              alias magnam enim beatae nemo vero repellat deserunt assumenda
              minima, numquam, doloremque itaque dolores sunt rerum error,
              sapiente illo ut. Iste?
            </p>
            <AiOutlinePlusCircle className="mt-8 text-4xl text-orange-300" />
            <div className="flex justify-end opacity-10 -z-10 w-full">
              <img src={SmmServices} alt="SmmServices" className="w-28" />
            </div>
          </div>
          {/* card 5 */}
          <div className="p-6 pb-12 cursor-pointer hover:shadow-2xl flex flex-col items-center md:items-start">
            <img src={EmailMarketing} alt="EmailMarketing" />
            <p className="mt-6 text-gray-700 text-2xl font-extrabold">
              Email Marketing
            </p>
            <p className="mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              alias magnam enim beatae nemo vero repellat deserunt assumenda
              minima, numquam, doloremque itaque dolores sunt rerum error,
              sapiente illo ut. Iste?
            </p>
            <AiOutlinePlusCircle className="mt-8 text-4xl text-orange-300" />
            <div className="flex justify-end opacity-10 -z-10 w-full">
              <img src={EmailMarketing} alt="EmailMarketing" className="w-28" />
            </div>
          </div>
          {/* card 6 */}
          <div className="p-6 pb-12 cursor-pointer hover:shadow-2xl flex flex-col items-center md:items-start">
            <img src={WebDevelopment} alt="WebDevelopment" />
            <p className="mt-6 text-gray-700 text-2xl font-extrabold">
              Web Development
            </p>
            <p className="mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              alias magnam enim beatae nemo vero repellat deserunt assumenda
              minima, numquam, doloremque itaque dolores sunt rerum error,
              sapiente illo ut. Iste?
            </p>
            <AiOutlinePlusCircle className="mt-8 text-4xl text-orange-300" />
            <div className="flex justify-end opacity-10 -z-10 w-full">
              <img src={WebDevelopment} alt="WebDevelopment" className="w-28" />
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------ fifth section ------------------------------------ */}
      <section className="min-h-screen bg-gray-900 py-12 md:p-24">
        <p className="text-center font-bold  text-orange-500">
          Know more about our
        </p>
        <p className="text-center text-5xl text-white font-extrabold mt-6">
          Latest case studies
        </p>
        <div className="grid md:grid-cols-3 place-items-center mt-20 gap-4">
          {/* card 1 */}
          <div className="card bg-base-100 shadow-xl p-2 w-80">
            <figure className="rounded-md">
              <img
                src={BlogImg1}
                alt="BlogImg1"
                className="hover:scale-105 transition-all duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-cyan-500 text-sm">
                {" "}
                <div className="h-2 w-2 rounded-full bg-cyan-500"></div> PPC,
                Sales
              </h2>
              <p className="capitalize mt-4 font-bold text-lg hover:text-blue-500 cursor-pointer">
                Indigenous organic growth to history of soccer
              </p>
              <AiOutlinePlusCircle className="mt-4 text-3xl text-cyan-500" />
            </div>
          </div>
          {/* card 2 */}
          <div className="card bg-base-100 shadow-xl p-2 w-80">
            <figure className="rounded-md">
              <img
                src={BlogImg2}
                alt="BlogImg2"
                className="hover:scale-105 transition-all duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-orange-500 text-sm">
                {" "}
                <div className="h-2 w-2 rounded-full bg-orange-500"></div> SEO,
                Visitor
              </h2>
              <p className="capitalize mt-4 font-bold text-lg hover:text-blue-500 cursor-pointer">
                Indigenous organic growth to history of soccer
              </p>
              <AiOutlinePlusCircle className="mt-4 text-3xl text-orange-500" />
            </div>
          </div>
          {/* card 3 */}
          <div className="card bg-base-100 shadow-xl p-2 w-80">
            <figure className="rounded-md">
              <img
                src={BlogImg3}
                alt="BlogImg3"
                className="hover:scale-105 transition-all duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700 text-sm">
                {" "}
                <div className="h-2 w-2 rounded-full bg-purple-700"></div> SEO,
                Visitor
              </h2>
              <p className="capitalize mt-4 font-bold text-lg hover:text-blue-500 cursor-pointer">
                Indigenous organic growth to history of soccer
              </p>
              <AiOutlinePlusCircle className="mt-4 text-3xl text-purple-700" />
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------ sixth section ------------------------------------ */}
      <section className="min-h-screen flex flex-col md:flex-row md:items-center justify-between md:px-28 py-8 md:py-20">
        {/* left side container */}
        <div className="font-extrabold px-4 my-4 md:px-0 md:my-4 md:w-1/2">
          <p className="text-orange-500 mb-2">Boostig</p>
          <p className="text-3xl md:text-6xl text-gray-700">Outstanding</p>
          <p className="text-3xl md:text-6xl text-gray-700">
            <span className="text-orange-500">Digital</span>&nbsp;Experience
          </p>
          <div className="md:grid md:grid-cols-2 mt-8">
            {/* post 1 */}
            <div className="grid md:place-items-center mt-4 p-4 py-8 md:py-0">
              <img src={MacIcon1} alt="MacIcon1" className="w-16 md:w-auto" />
              <p className="text-center mt-4">
                We make comprehensive strategies that make businesses unique
                from competitors.
              </p>
            </div>
            {/* post 2 */}
            <div className="grid mt-8 md:place-items-center md:mt-4 py-8 md:py-0">
              <img src={MacIcon2} alt="MacIcon2" className="w-16 md:w-auto" />
              <p className="text-center mt-4">
                We make comprehensive strategies that make businesses unique
                from competitors.
              </p>
            </div>
            {/* post 3 */}
            <div className="grid mt-8 md:place-items-center md:mt-4 py-8 md:py-0">
              <img src={MacIcon3} alt="MacIcon3" className="w-16 md:w-auto" />
              <p className="text-center mt-4">
                We make comprehensive strategies that make businesses unique
                from competitors.
              </p>
            </div>
            {/* post 4 */}
            <div className="grid mt-8 md:place-items-center md:mt-4 py-8 md:py-0">
              <img src={MacIcon4} alt="MacIcon4" className="w-16 md:w-auto" />
              <p className="text-center mt-4">
                We make comprehensive strategies that make businesses unique
                from competitors.
              </p>
            </div>
          </div>
          <button className="mt-12 md:ml-10 py-2 px-6 rounded-3xl bg-gray-700 text-white hover:bg-orange-500 transition-all duration-150 shadow-xl">
            Get Started
          </button>
        </div>
        {/* right side container */}
        <div className="w-full md:w-fit grid place-items-center md:mt-12 border-radious-4 bg-gradient-to-r from-pink-200  to-cyan-200">
          <img src={Imac} alt="Imac" className="w-96 md:w-[30rem]" />
        </div>
      </section>
      {/* ------------------------------------ seventh section ------------------------------------ */}
      <section className="py-12 md:px-24">
        <p className="text-center text-orange-500 font-extrabold">
          News & Blog
        </p>
        <p className="text-center font-extrabold text-5xl text-gray-700 mt-6">
          Our latest <span className="text-orange-500">media</span>
        </p>
        <div className="grid md:grid-cols-3 mt-14 place-items-center">
          {/* card 1 */}
          <div className="card bg-base-100 w-80 mt-8">
            <figure>
              <img
                src={OurLatestMedia1}
                alt="OurLatestMedia1"
                className="hover:scale-105 transition-all duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-blue-800 text-sm">
                {" "}
                <div className="h-3 w-3 rounded-full border border-orange-500"></div>{" "}
                October 12 , 2022
              </h2>
              <p className="capitalize mt-4 font-bold text-lg text-blue-800 cursor-pointer">
                10 Reasons Why Your Website Isn’t Showing Up On Google (and How
                to Fix It)
              </p>
              <AiOutlinePlusCircle className="mt-4 text-3xl text-blue-800" />
            </div>
          </div>
          {/* card 2 */}
          <div className="card bg-base-100 w-80">
            <figure>
              <img
                src={OurLatestMedia2}
                alt="OurLatestMedia2"
                className="hover:scale-105 transition-all duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-blue-800 text-sm">
                {" "}
                <div className="h-3 w-3 rounded-full border border-orange-500"></div>{" "}
                PPC, Sales
              </h2>
              <p className="capitalize mt-4 font-bold text-lg text-blue-800 cursor-pointer">
                Indigenous organic growth to history of soccer
              </p>
              <AiOutlinePlusCircle className="mt-4 text-3xl text-blue-800" />
            </div>
          </div>
          {/* card 3 */}
          <div className="card bg-base-100 w-80">
            <figure>
              <img
                src={OurLatestMedia3}
                alt="OurLatestMedia3"
                className="hover:scale-105 transition-all duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-blue-800 text-sm">
                {" "}
                <div className="h-3 w-3 rounded-full border border-orange-500"></div>{" "}
                PPC, Sales
              </h2>
              <p className="capitalize mt-4 font-bold text-lg text-blue-800 cursor-pointer">
                Indigenous organic growth to history of soccer
              </p>
              <AiOutlinePlusCircle className="mt-4 text-3xl text-blue-800" />
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------ seventh section ------------------------------------ */}
      <section className="py-12 md:px-24">
        <p className="text-center text-orange-500 font-extrabold">
          Client's love
        </p>
        <p className="text-center font-extrabold text-5xl text-gray-700 mt-4">
          Love From <span className="text-orange-500">Clients</span>
        </p>
        <div className="grid md:place-items-center md:grid-cols-3 px-6 mt-6">
          {/* image  */}
          <div className="w-full md:w-fit grid place-items-center md:mt-12 border-radious-5 bg-gradient-to-r from-pink-200  to-cyan-200">
            <img
              src={LoveFromClients}
              alt="LoveFromClients"
              className="rounded-full"
            />
          </div>
          {/* slider */}
          <div className="md:col-span-2 md:px-8 overflow-hidden">
            <CommentsCrousel/>
          </div>
        </div>
      </section>
      {/* ------------------------------------ eigth section ------------------------------------ */}
      <section className="py-12 md:px-24 md:my-16">
      <p className="text-center text-orange-500 font-extrabold">
          Have a Look
        </p>
        <p className="text-center font-extrabold text-5xl text-gray-700 mt-4 px-2">
          We're <span className="text-orange-500">working</span> with
        </p>
        {/* company names crousel  */}
        <div className="w-full py-8 mt-8 px-6">
          <CompanyNamesCrousel/>
        </div>
      </section>
    </>
  );
};

export default Home;
