import React from 'react';
import './HeroCard.css';

const HeroCard = ({ hero }) => {
  return (
    <div className="hero-card">
      <h3>{hero.name}</h3>
      <p><strong>Intelligence:</strong> {hero.intelligence}</p>
      <p><strong>Strength:</strong> {hero.strength}</p>
      <p><strong>Speed:</strong> {hero.speed}</p>
      <p><strong>Durability:</strong> {hero.durability}</p>
      <p><strong>Power:</strong> {hero.power}</p>
      <p><strong>Combat:</strong> {hero.combat}</p>
    </div>
  );
};

export default HeroCard;