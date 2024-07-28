import React from "react";
import Modal from '@mui/material/Modal';
import './HeroModal.css';

const HeroModal = ({ hero, open, handleClose }) => (
    <Modal open={open} onClose={handleClose}>
        <div className="hero-modal">
            <h3>{hero.name}</h3>
            <p>Inteligência: {hero.powerstats.intelligence}</p>
            <p>Força: {hero.powerstats.strength}</p>
            <p>Velocidade: {hero.powerstats.speed}</p>
            <p>Durabilidade: {hero.powerstats.durability}</p>
            <p>Poder: {hero.powerstats.power}</p>
            <p>Combate: {hero.powerstats.combat}</p>
        </div>
    </Modal>
);

export default HeroModal;