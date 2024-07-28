import React from 'react';
import HeroList from './components/HeroList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Listagem de Heróis</h1>
    <SearchBar />
    <HeroList />
  </div>
);

export default App;