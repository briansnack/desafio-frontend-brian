import React from "react";
import useHeroStore from "../store/heroStore";
import './SearchBar.css';

const SearchBar = () => {
    const { heroes, setFilteredHeroes } = useHeroStore();

    const handleSearch = event => {
        const query = event.target.value.toLowerCase();
        const filtered = heroes.filter(hero => 
            hero.name.toLowerCase().includes(query)
        );
        setFilteredHeroes(filtered);
    };
    
    return <input type="text" placeholder="Busca de heróis" onChange={handleSearch} />;
}

export default SearchBar;