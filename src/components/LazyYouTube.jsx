import React, { useState } from 'react';
import styles from './LazyYouTube.module.css';
import { FaPlayCircle } from 'react-icons/fa';

const LazyYouTube = ({ videoId, title }) => {
    const [showVideo, setShowVideo] = useState(false);
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div className={styles.videoContainer}>
            {!showVideo ? (
                // Stato #1: Mostra l'anteprima
                <div
                    className={styles.thumbnail}
                    onClick={() => setShowVideo(true)}
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                >
                    <div className={styles.playButton}>
                        <FaPlayCircle />
                    </div>
                </div>
            ) : (
                // Stato #2: Mostra il player
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default LazyYouTube;