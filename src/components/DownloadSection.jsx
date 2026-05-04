import React from 'react';
import styles from './DownloadSection.module.css';
import { FaDownload } from 'react-icons/fa';

const DownloadSection = () => {
    return (
        <section className={styles.downloadSection}>
            <div className={`${styles.container} container`}>
                <h2>Documenti Scaricabili</h2>
                <p>Accedi alla documentazione completa delle nostre certificazioni e attestazioni.</p>
                <div className={styles.buttonContainer}>

                    {/*
                      ATTENZIONE: I pulsanti duplicati qui sotto (ISO 9001 e SOA)
                      hanno lo stesso testo ma puntano a file diversi.
                      Questo può confondere gli utenti.
                    */}

                    {/* --- PRIMA FILA --- */}
                    <a href="/certificato-aenor-iso-9001.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica ISO 9001
                    </a>
                    <a href="/certificato-aenor-iso-14001.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica ISO 14001
                    </a>
                    <a href="/certificato-aenor-iso-45001.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica ISO 45001
                    </a>

                    {/* --- SECONDA FILA --- */}
                    <a href="/attestazione-soa-esna.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica Attestazione SOA
                    </a>
                    <a href="/certificato-iso-9001.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica ISO 9001
                    </a>
                    <a href="/attestazione-soa.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica Attestazione SOA
                    </a>

                </div>
                <small className={styles.note}>* I documenti sono in formato PDF e richiedono un lettore apposito.</small>
            </div>
        </section>
    );
};

export default DownloadSection;