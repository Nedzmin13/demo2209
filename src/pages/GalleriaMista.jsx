// src/pages/GalleriaMista.jsx
import React from 'react';
import ServicePage from './ServicePage';

const pageData = {
    title: "Galleria Mista",
    description: "Una selezione dei nostri migliori lavori che mostrano la diversità e la qualità dei nostri interventi.",
    seoDescription: "Galleria mista dei lavori di Sartorello Escavazioni: foto e video di scavi, demolizioni, opere stradali e molto altro.",
    images: [
        // Incolla qui i link alle TUE 33 immagini da Cloudinary
    ],
    youtubeVideoIds: [
        // Incolla qui i TUOI 12 ID video da YouTube
    ]
};

const GalleriaMista = () => <ServicePage {...pageData} />;

export default GalleriaMista;