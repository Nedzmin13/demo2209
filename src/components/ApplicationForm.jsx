// src/components/ApplicationForm.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ApplicationForm.module.css';
import { FaPaperPlane, FaLink } from 'react-icons/fa';

const ApplicationForm = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        emailjs.sendForm(
            'service_t3wk81k',
            'template_g7fn9sf',
            form.current,
            'JPwGZWZsdDZcLIVDc'
        ).then((result) => {
            setSubmitStatus('success');
            form.current.reset();
        }, (error) => {
            setSubmitStatus('error');
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <section id="application-form" className={`${styles.section} container`}>
            <div className={styles.formWrapper}>
                <div className={styles.header}>
                    <h2>Candidati Ora</h2>
                    <p>Compila il form con i tuoi dati. Se desideri, puoi caricare il tuo CV su un servizio come Google Drive o Dropbox e incollare qui il link di condivisione.</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}><label htmlFor="app-name">Nome e Cognome *</label><input type="text" id="app-name" name="name" required /></div>
                        <div className={styles.formGroup}><label htmlFor="app-phone">Telefono *</label><input type="tel" id="app-phone" name="phone" required /></div>
                    </div>
                    <div className={styles.formGroup}><label htmlFor="app-email">Email *</label><input type="email" id="app-email" name="email" required /></div>
                    <div className={styles.formGroup}>
                        <label htmlFor="position">Posizione di Interesse</label>
                        <select id="position" name="position">
                            <option value="">Seleziona una posizione</option>
                            <option value="Escavatorista">Escavatorista</option>
                            <option value="Autista">Autista</option>
                            <option value="Geometra">Geometra</option>
                            <option value="Responsabile Sicurezza">Responsabile Sicurezza</option>
                            <option value="Candidatura Spontanea">Candidatura Spontanea</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}><label htmlFor="presentation">Presentazione *</label><textarea id="presentation" name="presentation" rows="5" required></textarea></div>

                    <div className={styles.formGroup}>
                        <label htmlFor="cv-link">Link al tuo CV (Opzionale)</label> {/* Testo modificato */}
                        <div className={styles.linkInputWrapper}>
                            <FaLink className={styles.linkIcon} />
                            <input
                                type="url"
                                id="cv-link"
                                name="cv_link"
                                placeholder="https://www.dropbox.com/s/..."
                                // 'required' è stato rimosso da qui
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Invio in corso...' : <><FaPaperPlane /> Invia Candidatura</>}
                    </button>

                    {submitStatus === 'success' && <p className={styles.successMessage}>Candidatura inviata con successo! Ti ringraziamo.</p>}
                    {submitStatus === 'error' && <p className={styles.errorMessage}>Si è verificato un errore. Riprova.</p>}
                </form>
                <small className={styles.gdprNote}>* Campi obbligatori.</small>
            </div>
        </section>
    );
};

export default ApplicationForm;