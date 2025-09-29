// src/pages/ScaviMovimentoTerra.jsx
import React from 'react';
import ServicePage from './ServicePage';

const pageData = {
    title: "Campagne Mobili di Frantumazione",
    description: "Portiamo i nostri impianti di frantumazione e vagliatura direttamente nel tuo cantiere. Un servizio efficiente per il recupero e il riciclo in loco dei materiali inerti.",
    seoDescription: "Servizi di campagne mobili per frantumazione e vagliatura in cantiere. Ottimizza i costi e ricicla i materiali inerti direttamente in loco con i nostri impianti.",
    images: [
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183856/lavori-22_mlalcz.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183858/Screenshot_2025-06-27_172323_cyppba.webp"
    ],
    youtubeVideoIds: [
        "ZPZShuJx6h8",
        "xI7C73fbU_M",
    ]
};

const ScaviMovimentoTerra = () => <ServicePage {...pageData} />;

export default ScaviMovimentoTerra;