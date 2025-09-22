// src/components/ContactFormMap.jsx
import React from 'react';
import styles from './ContactFormMap.module.css';
import ContactForm from './ContactForm'; // Importa il nuovo componente

const ContactFormMap = () => {
    return (
        <section className={`${styles.formSectionWrapper} container`}>
            <div className={styles.introWrapper}>
                <h3>Richiedi Preventivo</h3>
                <p>Compila il form per ricevere un preventivo gratuito e personalizzato. Ti contatteremo entro 24 ore.</p>
            </div>
            <ContactForm /> {/* Usa il componente qui */}
        </section>
    );
};

export default ContactFormMap;