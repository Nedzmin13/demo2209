// src/components/ApplicationForm.jsx
import React, { useState } from 'react'; // Importa useState
import styles from './ApplicationForm.module.css';
import { FaPaperPlane, FaUpload } from 'react-icons/fa';

const ApplicationForm = () => {
    // Stato per memorizzare il nome del file selezionato
    const [fileName, setFileName] = useState('');

    // Funzione che si attiva quando l'utente seleziona un file
    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    return (
        <section id="application-form" className={`${styles.section} container`}>
            <div className={styles.formWrapper}>
                <div className={styles.header}>
                    <h2>Candidati Ora</h2>
                    <p>Compila il form sottostante per inviarci la tua candidatura...</p>
                </div>
                <form
                    name="candidatura"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    encType="multipart/form-data"
                    action="/thank-you.html"
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

                    {/* === BLOCCO UPLOAD MODIFICATO E CORRETTO === */}
                    <div className={styles.formGroup}>
                        <label htmlFor="cv-upload">Carica il tuo CV (Opzionale)</label>
                        <div className={styles.uploadBox}>
                            <FaUpload />
                            {/* Mostra il nome del file selezionato o il testo di default */}
                            <p>{fileName || 'Trascina qui il tuo CV o clicca per selezionare'}</p>
                            <small>PDF, DOC, DOCX (max 5MB)</small>
                            <input
                                type="file"
                                id="cv-upload" // ID per collegare la label
                                name="cv"
                                className={styles.fileInput}
                                onChange={handleFileChange} // Chiama la funzione al cambio
                            />
                            {/* La label ora funge da pulsante visibile */}
                            <label htmlFor="cv-upload" className={styles.uploadButton}>
                                Seleziona File
                            </label>
                        </div>
                    </div>
                    {/* ========================================= */}

                    <button type="submit" className="btn btn-primary">
                        <FaPaperPlane /> Invia Candidatura
                    </button>
                </form>
                <small className={styles.gdprNote}>* Campi obbligatori (eccetto CV)...</small>
            </div>
        </section>
    );
};

export default ApplicationForm;