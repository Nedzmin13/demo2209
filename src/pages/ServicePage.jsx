// src/pages/ServicePage.jsx
import React from 'react';
import { Title, Meta } from 'react-head';
import PageHeader from '../components/PageHeader';
import ServicesBar from '../components/ServicesBar';
import styles from './ServicePage.module.css';

// Importa Lightbox per le immagini
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import LazyYouTube from '../components/LazyYouTube';

const ServicePage = ({ title, description, seoDescription, images = [], youtubeVideoIds = [] }) => {
    // Stato per il lightbox delle immagini
    const [index, setIndex] = React.useState(-1);

    // Prepara i dati per il lightbox (solo immagini)
    const lightboxImages = images.map(img => ({ src: img }));

    return (
        <>
            <Title>{`${title} - Servizi | Sartorello Escavazioni`}</Title>
            <Meta name="description" content={seoDescription} />

            <PageHeader title={title} subtitle={description} />
            <ServicesBar />

            <div className="container">
                {/* --- SEZIONE GALLERIA IMMAGINI --- */}
                {images.length > 0 && (
                    <div className={styles.gallerySection}>
                        <h2 className={styles.sectionTitle}>Galleria Immagini</h2>
                        <div className={styles.galleryGrid}>
                            {images.map((src, idx) => (
                                <div key={`img-${idx}`} className={styles.galleryItem} onClick={() => setIndex(idx)}>
                                    <img src={src} alt={`${title} - immagine ${idx + 1}`} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- SEZIONE GALLERIA VIDEO (con Lazy Loading) --- */}
                {youtubeVideoIds.length > 0 && (
                    <div className={styles.gallerySection}>
                        <h2 className={styles.sectionTitle}>Galleria Video</h2>
                        <div className={styles.galleryGrid}>
                            {youtubeVideoIds.map((videoId, idx) => (
                                <div key={`vid-${idx}`} className={styles.galleryItem}>
                                    <LazyYouTube videoId={videoId} title={`${title} - video ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Messaggio se non ci sono media */}
                {images.length === 0 && youtubeVideoIds.length === 0 && (
                    <p className={styles.noMedia}>Galleria in allestimento.</p>
                )}
            </div>

            {/* Lightbox per le immagini */}
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={lightboxImages}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
            />
        </>
    );
};

export default ServicePage;