import React from 'react';
import ServicePage from './ServicePage';

const pageData = {
    title: "Scavi e Movimento Terra",
    description: "Realizziamo scavi di ogni dimensione, sbancamenti e livellamenti con macchinari di ultima generazione.",
    seoDescription: "Servizio professionale di scavi e movimento terra a Vicenza. Realizziamo sbancamenti, livellamenti e preparazione di cantieri.",
    images: [
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183863/lavori-15_fsm04i.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183863/lavori-33_q5g8uz.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183862/IMG_20230928_145551172_HDR_uojevn.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183862/IMG_20220114_112744715_HDR_xowao8.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183863/lavori-18_oqtrn4.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183864/IMG_20210415_155434502_HDR_wmkc6l.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183861/TimePhoto_20210930_144142_cklvmy.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183857/lavori-4_sro4n4.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759184590/IMG_20210322_114947_1_bxhnxw.jpg",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1780986503/Screenshot_2591_vkv9el.png",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1780986502/Screenshot_2590_nmdgue.png"

    ],
    youtubeVideoIds: [
        "YLDZcwnFzCQ",
        "qb0m3Pg8LI8",
        "R6VXPQPRIeM",
        "mLebkQXM2nU"

    ]
};

const ScaviMovimentoTerra = () => <ServicePage {...pageData} />;

export default ScaviMovimentoTerra;