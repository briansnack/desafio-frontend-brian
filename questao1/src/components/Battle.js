import React, { useState } from "react";
import useHeroStore from "../store/heroStore";
import './Battle.css';

const Battle = () => {
    const { heroes } = useHeroStore();
    const [hero1, setHero1] = useState(null);
    const [hero2, setHero2] = useState(null);
    const [winner, setWinner] = useState(null);

    const handleSelectHero = (hero, index) => {
        if (index === 1) {
            setHero1(hero);
        } else {
            setHero2(hero);
        }
    };

    const calculateWinner = () => {
        if (hero1 && hero2) {
            const score1 = Object.values(hero1.powerstats).reduce((a, b) => a + b, 0);
            const score2 = Object.values(hero2.powerstats).reduce((a, b) => a + b, 0);
            setWinner(score1 > score2 ? hero1 : hero2);
        }
    };

    return (
        <div className="battle-container">
            <h2>Escolha dois heróis para batalhar</h2>
            <div className="hero-selector">
                <select onChange={(e) => handleSelectHero(JSON.parse(e.target.value), 1)}>
                    <option value="">Selecione o Herói 1</option>
                    {heroes.map(hero => (
                        <option key={hero.id} value={JSON.stringify(hero)}>
                            {hero.name}
                        </option>
                    ))}
                </select>
                <select onChange={(e) => handleSelectHero(JSON.parse(e.target.value), 2)}>
                    <option value="">Selecione o Herói 2</option>
                    {heroes.map(hero => (
                        <option key={hero.id} value={JSON.stringify(hero)}>
                            {hero.name}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={calculateWinner}>Lutar!</button>
            {winner && (
                <div className="battle-result">
                    <h3>Vencedor:</h3>
                    <div>
                        <h4>{winner.name}</h4>
                        <img src={winner.image?.url} alt={winner.name} className="hero-image" />
                        <p>Inteligência: {winner.powerstats.intelligence}</p>
                        <p>Força: {winner.powerstats.strength}</p>
                        <p>Velocidade: {winner.powerstats.speed}</p>
                        <p>Durabilidade: {winner.powerstats.durability}</p>
                        <p>Poder: {winner.powerstats.power}</p>
                        <p>Combate: {winner.powerstats.combat}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Battle;