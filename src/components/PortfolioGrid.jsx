// src/components/PortfolioGrid.jsx
import React from 'react';
import styles from './PortfolioGrid.module.css';
import { FaMapMarkerAlt, FaUserTie, FaRegClock, FaRegCalendarAlt, FaTag } from 'react-icons/fa';

// Importa le immagini che hai preparato
import imgResidenziale from '../assets/progetto-residenziale.jpg';
import imgDemolizione from '../assets/progetto-demolizione.jpg';
import imgBonifica from '../assets/progetto-bonifica.jpg';

const projects = [
    {
        year: '2024',
        image: imgResidenziale,
        tags: ['Scavi', 'Fondazioni', 'Residenziale'],
        title: 'Scavo per Nuovo Complesso Residenziale',
        location: 'Bologna, Via Roma 123',
        description: 'Scavo per fondazioni di complesso residenziale di 120 unità abitative. Movimento di oltre 15.000 mc di terra.',
        client: 'Costruzioni Bologna SpA',
        duration: '45 giorni'
    },
    {
        year: '2023',
        image: imgDemolizione,
        tags: ['Demolizioni', 'Riqualificazione', 'Commerciale'],
        title: 'Demolizione Centro Commerciale',
        location: 'Modena, Via Emilia 456',
        description: 'Demolizione controllata di centro commerciale dismesso per riqualificazione urbana. Recupero e smaltimento materiali.',
        client: 'Comune di Modena',
        duration: '30 giorni'
    },
    {
        year: '2023',
        image: imgBonifica,
        tags: ['Bonifica', 'Industriale', 'Ambiente'],
        title: 'Bonifica Terreno Industriale',
        location: 'Reggio Emilia, Zona Industriale',
        description: 'Bonifica di terreno industriale contaminato e preparazione per nuovo insediamento produttivo.',
        client: 'Industrie Emiliane Srl',
        duration: '60 giorni'
    },
];

const PortfolioGrid = () => {
    return (
        <section className={`${styles.portfolioSection} container`}>
            <div className={styles.filters}>
                <button className={`${styles.filterBtn} ${styles.active}`}>Tutti i Lavori</button>
                <button className={styles.filterBtn}>Scavi e Movimento Terra</button>
                <button className={styles.filterBtn}>Demolizioni</button>
                <button className={styles.filterBtn}>Progetti Industriali</button>
                <button className={styles.filterBtn}>Progetti Residenziali</button>
            </div>

            <div className={styles.header}>
                <h2>Progetti Realizzati</h2>
                <p>{projects.length} progetti</p>
            </div>

            <div className={styles.projectGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.imageContainer}>
                            <img src={project.image} alt={project.title} />
                            <span className={styles.yearTag}><FaRegCalendarAlt /> {project.year}</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.tags}>
                                {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                            </div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.location}><FaMapMarkerAlt /> {project.location}</p>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.details}>
                                <div><FaUserTie /> <strong>Cliente:</strong> {project.client}</div>
                                <div><FaRegClock /> <strong>Durata:</strong> {project.duration}</div>
                            </div>
                            <a href="#" className={styles.detailsButton}>Vedi Dettagli</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioGrid;