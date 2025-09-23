// src/components/OpenPositions.jsx
import React from 'react';
import styles from './OpenPositions.module.css';
import { FaEnvelope } from 'react-icons/fa'; // Importa l'icona
import { Link as ScrollLink } from 'react-scroll'; // Importa per lo scroll

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

                {/* === SEZIONE "SPONTANEOUS" MODIFICATA === */}
                <div className={styles.spontaneous}>
                    <p>Invia la tua candidatura compilando il form sottostante.</p>
                    <ScrollLink
                        to="application-form"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="btn btn-primary"
                    >
                        Candidati Ora
                    </ScrollLink>

                    <div className={styles.divider}>
                        <span>oppure</span>
                    </div>

                    <p>Inviaci direttamente il tuo CV via email:</p>
                    <a
                        href="mailto:sartorello@sartorelloescavazioni.com?subject=Candidatura Spontanea"
                        className={styles.emailButton}
                    >
                        <FaEnvelope /> Invia Email con CV
                    </a>
                </div>
                {/* ======================================= */}

            </div>
        </section>
    );
};

export default OpenPositions;