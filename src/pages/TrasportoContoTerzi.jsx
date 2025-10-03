import React from 'react';
import ServicePage from './ServicePage';

const pageData = {
    title: "Trasporto Conto Terzi",
    description: "Grazie alla nostra divisione Sartorello Trasporti Srl, offriamo un servizio di trasporto merci e materiali inerti per conto terzi, garantendo puntualità e affidabilità.",
    seoDescription: "Servizio di trasporto conto terzi per materiali edili e inerti a Vicenza. La nostra flotta garantisce consegne puntuali e un servizio affidabile per ogni cantiere.",
    images: [
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183858/Progetto_senza_titolo_26_fwpclb.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183858/IMG_20220517_191303494_HDR_pvd3bw.webp",
        "https://res.cloudinary.com/dyatobm6t/image/upload/v1759183861/lavori-23_tqczqg.webp"
    ],
    youtubeVideoIds: [

    ]
};

const ScaviMovimentoTerra = () => <ServicePage {...pageData} />;

export default ScaviMovimentoTerra;