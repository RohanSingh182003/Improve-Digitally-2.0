import React from "react";

const GrowBusiness = () => {
  return (
    <div className="border rounded-md p-8">
      <div className="bg-blue-300 rounded-md p-6">
        <p className="text-gray-700 text-xl font-semibold">Latest Posts</p>
        <div className="w-12 h-1 bg-orange-500 mt-4 rounded-lg"></div>
        <p className="mt-8 text-white">
        We deliver revenue generated results. Grow your business with us, we are a team of professionals with years of experience in proving enormous business growth.
        </p>
        <button className="mt-8 p-4 rounded-3xl bg-orange-500 text-white hover:bg-white hover:text-orange-500 w-full font-semibold transition-all duration-200">Try Our Services</button>
      </div>
    </div>
  );
};

export default GrowBusiness;
