import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesPreview.module.css';
import { TbTruck, TbBuildingSkyscraper, TbRoad, TbSwitchHorizontal } from 'react-icons/tb';

const services = [
    {
        icon: <TbTruck />,
        title: 'Scavi e Movimento Terra',
        description: 'Servizi di scavo, estrazione di ghiaia e materiali inerti per preparare ogni tipo di cantiere.',
    },
    {
        icon: <TbBuildingSkyscraper />,
        title: 'Demolizioni Civili e Industriali',
        description: 'Eseguiamo demolizioni controllate e sicure per edifici residenziali, commerciali e industriali.',
    },
    {
        icon: <TbRoad />,
        title: 'Opere Stradali',
        description: 'Costruzione di sottofondi, posa di fognature, urbanizzazioni e preparazione per l\'edilizia stradale.',
    },
    {
        icon: <TbSwitchHorizontal />,
        title: 'Trasporto Conto Terzi',
        description: 'Grazie a Sartorello Trasporti Srl, offriamo un servizio specializzato di trasporto merci e materiali per cantieri.',
    },
];

const ServicesPreview = () => {
    return (
        <section className={styles.servicesSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2>I Nostri Servizi</h2>
                    <p>Offriamo soluzioni complete per ogni esigenza nel settore delle costruzioni e movimento
                        terra.</p>
                </div>
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