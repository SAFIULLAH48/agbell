import React from "react";
import { Link } from "react-router-dom";
import study from "../assets/images/study.png"; // Adjust the path based on your project structure
import Agbelllogo from "../components/Agbelllogo";

const Welcomescreen = () => {
  return (
    <div className="bg-custom-grey flex flex-col items-center justify-start min-h-screen p-4 md:p-8 lg:p-12">
      <Agbelllogo />
      <img className="w-60 sm:w-72 md:w-80 lg:w-96 mt-8" src={study} alt="study" />
      <p className="font-bold text-lg md:text-xl lg:text-2xl mt-4">Lorem Ipsum</p>
      <p className="text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-2 md:mt-4 text-sm md:text-base lg:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="hidden md:block" /> eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>
      <Link to="/signin" className="text-blue-700 font-semibold mt-6 md:mt-8 lg:mt-10">Skip</Link>
    </div>
  );
};

export default Welcomescreen;
