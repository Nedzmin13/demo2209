import React from 'react';
import styles from './Timeline.module.css';

const timelineData = [
    { year: 2008, title: "Fondazione dell'azienda", description: "Nasce Sartorelli Escavazioni con una visione chiara: eccellenza nel movimento terra." },
    { year: 2010, title: "Espansione del parco mezzi", description: "Investimenti significativi in tecnologie all'avanguardia e macchinari specializzati." },
    { year: 2015, title: "Certificazioni di qualità", description: "Ottenimento delle principali certificazioni ISO per qualità e sicurezza." },
    { year: 2024, title: "Leader del settore", description: "Oltre 500 progetti completati e una reputazione consolidata nel territorio." },
];

const Timeline = () => {
    return (
        <section className={styles.timelineSection}>
            <div className="container">
                <div className={styles.header}>
                    <p>Un viaggio di crescita continua, fatto di investimenti, innovazione e dedizione.</p>
                </div>
                <div className={styles.timelineGrid}>
                    {timelineData.map(item => (
                        <div key={item.year} className={styles.timelineCard}>
                            <div className={styles.year}>{item.year}</div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;