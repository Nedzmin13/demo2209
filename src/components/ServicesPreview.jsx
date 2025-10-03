import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesPreview.module.css';
import { TbTruck, TbBuildingSkyscraper, TbRoad, TbSwitchHorizontal, TbRecycle } from 'react-icons/tb';
import { GiChainsaw } from "react-icons/gi";

const services = [
    { icon: <TbTruck />, title: 'Scavi e Movimento Terra', description: 'Servizi professionali di scavo e livellamento terreni.' },
    { icon: <TbBuildingSkyscraper />, title: 'Demolizioni Civili e Industriali', description: 'Demolizioni controllate con recupero dei materiali.' },
    { icon: <TbRoad />, title: 'Opere Stradali', description: 'Realizzazione di sottofondi, fognature e urbanizzazioni.' },
    { icon: <TbSwitchHorizontal />, title: 'Trasporto Conto Terzi', description: 'Servizio specializzato di trasporto merci per cantieri.' },
    { icon: <TbRecycle />, title: 'Campagne Mobili', description: 'Frantumazione e vagliatura in loco con impianti mobili.' },
    { icon: <GiChainsaw />, title: 'Abbattimento Alberi', description: 'Interventi di abbattimento, rimozione e messa in sicurezza' },
];

const ServicesPreview = () => {
    return (
        <section className={styles.servicesSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2>I Nostri Servizi</h2>
                    <p>Offriamo soluzioni complete per ogni esigenza nel settore delle costruzioni e movimento terra.</p>
                </div>

                {/* Contenitore per la griglia statica */}
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaButtonContainer}>
                    <Link to="/lavori" className="btn btn-primary">
                        Vedi i Nostri Lavori &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;