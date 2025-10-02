// src/pages/ScaviMovimentoTerra.jsx
import React from 'react';
import ServicePage from './ServicePage';

const pageData = {
    title: "Opere Stradali",
    description: "Realizziamo infrastrutture stradali complete, dalla preparazione dei sottofondi alla posa di fognature e opere di urbanizzazione per cantieri pubblici e privati.",
    seoDescription: "Realizzazione opere stradali e urbanizzazioni a Vicenza. Sartorello Escavazioni è specializzata in sottofondi, fognature e preparazione per l'edilizia stradale.",
    images: [
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183857/IMG-20230209-WA0007_xmzl9g.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183860/TimePhoto_20200924_154303_oz4kdh.webp",
    ],
    youtubeVideoIds: [

    ]
};

const ScaviMovimentoTerra = () => <ServicePage {...pageData} />;

export default ScaviMovimentoTerra;