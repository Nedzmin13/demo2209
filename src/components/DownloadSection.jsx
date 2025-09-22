// src/components/DownloadSection.jsx
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
                    <a href="/certificato-iso-9001.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FaDownload /> Scarica Certificazione ISO 9001
                    </a>
                    <a href="/attestazione-soa.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <FaDownload /> Scarica Attestazione SOA
                    </a>
                </div>
                <small className={styles.note}>* I documenti sono in formato PDF e richiedono un lettore apposito.</small>
            </div>
        </section>
    );
};

export default DownloadSection;