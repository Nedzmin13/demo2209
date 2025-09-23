// src/components/ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className={styles.formContainer}>
            {/* --- MODIFICHE QUI --- */}
            <form
                name="preventivo"
                method="POST"
                data-netlify="true"
            >
                {/* Campo nascosto necessario per Netlify */}
                <input type="hidden" name="form-name" value="preventivo" />

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome e Cognome *</label>
                        {/* Aggiungi l'attributo 'name' a ogni campo */}
                        <input type="text" id="name" name="name" placeholder="Il tuo nome completo" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Telefono</label>
                        <input type="tel" id="phone" name="phone" placeholder="+39 333 456 7890" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" placeholder="la-tua-email@esempio.it" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="project-description">Descrizione del Progetto *</label>
                    <textarea id="project-description" name="message" rows="5" placeholder="Descrivi dettagliatamente il tuo progetto..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    <FaPaperPlane /> Invia Richiesta
                </button>
            </form>
            <small className={styles.gdprNote}>* Campi obbligatori. I tuoi dati saranno trattati secondo la normativa GDPR.</small>
        </div>
    );
};

export default ContactForm;