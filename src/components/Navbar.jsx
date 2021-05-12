import React from 'react';
import StorageButton from './StorageButton'
import ClearButton from './ClearButton'

const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
    localStorage.setItem('whichMode', !props.darkMode)
   
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <StorageButton />
      <ClearButton />
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
