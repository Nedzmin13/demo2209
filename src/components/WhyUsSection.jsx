// src/components/WhyUsSection.jsx
import React from 'react';
import styles from './WhyUsSection.module.css';
import { FaGraduationCap, FaHeart, FaShieldAlt, FaUsers } from 'react-icons/fa';

const reasons = [
    { icon: <FaGraduationCap />, title: 'Formazione', description: 'Investiamo nella crescita professionale dei nostri dipendenti con corsi specializzati e certificazioni.' },
    { icon: <FaHeart />, title: 'Ambiente Familiare', description: 'Un clima lavorativo sereno e collaborativo dove ogni persona è valorizzata e rispettata.' },
    { icon: <FaShieldAlt />, title: 'Sicurezza Garantita', description: 'Protocolli di sicurezza rigorosi e DPI di ultima generazione per proteggere tutti i lavoratori.' },
    { icon: <FaUsers />, title: 'Team Affiatato', description: 'Lavorerai con professionisti esperti in un team consolidato e appassionato del proprio lavoro.' },
];

const WhyUsSection = () => {
    return (
        <section className={`${styles.section} container`}>
            <div className={styles.header}>
                <h2>Perché Scegliere Sartorello</h2>
                <p>Più che un lavoro, un'opportunità di crescita in un'azienda solida e innovativa.</p>
            </div>
            <div className={styles.grid}>
                {reasons.map((reason, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>{reason.icon}</div>
                        <h3>{reason.title}</h3>
                        <p>{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUsSection;