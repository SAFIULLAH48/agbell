import React from 'react';
import { FiSettings, FiBell, FiInfo, FiMail } from 'react-icons/fi'; // Import icons from react-icons
import Agbellbutton from '../components/Agbellbutton';

const UserProfile = () => {
  const handleSettingsClick = () => {
    // Handle Settings button click
  };

  const handleNotificationClick = () => {
    // Handle Notification button click
  };

  const handleAboutClick = () => {
    // Handle About button click
  };

  const handleContactClick = () => {
    // Handle Contact button click
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="profile-container bg-white rounded-lg shadow-lg p-6 max-w-xs w-full">
        <div className="profile-header flex items-center  bg-gradient-to-r from-custom-lightblack via-custom-darkblue to-custom-blue rounded-md ">
          <div className="profile-info">
            <h1 className="text-xl  text-white font-bold">Katherina William</h1>
            <p className="text-white">lorem@gmail.com</p>
          </div>
        </div>
        <div className="menu mt-4">
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-white p-2 mr-2">
              <FiSettings className="w-5 h-5 text-gray-700" />
            </div>
            <button onClick={handleSettingsClick} className="text-gray-700 focus:outline-none">
              Settings
            </button>
          </div>
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-white p-2 mr-2">
              <FiBell className="w-5 h-5 text-gray-700" />
            </div>
            <button onClick={handleNotificationClick} className="text-gray-700 focus:outline-none">
              Notification
            </button>
          </div>
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-white p-2 mr-2">
              <FiInfo className="w-5 h-5 text-gray-700" />
            </div>
            <button onClick={handleAboutClick} className="text-gray-700 focus:outline-none">
              About Us
            </button>
          </div>
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-white p-2 mr-2">
              <FiMail className="w-5 h-5 text-gray-700" />
            </div>
            <button onClick={handleContactClick} className="text-gray-700 focus:outline-none">
              Contact Us
            </button>
          </div>
        </div>
        <Agbellbutton text="Sign Out"/>
      </div>
    </div>
  );
};

export default UserProfile;
