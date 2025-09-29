// src/components/ServicesBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesBar.module.css';

const services = [
    { text: "Scavi e<br />movimento terra", link: "/servizi/scavi-e-movimento-terra" },
    { text: "Demolizioni civili<br />e industriali", link: "/servizi/demolizioni" },
    { text: "Opere<br />stradali", link: "/servizi/opere-stradali" },
    { text: "Trasporto<br />conto terzi", link: "/servizi/trasporto-conto-terzi" },
    { text: "Campagne<br />mobili", link: "/servizi/campagne-mobili" },
    { text: "Abbattimento<br />alberi", link: "/servizi/abbattimento-alberi" }
];

// Duplichiamo la lista per l'animazione
const duplicatedServices = [...services, ...services];

const ServicesBar = () => {
    return (
        <div className={styles.servicesBar}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {/* Renderizziamo la lista completa per gestire sia desktop che mobile con CSS */}
                    {duplicatedServices.map((service, index) => {
                        // Su mobile, rendiamo uno span non cliccabile
                        if (window.innerWidth <= 992) {
                            return (
                                <span
                                    key={`mobile-${index}`}
                                    className={styles.serviceItem}
                                    dangerouslySetInnerHTML={{ __html: service.text }}
                                />
                            );
                        }
                        // Su desktop, rendiamo un Link cliccabile (ma mostriamo solo i primi 6 con CSS)
                        return (
                            <Link
                                to={service.link}
                                key={`desktop-${index}`}
                                className={styles.serviceItem}
                            >
                                <span dangerouslySetInnerHTML={{ __html: service.text }} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesBar;