import React, { useState } from 'react';
import styles from './ImageGallery.module.css';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const IMAGE_COUNT = 33;

const images = Array.from({ length: IMAGE_COUNT }, (_, i) => ({
    src: `/lavori-${i + 1}.jpg`
}));

const ImageGallery = () => {
    const [index, setIndex] = useState(-1);

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
                        onClick={() => setIndex(idx)}
                    >
                        <img src={image.src} alt={`Lavoro di escavazione ${idx + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>

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