import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-grey p-4 flex items-center justify-between fixed w-full top-0 z-50">
      {/* Desktop View */}
      <div className="hidden md:flex gap-4">
        <Link to="/community" className="text-custom-blue hover:underline">Community</Link>
        <Link to="/upcomingevents" className="text-custom-blue hover:underline">Upcoming Events</Link>
        <Link to="/profile" className="text-custom-blue hover:underline">Profile</Link>
        <Link to="/signin" className="text-custom-blue hover:underline">Logout</Link>
      </div>

      {/* Mobile and Tablet View */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-custom-blue focus:outline-none">
          ☰
        </button>
        {isOpen && (
          <div className="absolute top-16 left-0 bg-custom-grey h-screen p-4 flex flex-col gap-4 rounded-lg shadow-lg">
            <Link to="/community" className="text-custom-blue hover:underline">Community</Link>
            <Link to="/upcomingevents" className="text-custom-blue hover:underline">Upcoming Events</Link>
            <Link to="/profile" className="text-custom-blue hover:underline">Profile</Link>
            <Link to="/signin" className="text-custom-blue hover:underline">Logout</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
