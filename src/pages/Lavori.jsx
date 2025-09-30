// src/pages/Lavori.jsx
import React from 'react';
import LavoriHero from '../components/LavoriHero';
import ServicesBar from '../components/ServicesBar';
import GalleryLinks from '../components/GalleryLinks'; // Riutilizzeremo questo componente con un nome nuovo

const Lavori = () => {
    return (
        <>
            <LavoriHero />
            <GalleryLinks />
        </>
    );
};

export default Lavori;