import React from "react";
import './HeroCard.css';

const HeroCard = ({ hero }) => (
    <div className="hero-card">
        <h3>{hero.name}</h3>
        <p>Inteligência: {hero.powerstats.intelligence}</p>
        <p>Força: {hero.powerstats.strength}</p>
        <p>Velocidade: {hero.powerstats.speed}</p>
        <p>Durabilidade: {hero.powerstats.durability}</p>
        <p>Poder: {hero.powerstats.power}</p>
        <p>Combate: {hero.powerstats.combat}</p>
    </div>
);

export default HeroCard;