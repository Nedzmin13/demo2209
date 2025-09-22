// src/components/VideoGallery.jsx
import React from 'react';
import styles from './VideoGallery.module.css';

const VIDEO_COUNT = 12;
const videos = Array.from({ length: VIDEO_COUNT }, (_, i) => `/lavori.video----${i + 1}.mp4`);

const VideoGallery = () => {
    if (VIDEO_COUNT === 0) { return null; }

    return (
        <section className={`${styles.gallerySection} container`}>
            <h2>Galleria Video</h2>
            {/* Un semplice div che useremo come contenitore per le colonne */}
            <div className={styles.videoGrid}>
                {videos.map((src, index) => (
                    <div key={index} className={styles.galleryItem}>
                        <video width="100%" controls preload="metadata">
                            <source src={src} type="video/mp4" />
                            Il tuo browser non supporta il tag video.
                        </video>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoGallery;