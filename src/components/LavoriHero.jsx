// src/components/LavoriHero.jsx
import React from 'react';
import styles from './LavoriHero.module.css';
import { TbTruck, TbBuildingSkyscraper, TbRoad, TbSwitchHorizontal } from 'react-icons/tb';

const services = [
    {
        icon: <TbTruck />,
        title: 'Scavi e Movimento Terra',
        description: 'Servizi di scavo, estrazione di ghiaia e materiali inerti per preparare ogni tipo di cantiere.',
    },
    {
        icon: <TbBuildingSkyscraper />,
        title: 'Demolizioni Civili e Industriali',
        description: 'Eseguiamo demolizioni controllate e sicure per edifici residenziali, commerciali e industriali.',
    },
    {
        icon: <TbRoad />,
        title: 'Opere Stradali',
        description: 'Costruzione di sottofondi, posa di fognature, urbanizzazioni e preparazione per l\'edilizia stradale.',
    },
    {
        icon: <TbSwitchHorizontal />, // Icona che rappresenta il trasporto/scambio
        title: 'Trasporto Conto Terzi',
        description: 'Grazie a Sartorello Trasporti Srl, offriamo un servizio specializzato di trasporto merci e materiali per cantieri.',
    },
];

const LavoriHero = () => {
    return (
        <section className={styles.lavoriHeroSection}>
            {/* Video di sfondo */}
            <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
                <source src="/lavori-hero1.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
            </video>
            <div className={styles.overlay}></div>

            {/* Contenuto sopra al video */}
            <div className={`${styles.contentContainer} container`}>
                {/* Header della pagina */}
                <div className={styles.header}>
                    <h1>I Nostri Lavori</h1>
                    <p>Una selezione dei progetti più significativi realizzati negli ultimi anni. Ogni lavoro rappresenta il nostro impegno verso qualità e professionalità.</p>
                </div>

                {/* Griglia delle card */}
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LavoriHero;