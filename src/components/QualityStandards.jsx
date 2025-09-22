// src/components/QualityStandards.jsx
import React from 'react';
import styles from './QualityStandards.module.css';
import { FaCheckCircle, FaUserShield, FaLeaf, FaChalkboardTeacher } from 'react-icons/fa';

const standards = [
    { icon: <FaCheckCircle />, title: 'Controllo Qualità', description: 'Ogni progetto segue rigorosi protocolli di controllo qualità per garantire standard elevati.' },
    { icon: <FaUserShield />, title: 'Sicurezza Certificata', description: 'Tutti i nostri operatori sono formati secondo le normative di sicurezza più recenti.' },
    { icon: <FaLeaf />, title: 'Rispetto Ambientale', description: 'Utilizziamo tecnologie eco-compatibili e seguiamo protocolli di sostenibilità ambientale.' },
    { icon: <FaChalkboardTeacher />, title: 'Formazione Continua', description: 'Il nostro personale partecipa regolarmente a corsi di aggiornamento professionale.' },
];

const QualityStandards = () => {
    return (
        <section className={styles.standardsSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2>I Nostri Standard di Qualità</h2>
                    <p>Principi che guidano ogni nostro intervento per garantire risultati eccellenti.</p>
                </div>
                <div className={styles.standardsGrid}>
                    {standards.map((standard, index) => (
                        <div key={index} className={styles.standardCard}>
                            <div className={styles.cardHeader}>
                                {standard.icon}
                                <h3>{standard.title}</h3>
                            </div>
                            <p>{standard.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualityStandards;