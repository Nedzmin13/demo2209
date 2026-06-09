import React from 'react';
import ServicePage from './ServicePage';

const pageData = {
    title: "Demolizioni Civili e Industriali",
    description: "Specializzati in demolizioni controllate, dalla piccola struttura civile al grande complesso industriale, con gestione completa del recupero e smaltimento dei materiali.",
    seoDescription: "Servizi di demolizioni civili e industriali a Vicenza e provincia. Eseguiamo demolizioni controllate e sicure con recupero e smaltimento a norma di legge.",
    images: [
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183863/lavori-20_xhrqyz.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183856/IMG-20221212-WA0004_adktax.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183857/3_cezpte.webp",
    "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183857/2_asi5af.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1780987435/Marted%C3%AC_17_xvkkjz.jpg",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1780987434/Marted%C3%AC_10_cd6vwv.png"
    ],
    youtubeVideoIds: [
        "5Sx9EBF3Bc4",
        "B-Py3jKvm8Y",
        "iWK2gE5iTSg",
        "6XJLVefiuy4",
        "CToOFefvpmY"

    ]
};

const ScaviMovimentoTerra = () => <ServicePage {...pageData} />;

export default ScaviMovimentoTerra;