import React, { useEffect } from 'react';
import useHeroStore from '../store/heroStore';
import './HeroList.css';

const HeroList = () => {
    const { filteredHeroes, fetchHeroes } = useHeroStore();

    useEffect(() => {
        fetchHeroes(); 
    }, [fetchHeroes]);

    return (
        <div className="hero-list-container">
            <div className="hero-list">
                {filteredHeroes.length > 0 ? (
                    filteredHeroes.map(hero => (
                        <div key={hero.id} className="hero-card">
                            <img src={hero.images.sm} alt={hero.name} />
                            <h3>{hero.name}</h3>
                        </div>
                    ))
                ) : (
                    <p>Nenhum herói encontrado</p>
                )}
            </div>
        </div>
    );
};

export default HeroList;
