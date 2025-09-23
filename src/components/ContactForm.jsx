// src/components/ContactForm.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        emailjs.sendForm(
            'service_t3wk81k',      // Il tuo Service ID
            'template_g7fn9sf',     // Il tuo Template ID
            form.current,
            'JPwGZWZsdDZcLIVDc'       // La tua Public Key
        ).then((result) => {
            console.log('SUCCESS!', result.text);
            setSubmitStatus('success');
            form.current.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
            setSubmitStatus('error');
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div className={styles.formContainer}>
            {/* Rimosso data-netlify, aggiunto ref e onSubmit */}
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}><label htmlFor="name">Nome e Cognome *</label><input type="text" id="name" name="name" placeholder="Il tuo nome completo" required /></div>
                    <div className={styles.formGroup}><label htmlFor="phone">Telefono</label><input type="tel" id="phone" name="phone" placeholder="+39 333 456 7890" /></div>
                </div>
                <div className={styles.formGroup}><label htmlFor="email">Email *</label><input type="email" id="email" name="email" placeholder="la-tua-email@esempio.it" required /></div>
                <div className={styles.formGroup}><label htmlFor="project-description">Descrizione del Progetto *</label><textarea id="project-description" name="message" rows="5" placeholder="Descrivi dettagliatamente il tuo progetto..." required></textarea></div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Invio in corso...' : <><FaPaperPlane /> Invia Richiesta</>}
                </button>

                {submitStatus === 'success' && <p className={styles.successMessage}>Grazie! Il tuo messaggio è stato inviato con successo.</p>}
                {submitStatus === 'error' && <p className={styles.errorMessage}>Si è verificato un errore. Riprova più tardi.</p>}
            </form>
            <small className={styles.gdprNote}>* Campi obbligatori. I tuoi dati saranno trattati secondo la normativa GDPR.</small>
        </div>
    );
};

export default ContactForm;