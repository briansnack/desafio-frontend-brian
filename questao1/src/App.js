import React, { useState, useEffect } from 'react';
import HeroList from './components/HeroList';
import SearchBar from './components/SearchBar';
import Battle from './components/Battle';
import useHeroStore from './store/heroStore'; 
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true' || false;
  });

  const { fetchHeroes } = useHeroStore();

  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    fetchHeroes(); 
  }, [fetchHeroes]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Modo claro' : 'Modo Escuro'}
      </button>
      <SearchBar />
      {/* <HeroList /> */}
      <Battle />
    </div>
  );
};

export default App;