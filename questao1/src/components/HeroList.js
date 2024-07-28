import React, { useEffect, useState } from 'react';
import useHeroStore from '../store/heroStore';
import HeroCard from './HeroCard';
import './HeroList.css';

const HeroList = () => {
  const { heroes, fetchHeroes, filteredHeroes } = useHeroStore();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHeroes().catch(err => setError(err.message));
  }, [fetchHeroes]);

  if (error) {
    return <div className="error">Failed to load heroes: {error}</div>;
  }

  return (
    <div className="hero-list">
      {filteredHeroes.map(hero => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default HeroList;
