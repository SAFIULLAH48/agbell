// src/pages/Community.js
import React from "react";
import EmailFormComponent from "../components/Form";
import Profileimage from "../components/Profileimage";
import wood from "../assets/images/wood.jpg";

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 md:p-8 bg-custom-grey gap-4">
      <p className="text-2xl font-semibold mb-4 mt-14">Community Feed</p>
      <div className="flex items-center justify-center gap-2 w-full">
        <div className="w-10 h-10 md:w-12 md:h-12 border rounded-xl overflow-hidden">
          <Profileimage className="w-full h-full object-cover" />
        </div>
       <div className="mt-3  "> <EmailFormComponent placeholder={"What's on Your Mind?"} /></div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden">
          <Profileimage className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mr-60 w-full mt-4">
        <Profileimage className="w-10 h-10 md:w-12 md:h-12 rounded-xl" />
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold">Lorem</p>
          <p className="text-xs text-gray-600">AG BELL..</p>
        </div>
      </div>
      <img className="w-[30rem] h-60 rounded-lg object-cover mt-4" src={wood} alt="Wood Background" />
      <div className="w-full rounded-lg flex items-center justify-center">
        <EmailFormComponent placeholder={"Type a comment"} />
      </div>
      <div className="w-full mt-2 text-gray-600 flex items-center justify-center">
        <p className="text-xs">Lorem and <span className="text-blue-500">30K</span></p>
      </div>
      <div className="mt-2 w-full md:w-[30rem]">
  <p className="text-sm text-justify">
    <b>LOREM </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis egestas justo, nec fermentum lorem sagittis id. Suspendisse potenti. Nulla facilisi. Nullam luctus nisi vitae quam posuere, et aliquam sapien varius. Fusce efficitur fringilla urna, et tincidunt lacus euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vitae eros sit amet sapien efficitur elementum a eget dolor. Praesent ac nunc vel arcu fermentum vehicula id ut nisl. Integer facilisis sapien sed vehicula interdum. Donec sagittis purus a orci ultricies, a bibendum lacus posuere. Ut imperdiet hendrerit lorem, vitae vehicula erat vulputate sed. Nulla ac urna eget magna ultricies convallis at ac orci.
  </p>
</div>

      <div className="w-full mt-2 text-blue-600 cursor-pointer flex items-center justify-center">
        <p className="text-sm">View All Comments</p>
      </div>
    </div>
   
  );
};

export default Community;
