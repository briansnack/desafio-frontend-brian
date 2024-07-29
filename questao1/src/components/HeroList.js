import React, { useEffect } from 'react';
import useHeroStore from '../store/heroStore';
import HeroCard from './HeroCard';
import './HeroList.css';

const HeroList = () => {
  const { heroes, fetchHeroes, filteredHeroes } = useHeroStore();

  useEffect(() => {
    fetchHeroes();
  }, [fetchHeroes]);

  return (
    <div className="hero-list">
      {filteredHeroes.length > 0 ? (
        filteredHeroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))
      ) : (
        <p>No heroes available</p>
      )}
    </div>
  );
};

export default HeroList;