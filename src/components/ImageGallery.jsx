// src/components/ImageGallery.jsx
import React, { useState } from 'react';
import styles from './ImageGallery.module.css';

// Importa la libreria Lightbox e i suoi stili
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// --- IMPOSTA QUI IL NUMERO DI IMMAGINI CHE HAI CARICATO ---
const IMAGE_COUNT = 33;

// Genera l'array di percorsi delle immagini
const images = Array.from({ length: IMAGE_COUNT }, (_, i) => ({
    src: `/lavori-${i + 1}.jpg`
}));

const ImageGallery = () => {
    const [index, setIndex] = useState(-1); // Stato per gestire l'immagine aperta (-1 significa chiuso)

    // Se non ci sono immagini, non mostrare nulla
    if (IMAGE_COUNT === 0) {
        return null;
    }

    return (
        <section className={`${styles.gallerySection} container`}>
            <h2>Galleria Immagini</h2>
            <div className={styles.galleryGrid}>
                {images.map((image, idx) => (
                    <div
                        key={idx}
                        className={styles.galleryItem}
                        onClick={() => setIndex(idx)} // Apre il lightbox con l'immagine cliccata
                    >
                        <img src={image.src} alt={`Lavoro di escavazione ${idx + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>

            {/* Componente Lightbox che appare quando `index` è >= 0 */}
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={images}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
            />
        </section>
    );
};

export default ImageGallery;