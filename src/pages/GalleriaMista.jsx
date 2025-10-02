// src/pages/GalleriaMista.jsx
import React from 'react';
import ServicePage from './ServicePage';

const pageData = {
    title: "Galleria Mista",
    description: "Una selezione dei nostri migliori lavori che mostrano la diversità e la qualità dei nostri interventi.",
    seoDescription: "Galleria mista dei lavori di Sartorello Escavazioni: foto e video di scavi, demolizioni, opere stradali e molto altro.",
    images: [
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183864/IMG_20210415_155434502_HDR_wmkc6l.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183858/4_aklp0x.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183858/lavori-14_ppdy08.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183858/lavori-21_m3wuq2.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183857/lavori-29_vb6rvt.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183857/lavori-28_sfmr6m.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183856/lavori-13_r6wjfu.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183856/lavori-31_lt7lau.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183858/IMG_20220517_191303494_HDR_pvd3bw.webp",
    ],
    youtubeVideoIds: [
        // Incolla qui i TUOI 12 ID video da YouTube
    ]
};

const GalleriaMista = () => <ServicePage {...pageData} />;

export default GalleriaMista;