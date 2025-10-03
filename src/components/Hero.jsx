import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>

            <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
                <source src="/lavori-hero6.mp4" type="video/mp4" />
            </video>

            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    SARTORELLO <span className={styles.highlight}>ESCAVAZIONI</span>
                </h1>
                <p className={styles.subtitle}>
                    La nostra esperienza decennale in <strong>scavi, movimento terra, demolizioni e opere&nbsp;stradali</strong>.
                    <br />
                    Professionalità e precisione al servizio del tuo cantiere.
                </p>
                <div className={styles.buttonContainer}>
                    <RouterLink to="/chi-siamo" className="btn btn-primary">Scopri di più &rarr;</RouterLink>
                </div>
            </div>
        </section>
    );
};

export default Hero;