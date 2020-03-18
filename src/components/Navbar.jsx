import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(window.localStorage.getItem('darkmode')));
  const toggleMode = e => {
    e.preventDefault();
    window.localStorage.setItem('darkmode', !darkMode)
    console.log(window.localStorage)
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    console.log('useEffect, darkMode state:', darkMode)
    const body = document.querySelector('body')
    darkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode")
  })

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
