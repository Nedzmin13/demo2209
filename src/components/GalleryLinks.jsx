// src/components/GalleryLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GalleryLinks.module.css';
import { FaImages, FaVideo } from 'react-icons/fa';

const GalleryLinks = () => {
    return (
        <section className={`${styles.galleryLinksSection} container`}>
            <Link to="/lavori/immagini" className={styles.card}>
                <FaImages className={styles.icon} />
                <h2>Galleria Immagini</h2>
                {/* Aggiunto <br /> per forzare l'interruzione di riga */}
                <p>Esplora le foto dei nostri cantieri e delle<br />nostre realizzazioni.</p>
                <span className={styles.button}>Vedi le foto &rarr;</span>
            </Link>
            <Link to="/lavori/video" className={styles.card}>
                <FaVideo className={styles.icon} />
                <h2>Galleria Video</h2>
                <p>Guarda i nostri macchinari in azione e la precisione dei nostri interventi.</p>
                <span className={styles.button}>Vedi i video &rarr;</span>
            </Link>
        </section>
    );
};

export default GalleryLinks;