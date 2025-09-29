// src/components/LazyYouTube.jsx
import React, { useState } from 'react';
import styles from './LazyYouTube.module.css';
import { FaPlayCircle } from 'react-icons/fa';

const LazyYouTube = ({ videoId, title }) => {
    const [showVideo, setShowVideo] = useState(false);

    // URL dell'anteprima in alta qualità da YouTube
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

    if (showVideo) {
        // Se l'utente ha cliccato, mostra il vero player di YouTube
        return (
            <div className={styles.videoWrapper}>
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }

    // Altrimenti, mostra l'anteprima cliccabile
    return (
        <div
            className={styles.thumbnailWrapper}
            onClick={() => setShowVideo(true)}
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
            <div className={styles.playButton}>
                <FaPlayCircle />
            </div>
        </div>
    );
};

export default LazyYouTube;