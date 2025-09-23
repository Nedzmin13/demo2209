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
                    <p>Compila il form sottostante per inviarci la tua candidatura...</p>
                </div>
                {/* --- MODIFICHE QUI --- */}
                <form
                    name="candidatura"
                    method="POST"
                    data-netlify="true"
                    encType="multipart/form-data" // Necessario per l'upload di file
                >
                    <input type="hidden" name="form-name" value="candidatura" />

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nome e Cognome *</label>
                            <input type="text" id="name" name="name" placeholder="Il tuo nome completo" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Telefono *</label>
                            <input type="tel" id="phone" name="phone" placeholder="+39 333 456 7890" required/>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" placeholder="la-tua-email@esempio.it" required />
                    </div>
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
                    <div className={styles.formGroup}>
                        <label htmlFor="presentation">Presentazione *</label>
                        <textarea id="presentation" name="presentation" rows="5" placeholder="Raccontaci della tua esperienza..." required></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Carica il tuo CV *</label>
                        <div className={styles.uploadBox}>
                            <FaUpload />
                            <p>Trascina qui il tuo CV o clicca per selezionare</p>
                            <small>PDF, DOC, DOCX (max 5MB)</small>
                            <input type="file" name="cv" className={styles.fileInput} required />
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