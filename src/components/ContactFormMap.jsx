// src/components/ContactFormMap.jsx
import React from 'react';
import styles from './ContactFormMap.module.css';
import { FaPaperPlane } from 'react-icons/fa';

const ContactFormMap = () => {
    return (
        // La classe qui è stata cambiata da .section a .formSectionWrapper
        <section  className={`${styles.formSectionWrapper} container`}>
            <div className={styles.formContainer}>
                <h3 className={styles.formTitle}>Richiedi Preventivo</h3>
                <p>Compila il form per ricevere un preventivo gratuito e personalizzato. Ti contatteremo entro 24 ore.</p>
                <form className={styles.form}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nome e Cognome *</label>
                            <input type="text" id="name" placeholder="Il tuo nome completo" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Telefono</label>
                            <input type="tel" id="phone" placeholder="+39 333 456 7890" />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" placeholder="la-tua-email@esempio.it" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="project-description">Descrizione del Progetto *</label>
                        <textarea id="project-description" rows="5" placeholder="Descrivi dettagliatamente il tuo progetto: tipo di lavoro, dimensioni, tempistiche, località..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        <FaPaperPlane /> Invia Richiesta
                    </button>
                </form>
                <small className={styles.gdprNote}>* Campi obbligatori. I tuoi dati saranno trattati secondo la normativa GDPR.</small>
            </div>

            {/* LA SEZIONE DELLA MAPPA È STATA COMPLETAMENTE RIMOSSA */}
        </section>
    );
};

export default ContactFormMap;