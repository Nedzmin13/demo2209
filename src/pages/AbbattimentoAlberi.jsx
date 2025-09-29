// src/pages/ScaviMovimentoTerra.jsx
import React from 'react';
import ServicePage from './ServicePage';

const pageData = {
    title: "Abbattimento Alberi",
    description: "Eseguiamo interventi di abbattimento, potatura e messa in sicurezza di alberi ad alto fusto, operando con la massima professionalità e nel pieno rispetto delle normative ambientali.",
    seoDescription: "Servizio professionale di abbattimento e potatura alberi a Vicenza. Interveniamo in sicurezza su piante ad alto fusto con smaltimento del legname.",
    images: [

    ],
    youtubeVideoIds: [
        "JfpCSSBfufk", // Esempio di ID
        "altro_id_video", // Altro esempio
    ]
};

const ScaviMovimentoTerra = () => <ServicePage {...pageData} />;

export default ScaviMovimentoTerra;