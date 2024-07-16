import React from 'react';

const ToggleButton = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button className="toggle-button" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleButton;