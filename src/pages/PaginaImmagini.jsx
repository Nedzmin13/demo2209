// src/pages/PaginaImmagini.jsx
import React, { useState } from 'react';
import { Title, Meta } from 'react-head';
import PageHeader from '../components/PageHeader';
import styles from '../components/ImageGallery.module.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imageUrls = [
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093759/lavori-21_n01s6o.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093758/lavori-23_gjzqna.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093759/lavori-15_gxtupd.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093761/lavori-20_dk0kmm.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093759/lavori-19_uzcbqe.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093759/lavori-17_amkor3.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093755/lavori-16_asvrkg.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093758/lavori-18_tzry7s.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093750/lavori-33_t2agbm.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093750/lavori-32_dzi9tg.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093749/lavori-24_dkobyx.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093747/lavori-13_mmuopt.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093747/lavori-14_ylfoki.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093745/lavori-31_vegasr.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093745/lavori-27_y8mtjo.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093745/lavori-29_anvt8p.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093745/lavori-22_rjknbd.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093745/lavori-28_mlkmtx.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093745/lavori-26_fmiffz.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093733/DJI_0367_1_kft1m5.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093733/DJI_0966_qamt8j.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093731/DJI_0975_xs9gxi.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093729/TimePhoto_20200924_154303_jagjqo.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093727/IMG_20220525_112142206_HDR_vsrjjd.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093725/IMG_20210415_155434502_HDR_avqes0.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093725/DJI_0827_hjnder.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093722/TimePhoto_20210930_144142_z9qto7.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093722/IMG_20220114_112744715_HDR_me3fyt.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093717/DJI_0363_1_jvn938.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093717/TimePhoto_20230630_142156_dovn8e.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093716/IMG-20240321-WA0005_moq2wa.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093711/IMG_20220517_191303494_HDR_rsvhgq.jpg",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759093706/IMG-20210722-WA0004_i0fpeq.jpg",

];
// ========================================================

const images = imageUrls.map(url => {
    // Troviamo il punto dove inserire i parametri, subito dopo "/upload/"
    const uploadIndex = url.indexOf('/upload/') + '/upload/'.length;

    // Inseriamo i parametri di trasformazione
    // f_auto: formato automatico (es. WebP per Chrome)
    // q_auto: qualità automatica (trova il miglior compromesso qualità/peso)
    // w_800: larghezza massima di 800px (più che sufficiente per una galleria)
    const optimizedUrl = `${url.slice(0, uploadIndex)}f_auto,q_auto,w_800/${url.slice(uploadIndex)}`;

    return { src: optimizedUrl };
});
const PaginaImmagini = () => {
    const [index, setIndex] = useState(-1);

    return (
        <>
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