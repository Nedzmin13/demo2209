// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* ===== VIDEO DI SFONDO PER MOBILE ===== */}
            {/* Sarà visibile solo su schermi piccoli grazie al CSS */}
            <video className={styles.backgroundVideoMobile} autoPlay loop muted playsInline>
                <source src="/lavori-bg.mp4" type="video/mp4" />
            </video>
            {/* ======================================= */}

            <div className={styles.overlay}></div>
            <div className={styles.content}>

                <p className={styles.subtitle}>
                    La nostra esperienza decennale in scavi, movimento terra, demolizioni e opere&nbsp;stradali.
                    <br />
                    Professionalità e precisione al servizio del tuo cantiere.
                </p>
                <div className={styles.buttonContainer}>
                    <Link to="/chi-siamo" className="btn btn-primary">Scopri di più &rarr;</Link>
                    <Link to="/contatti" className="btn btn-secondary">Richiedi Preventivo</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;