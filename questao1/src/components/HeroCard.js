import React from 'react';
import './HeroCard.css';

const HeroCard = ({ hero }) => {
  const imageUrl = hero.images.lg;

  return (
    <div className="hero-card">
      <img
        src={imageUrl}
        alt={hero.name}
        className="hero-image"
      />
      <h3>{hero.name}</h3>
    </div>
  );
};

export default HeroCard;
