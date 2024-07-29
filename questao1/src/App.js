// src/App.js
import React, { useState, useEffect } from 'react';
import HeroList from './components/HeroList';
import SearchBar from './components/SearchBar';
import Battle from './components/Battle';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true' || false;
  });

  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <SearchBar />
      <Battle />
      <HeroList />
    </div>
  );
};

export default App;