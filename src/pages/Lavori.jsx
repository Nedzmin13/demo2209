// src/pages/Lavori.jsx
import React from 'react';
import ServicesBar from "../components/ServicesBar.jsx";
import LavoriHero from "../components/LavoriHero.jsx";
import MobileServicesGrid from "../components/MobileServicesGrid.jsx";
import GalleryLinks from "../components/GalleryLinks.jsx";
// ... altri import ...
// import styles from './Lavori.module.css'; // Riga cancellata

const Lavori = () => {
    return (
        <>
            <LavoriHero />

            {/* Ora usiamo le classi globali, senza "styles." */}
            <div className="mobileOnly">
                <ServicesBar />
            </div>

            <MobileServicesGrid />

            <div className="desktopOnly">
                <ServicesBar />
            </div>

            <GalleryLinks />
        </>
    );
};

export default Lavori;