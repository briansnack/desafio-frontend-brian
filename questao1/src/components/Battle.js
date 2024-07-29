import React, { useState, useEffect } from 'react';
import useHeroStore from '../store/heroStore';
import './Battle.css';

const Battle = () => {
    const { filteredHeroes } = useHeroStore();
    const [hero1, setHero1] = useState(null);
    const [hero2, setHero2] = useState(null);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (hero1 && hero2) {
            calculateWinner();
        }
    }, [hero1, hero2]);

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

    const resetSelection = () => {
        setHero1(null);
        setHero2(null);
        setWinner(null);
    };

    return (
        <div className="battle-container">
            <h2>Escolha dois heróis para batalhar</h2>
            {!winner && (
                <div className="hero-list">
                    {filteredHeroes.map(hero => (
                        <div
                            key={hero.id}
                            className={`hero-card ${hero === hero1 || hero === hero2 ? 'highlight' : ''}`}
                            onClick={() => {
                                if (!hero1) {
                                    handleSelectHero(hero, 1);
                                } else if (!hero2 && hero !== hero1) {
                                    handleSelectHero(hero, 2);
                                }
                            }}
                        >
                            <img src={hero.images.sm} alt={hero.name} />
                            <h3>{hero.name}</h3>
                        </div>
                    ))}
                </div>
            )}
            {hero1 && hero2 && !winner && (
                <button className="battle-button" onClick={calculateWinner}>Lutar!</button>
            )}
            {winner && (
                <div className="battle-result">
                    <h3>Vencedor:</h3>
                    <div>
                        <h4>{winner.name}</h4>
                        <img src={winner.images.lg} alt={winner.name} className="hero-image" />
                        <p>Inteligência: {winner.powerstats.intelligence}</p>
                        <p>Força: {winner.powerstats.strength}</p>
                        <p>Velocidade: {winner.powerstats.speed}</p>
                        <p>Durabilidade: {winner.powerstats.durability}</p>
                        <p>Poder: {winner.powerstats.power}</p>
                        <p>Combate: {winner.powerstats.combat}</p>
                    </div>
                    <button className="reset-button" onClick={resetSelection}>Escolher Novos Heróis</button>
                </div>
            )}
        </div>
    );
};

export default Battle;