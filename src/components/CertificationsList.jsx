import React from 'react';
import styles from './CertificationsList.module.css';
import { FaCheckCircle, FaAward, FaStar, FaLeaf, FaHardHat } from 'react-icons/fa';

// Lista completa con 6 certificati (2 vecchi + 4 nuovi)
const certifications = [
    // --- NUOVI CERTIFICATI AENOR ---
    {
        icon: <FaCheckCircle />,
        title: 'UNI EN ISO 9001:2015 (AENOR)',
        subtitle: 'SISTEMA DI GESTIONE DELLA QUALITÀ',
        description: 'Nuova certificazione AENOR che attesta la conformità del nostro sistema di gestione per scavi, movimento terra, opere stradali, demolizioni, acquedotti e fognature.',
        validity: 'Valida fino al 23/10/2027',
        pdfLink: '/certificato-aenor-iso-9001.pdf'
    },
    {
        icon: <FaLeaf />,
        title: 'UNI EN ISO 14001:2015 (AENOR)',
        subtitle: 'SISTEMA DI GESTIONE AMBIENTALE',
        description: 'Certifica il nostro impegno nella gestione responsabile degli impatti ambientali, inclusa la gestione dell\'impianto mobile per la frantumazione di inerti.',
        validity: 'Valida fino al 23/10/2027',
        pdfLink: '/certificato-aenor-iso-14001.pdf'
    },
    {
        icon: <FaHardHat />,
        title: 'UNI EN ISO 45001:2018 (AENOR)',
        subtitle: 'SICUREZZA E SALUTE SUL LAVORO',
        description: 'Garantisce l\'applicazione di un sistema di gestione per la tutela della salute e della sicurezza dei lavoratori nelle nostre attività operative.',
        validity: 'Valida fino al 23/10/2027',
        pdfLink: '/certificato-aenor-iso-45001.pdf'
    },
    // --- NUOVA ATTESTAZIONE SOA ---
    {
        icon: <FaAward />,
        title: 'Attestazione SOA (ESNA-SOA)',
        subtitle: 'QUALIFICAZIONE LAVORI PUBBLICI',
        description: 'Attestazione di qualificazione aggiornata per l\'esecuzione di lavori pubblici, rilasciata ai sensi del D.P.R. 207/2010.',
        validity: 'Valida fino al 30/09/2026',
        pdfLink: '/attestazione-soa-esna.pdf'
    },
    // --- VECCHI CERTIFICATI GIÀ PRESENTI ---
    {
        icon: <FaCheckCircle />,
        title: 'UNI EN ISO 9001:2015',
        subtitle: 'SISTEMA DI GESTIONE DELLA QUALITÀ',
        description: 'Certificazione che attesta la conformità del nostro sistema di gestione alla norma per la qualità, garantendo efficienza e miglioramento continuo.',
        validity: 'Valida fino al 01/10/2026',
        pdfLink: '/certificato-iso-9001.pdf' // Nome file modificato per non creare conflitti
    },
    {
        icon: <FaAward />,
        title: 'Attestazione SOA',
        subtitle: 'QUALIFICAZIONE LAVORI PUBBLICI',
        description: 'Attestazione di qualificazione all\'esecuzione di lavori pubblici, rilasciata ai sensi del D.P.R. 207/2010.',
        validity: 'Valida fino al 30/09/2026',
        pdfLink: '/attestazione-soa.pdf' // Nome file modificato
    }
];

// Lista categorie SOA aggiornata (OG8 ora è classifica III)
const soaCategories = [
    "OG3 classifica II",
    "OG6 classifica II",
    "OG8 classifica III",
    "OG12 classifica II",
    "OS1 classifica II",
    "OS23 classifica II"
];

const CertificationsList = () => {
    return (
        <section className={`${styles.certSection} container`}>
            <div className={styles.header}>
                <h2>Le Nostre Certificazioni</h2>
                <p>Il nostro impegno per la qualità, la sicurezza e l'ambiente è garantito da un sistema di gestione integrato e costantemente aggiornato.</p>
            </div>
            <div className={styles.mainCertsContainer}>
                {certifications.map((cert, index) => (
                    <div key={index} className={styles.certCard}>
                        <div className={styles.iconWrapper}>{cert.icon}</div>
                        <div className={styles.contentWrapper}>
                            <h3 className={styles.cardTitle}>{cert.title}</h3>
                            <span className={styles.cardSubtitle}>{cert.subtitle}</span>
                            <p className={styles.description}>{cert.description}</p>
                            <div className={styles.footer}>
                                <span className={styles.validity}>{cert.validity}</span>
                                <a href={cert.pdfLink} className={styles.pdfButton} target="_blank" rel="noopener noreferrer">
                                    Visualizza PDF
                                </a>
                            </div>
                        </div>
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