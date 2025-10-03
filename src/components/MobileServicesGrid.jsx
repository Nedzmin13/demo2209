import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileServicesGrid.module.css';
import { FaTruckMoving, FaBuilding, FaRoad, FaArrowsAltH, FaRecycle, FaTree } from 'react-icons/fa';
import {GiChainsaw} from "react-icons/gi";

const services = [
    {
        icon: <FaArrowsAltH />,
        title: 'Scavi e Movimento Terra',
        description: 'Servizi di scavo, estrazione di ghiaia e materiali inerti.',
        link: "/servizi/scavi-e-movimento-terra"
    },
    {
        icon: <FaBuilding />,
        title: 'Demolizioni Civili e Industriali',
        description: 'Eseguiamo demolizioni controllate e sicure per ogni tipo di struttura.',
        link: "/servizi/demolizioni"
    },
    {
        icon: <FaRoad />,
        title: 'Opere Stradali',
        description: 'Costruzione di sottofondi, posa di fognature e urbanizzazioni.',
        link: "/servizi/opere-stradali"
    },
    {
        icon: <FaTruckMoving />,
        title: 'Trasporto Conto Terzi',
        description: 'Servizio specializzato di trasporto merci e materiali per cantieri.',
        link: "/servizi/trasporto-conto-terzi"
    },
    {
        icon: <FaRecycle />,
        title: 'Campagne Mobili',
        description: 'Frantumazione e vagliatura in loco con i nostri impianti mobili.',
        link: "/servizi/campagne-mobili"
    },
    {
        icon: <GiChainsaw />,
        title: 'Abbattimento Alberi',
        description: 'Interventi di abbattimento e potatura in sicurezza.',
        link: "/servizi/abbattimento-alberi"
    },
];

const MobileServicesGrid = () => {
    return (
        <section className={`${styles.mobileGridSection} container`}>
            {services.map((service, index) => (
                <Link to={service.link} key={index} className={styles.card}>
                    <div className={styles.iconWrapper}>{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </Link>
            ))}
        </section>
    );
};

export default MobileServicesGrid;