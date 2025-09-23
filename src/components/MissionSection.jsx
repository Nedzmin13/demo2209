import React from 'react';
import styles from './MissionSection.module.css';

const MissionSection = () => {
    return (
        <section className={styles.missionSection}>
            <div className="container">
                <div className={styles.missionContent}>
                    <h2>La Nostra Mission</h2>
                    <p>
                        Il nostro impegno quotidiano è soddisfare anche i clienti più esigenti con la qualità del servizio che offriamo, unendo puntualità, rapidità ed efficienza. Lavoriamo ogni giorno con passione, guardando con entusiasmo al futuro.
                    </p>
                </div>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>32</span>
                        <span className={styles.statLabel}>Operai e Autisti</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Mezzi Specializzati</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>Anni di Esperienza</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;