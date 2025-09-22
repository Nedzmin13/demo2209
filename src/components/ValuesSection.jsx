// src/components/ValuesSection.jsx
import React from 'react';
import styles from './ValuesSection.module.css';
import { FaAward, FaUsers, FaShieldAlt, FaClock } from 'react-icons/fa';

const values = [
    { icon: <FaAward />, title: 'Qualità ed Efficienza', description: 'Garantiamo standard elevati e massima efficienza in ogni fase del progetto per superare le aspettative.' },
    { icon: <FaUsers />, title: 'Professionalità', description: 'Un team di 32 specialisti qualificati e autisti esperti, guidato da una solida competenza tecnica.' },
    { icon: <FaShieldAlt />, title: 'Sicurezza', description: 'Protocolli rigorosi e macchinari moderni per garantire la totale sicurezza di persone e ambiente.' },
    { icon: <FaClock />, title: 'Puntualità e Rapidità', description: 'Il nostro impegno per rispettare i tempi di consegna, unendo una pianificazione accurata a un\'esecuzione rapida.' },
];

const ValuesSection = () => {
    // ... il resto del componente rimane invariato
    return (
        <section className={`${styles.valuesSection} container`}>
            <div className={styles.header}>
                <h2>I Nostri Valori</h2>
                <p>Principi solidi che guidano ogni nostra decisione e azione quotidiana.</p>
            </div>
            <div className={styles.valuesGrid}>
                {values.map((value, index) => (
                    <div key={index} className={styles.valueCard}>
                        <div className={styles.iconWrapper}>{value.icon}</div>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ValuesSection;