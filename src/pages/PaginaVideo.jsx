// src/pages/PaginaVideo.jsx
import React from 'react';
import { Title, Meta } from 'react-head';
import PageHeader from '../components/PageHeader';
import styles from '../components/VideoGallery.module.css';

// SOSTITUISCI IL VECCHIO ARRAY...
// const VIDEO_COUNT = 12;
// const videos = Array.from({ length: VIDEO_COUNT }, (_, i) => `/lavori-video-${i + 1}.mp4`);

// ...CON QUESTO NUOVO ARRAY.
// Incolla qui gli URL che hai copiato da Cloudinary
const videos = [
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574400/lavori.video----3_dltlwe.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574397/lavori.video----6_ee4mfq.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574391/lavori.video----7_luadv4.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574383/lavori.video----5_jv5tla.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574379/lavori.video----12_qmz7zw.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574359/lavori.video----1_kzqf6y.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574359/lavori.video----8_cdvl03.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574397/lavori.video----10_ogx38e.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574323/lavori.video----11_pv5zoi.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574302/lavori.video----4_ovvh2j.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574288/lavori.video----2_t71qo7.mp4",
    "https://res.cloudinary.com/dyatobm6t/video/upload/v1758574263/lavori.video----9_mztuqs.mp4",
];


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
                    {/* La logica qui sotto non cambia, userà i nuovi URL */}
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