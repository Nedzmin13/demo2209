// src/components/ServiceLinks.jsx
import React from 'react';
import styles from './ServiceLinks.module.css';
import { FaTruckMoving, FaBuilding, FaLeaf, FaHome } from 'react-icons/fa';

const services = [
    { icon: <FaTruckMoving />, title: 'Scavi e Movimento Terra', description: 'Scavi di fondazione, sbancamenti, livellamenti terreni' },
    { icon: <FaBuilding />, title: 'Demolizioni Civili', description: 'Demolizioni controllate, rimozione strutture' },
    { icon: <FaLeaf />, title: 'Bonifica Terreni', description: 'Bonifica ambientale, trattamento suoli contaminati' },
    { icon: <FaHome />, title: 'Realizzazione Fondazioni', description: 'Fondazioni civili e industriali, micropali' },
];

const ServiceLinks = () => {
    return (
        <section className={styles.serviceLinksSection}>
            <div className="container">
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceLinks;