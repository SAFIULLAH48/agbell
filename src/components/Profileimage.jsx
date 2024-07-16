// src/components/Profileimage.js
import React from 'react';
import profileimage from "../assets/images/profileimage.jfif";

const Profileimage = ({ className }) => {
  return (
    <img
      className={` ${className}`} 
      src={profileimage}
      alt="Profile"
    />
  );
}

export default Profileimage;
