// src/components/ApplicationForm.jsx
import React from 'react';
import styles from './ApplicationForm.module.css';
import { FaPaperPlane, FaUpload } from 'react-icons/fa';

const ApplicationForm = () => {
    return (
        <section id="application-form" className={`${styles.section} container`}>
            <div className={styles.formWrapper}>
                <div className={styles.header}>
                    <h2>Candidati Ora</h2>
                    <p>Compila il form sottostante per inviarci la tua candidatura. Allega il tuo CV e raccontaci perché vorresti lavorare con noi.</p>
                </div>
                <form
                    name="candidatura"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field" // Anti-spam
                    encType="multipart/form-data"
                    action="/thank-you" // Pagina di ringraziamento (opzionale ma consigliato)
                >
                    <input type="hidden" name="form-name" value="candidatura" />
                    <p hidden><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>

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
                        <label>Carica il tuo CV</label>
                        <div className={styles.uploadBox}>
                            <FaUpload />
                            <p>Trascina qui il tuo CV o clicca per selezionare</p>
                            <small>PDF, DOC, DOCX (max 5MB)</small>
                            <input type="file" name="cv" className={styles.fileInput}/>
                            <button type="button" className={styles.uploadButton}>Seleziona File</button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        <FaPaperPlane /> Invia Candidatura
                    </button>
                </form>
                <small className={styles.gdprNote}>* Campi obbligatori...</small>
            </div>
        </section>
    );
};

export default ApplicationForm;