// src/components/EmergencySection.jsx
import React from 'react';
import styles from './EmergencySection.module.css';
import { FaPhoneAlt } from 'react-icons/fa';

const EmergencySection = () => {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h2>Servizio di Emergenza</h2>
                <p>Per situazioni di emergenza siamo disponibili 24/7. Contattaci immediatamente per interventi urgenti.</p>
                <a href="tel:+39335 186 3049" className={styles.emergencyButton}>
                    <FaPhoneAlt /> Numero di Emergenza: +39 335 186 3049
                </a>
            </div>
        </section>
    );
};

export default EmergencySection;