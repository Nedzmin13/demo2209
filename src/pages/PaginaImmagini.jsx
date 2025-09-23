import React, { useState } from 'react';
import { Title, Meta } from 'react-head';
import PageHeader from '../components/PageHeader';
import styles from '../components/ImageGallery.module.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const IMAGE_COUNT = 33;
const images = Array.from({ length: IMAGE_COUNT }, (_, i) => ({ src: `/lavori-${i + 1}.jpg` }));

const PaginaImmagini = () => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            {/* CORREZIONE: Usa i componenti Title e Meta */}
            <Title>Galleria Immagini - I Nostri Lavori | Sartorello Escavazioni</Title>
            <Meta name="description" content="Guarda le foto dei nostri cantieri: scavi, demolizioni, opere stradali e molto altro." />

            <PageHeader
                title="Galleria Immagini"
                subtitle="Una raccolta visiva dei nostri migliori interventi sul campo."
            />
            <div className="container">
                <div className={styles.galleryGrid}>
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            className={styles.galleryItem}
                            onClick={() => setIndex(idx)}
                        >
                            <img src={image.src} alt={`Lavoro di escavazione ${idx + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={images}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
            />
        </>
    );
};

export default PaginaImmagini;