import React from 'react';
import styles from './LavoriHero.module.css';
import { FaTruckMoving, FaBuilding, FaRoad, FaArrowsAltH, FaRecycle, FaTree } from 'react-icons/fa';
import {GiChainsaw} from "react-icons/gi";


const services = [
    { icon: <FaArrowsAltH />, title: 'Scavi e Movimento Terra', description: 'Servizi di scavo, estrazione di ghiaia e materiali inerti.' },
    { icon: <FaBuilding />, title: 'Demolizioni Civili e Industriali', description: 'Eseguiamo demolizioni controllate e sicure per ogni tipo di struttura.' },
    { icon: <FaRoad />, title: 'Opere Stradali', description: 'Costruzione di sottofondi, posa di fognature e urbanizzazioni.' },
    { icon: <FaTruckMoving />, title: 'Trasporto Conto Terzi', description: 'Servizio specializzato di trasporto merci e materiali per cantieri.' },
    { icon: <FaRecycle />, title: 'Campagne Mobili', description: 'Frantumazione e vagliatura in loco con i nostri impianti mobili.' },
    { icon: <GiChainsaw />, title: 'Abbattimento Alberi', description: 'Interventi di abbattimento, rimozione e messa in sicurezza.' },
];

const duplicatedServices = [...services, ...services];

const LavoriHero = () => {
    return (
        <section className={styles.lavoriHeroSection}>
            <div className={styles.overlay}></div>
            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <h1>I Nostri Lavori</h1>
                    <p>Una selezione dei progetti più significativi realizzati negli ultimi anni. Ogni lavoro rappresenta il nostro impegno verso qualità e professionalità.</p>
                </div>

                {/* Contenitore a maschera per l'animazione */}
                <div className={styles.gridMask}>
                    <div className={styles.grid}>
                        {duplicatedServices.map((service, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconWrapper}>{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LavoriHero;