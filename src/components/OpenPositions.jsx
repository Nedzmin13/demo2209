// src/components/OpenPositions.jsx
import React from 'react';
import styles from './OpenPositions.module.css';

const positions = [
    'Escavatorista',
    'Autista',
    'Geometra',
    'Responsabile Sicurezza'
];

const OpenPositions = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Posizioni Aperte</h2>
                    <p>Siamo sempre alla ricerca di nuovi talenti. Valutiamo candidature per le seguenti figure professionali.</p>
                </div>
                <div className={styles.grid}>
                    {positions.map((title, index) => (
                        <div key={index} className={styles.card}>
                            <h3>{title}</h3>
                        </div>
                    ))}
                </div>
                <div className={styles.spontaneous}>
                    <p>Invia la tua candidatura per una di queste posizioni o per una candidatura spontanea.</p>
                    <a href="#application-form" className="btn btn-primary">Candidati Ora</a>
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;