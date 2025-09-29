// src/pages/PaginaVideo.jsx
import React from 'react';
import { Title, Meta } from 'react-head';
import PageHeader from '../components/PageHeader';
import styles from '../components/VideoGallery.module.css';
import YouTube from 'react-youtube';

import LazyYouTube from '../components/LazyYouTube';
// === INCOLLA QUI GLI ID DEI 12 VIDEO DI YOUTUBE ===
const youtubeVideoIds = [
    "W9wbjLCHyyY", "VLjaGjEIqZo", "dI_xPZhiKHc", "j-ftzWJz91Q",
    "NRhoVHqbey4", "7jd_UJo7bMc", "HOKHkpJRhBU", "MN0gFdYwkPw",
    "ZPZShuJx6h8", "xI7C73fbU_M", "ID_VIDEO_11", "ID_VIDEO_12",
];
// =================================================

const PaginaVideo = () => {
    return (
        <>
            <Title>Galleria Video - I Nostri Lavori | Sartorello Escavazioni</Title>
            <Meta name="description" content="Guarda i video dei nostri macchinari in azione..." />

            <PageHeader
                title="Galleria Video"
                subtitle="La potenza e la precisione dei nostri mezzi in azione."
            />
            <div className="container">
                <div className={styles.videoGrid}>
                    {youtubeVideoIds.map((videoId, index) => (
                        <div key={index} className={styles.galleryItem}>
                            <LazyYouTube videoId={videoId} title={`Video lavoro ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PaginaVideo;