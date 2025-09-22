import React from 'react';
import { Title, Meta } from 'react-head';
import PageHeader from '../components/PageHeader';
import styles from '../components/VideoGallery.module.css';

const VIDEO_COUNT = 12;
const videos = Array.from({ length: VIDEO_COUNT }, (_, i) => `/lavori.video----${i + 1}.mp4`);

const PaginaVideo = () => {
    return (
        <>
            <Title>Galleria Video - I Nostri Lavori | Sartorello Escavazioni</Title>
            <Meta name="description" content="Guarda i video dei nostri macchinari in azione durante scavi, demolizioni e opere stradali." />

            <PageHeader
                title="Galleria Video"
                subtitle="La potenza e la precisione dei nostri mezzi in azione."
            />
            <div className="container">
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
            </div>
        </>
    );
};

export default PaginaVideo;