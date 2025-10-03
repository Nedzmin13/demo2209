import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GalleryLinks.module.css';
import { FaTruckMoving, FaBuilding, FaRoad, FaArrowsAltH, FaRecycle, FaTree, FaImages } from 'react-icons/fa';
import {GiChainsaw} from "react-icons/gi";

const serviceLinks = [
    { icon: <FaArrowsAltH />, title: 'Scavi e Movimento Terra', description: 'Scopri i nostri interventi di scavo e preparazione cantieri.', link: "/servizi/scavi-e-movimento-terra" },
    { icon: <FaBuilding />, title: 'Demolizioni', description: 'Guarda le nostre demolizioni civili e industriali.', link: "/servizi/demolizioni" },
    { icon: <FaRoad />, title: 'Opere Stradali', description: 'Progetti di urbanizzazione e preparazione per l\'edilizia stradale.', link: "/servizi/opere-stradali" },
    { icon: <FaTruckMoving />, title: 'Trasporto Conto Terzi', description: 'La nostra flotta specializzata nel trasporto di materiali.', link: "/servizi/trasporto-conto-terzi" },
    { icon: <FaRecycle />, title: 'Campagne Mobili', description: 'Vedi i nostri impianti di frantumazione e vagliatura in loco.', link: "/servizi/campagne-mobili" },
    { icon: <GiChainsaw />, title: 'Abbattimento Alberi', description: 'Interventi di abbattimento, rimozione e messa in sicurezza', link: "/servizi/abbattimento-alberi" },
    { icon: <FaImages />, title: 'Galleria Mista', description: 'Una selezione completa dei nostri migliori lavori.', link: "/lavori/galleria-mista" },
];

const GalleryLinks = () => {
    return (
        <section className={`${styles.galleryLinksSection} container`}>
            {serviceLinks.map((item, index) => (
                <Link to={item.link} key={index} className={styles.card}>
                    <div className={styles.iconWrapper}>{item.icon}</div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <span className={styles.button}>Scopri di più &rarr;</span>
                </Link>
            ))}
        </section>
    );
};

export default GalleryLinks;