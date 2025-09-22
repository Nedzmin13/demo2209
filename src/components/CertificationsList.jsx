// src/components/CertificationsList.jsx
import React from 'react';
import styles from './CertificationsList.module.css';
import { FaCheckCircle, FaStar, FaAward } from 'react-icons/fa';

// Dati presi direttamente dai tuoi PDF
const certifications = [
    {
        icon: <FaCheckCircle />,
        title: 'UNI EN ISO 9001:2015',
        subtitle: 'SISTEMA DI GESTIONE DELLA QUALITÀ',
        description: 'Certificazione che attesta la conformità del nostro sistema di gestione alla norma per la qualità, garantendo efficienza e miglioramento continuo.',
        validity: 'Valida fino al 01/10/2026',
        pdfLink: '/certificato-iso-9001.pdf' // Link al file in /public
    },
    {
        icon: <FaAward />,
        title: 'Attestazione SOA',
        subtitle: 'QUALIFICAZIONE LAVORI PUBBLICI',
        description: 'Attestazione di qualificazione all\'esecuzione di lavori pubblici, rilasciata ai sensi del D.P.R. 207/2010.',
        validity: 'Valida fino al 30/09/2026',
        pdfLink: '/attestazione-soa.pdf' // Link al file in /public
    },
];

const soaCategories = [
    "OG3 classifica II",
    "OG6 classifica II",
    "OG8 classifica II",
    "OG12 classifica II",
    "OS1 classifica II",
    "OS23 classifica II"
];

const CertificationsList = () => {
    return (
        <section className={`${styles.certSection} container`}>
            <div className={styles.header}>
                <h2>Le Nostre Certificazioni Principali</h2>
            </div>
            <div className={styles.certGrid}>
                {certifications.map((cert, index) => (
                    <div key={index} className={styles.certCard}>
                        <div className={styles.iconWrapper}>{cert.icon}</div>
                        <h3 className={styles.cardTitle}>{cert.title}</h3>
                        <span className={styles.cardSubtitle}>{cert.subtitle}</span>
                        <p className={styles.description}>{cert.description}</p>
                        <div className={styles.validity}>{cert.validity}</div>
                        <a href={cert.pdfLink} className={styles.pdfButton} target="_blank" rel="noopener noreferrer">
                            Visualizza PDF
                        </a>
                    </div>
                ))}
            </div>

            <div className={styles.soaSection}>
                <h3>Disponiamo dell'attestazione SOA per le seguenti categorie:</h3>
                <ul className={styles.soaList}>
                    {soaCategories.map((cat, index) => (
                        <li key={index}><FaStar /> {cat}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CertificationsList;