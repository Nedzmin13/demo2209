import React from 'react';
import styles from './DownloadSection.module.css';
import { FaDownload } from 'react-icons/fa';

const DownloadSection = () => {
    return (
        <section className={styles.downloadSection}>
            <div className={`${styles.container} container`}>
                <h2>Documenti Scaricabili</h2>
                <p>Accedi alla documentazione completa delle nostre certificazioni e attestazioni, incluse le nuove validità e gli archivi precedenti.</p>
                <div className={styles.buttonContainer}>
                    {/* Pulsanti per i nuovi certificati */}
                    <a href="/certificato-aenor-iso-9001.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica ISO 9001 (AENOR)
                    </a>
                    <a href="/certificato-aenor-iso-14001.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica ISO 14001 (AENOR)
                    </a>
                    <a href="/certificato-aenor-iso-45001.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica ISO 45001 (AENOR)
                    </a>
                    <a href="/attestazione-soa-esna.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <FaDownload /> Scarica Attestazione SOA (ESNA)
                    </a>
                    {/* Pulsanti per i vecchi certificati */}
                    <a href="/certificato-iso-9001.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-light">
                        <FaDownload /> Scarica ISO 9001 (Precedente)
                    </a>
                    <a href="/attestazione-soa.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-light">
                        <FaDownload /> Scarica SOA (Precedente)
                    </a>
                </div>
                <small className={styles.note}>* I documenti sono in formato PDF e richiedono un lettore apposito.</small>
            </div>
        </section>
    );
};

export default DownloadSection;