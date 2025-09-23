// src/components/ApplicationForm.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ApplicationForm.module.css';
import { FaPaperPlane, FaUpload } from 'react-icons/fa';

function ApplicationForm() {
    // Il 'key' è l'ID del tuo form
    const [state, handleSubmit] = useForm("xpwyzqln");

    if (state.succeeded) {
        return (
            <section id="application-form" className={`${styles.section} container`}>
                <div className={styles.formWrapper}>
                    <p className={styles.successMessage}>Grazie! La tua candidatura è stata inviata con successo.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="application-form" className={`${styles.section} container`}>
            <div className={styles.formWrapper}>
                <div className={styles.header}>
                    <h2>Candidati Ora</h2>
                    <p>Compila il form sottostante per inviarci la tua candidatura. Allega il tuo CV e raccontaci perché vorresti lavorare con noi.</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    method="POST"
                    encType="multipart/form-data"
                >
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
                        <label htmlFor="cv-upload">Carica il tuo CV *</label>
                        <div className={styles.uploadBox}>
                            <FaUpload />
                            <p>Trascina qui il tuo CV o clicca per selezionare</p>
                            <small>PDF, DOC, DOCX (max 10MB)</small>
                            <input type="file" id="cv-upload" name="upload" className={styles.fileInput} required />
                            <label htmlFor="cv-upload" className={styles.uploadButton}>Seleziona File</label>
                        </div>
                        <ValidationError prefix="Upload" field="upload" errors={state.errors} className={styles.errorMessage} />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                        {state.submitting ? 'Invio in corso...' : <><FaPaperPlane /> Invia Candidatura</>}
                    </button>

                    {state.errors.length > 0 && !state.errors.find(e => e.field === 'upload') && (
                        <p className={styles.errorMessage}>Si è verificato un errore. Controlla i dati e riprova.</p>
                    )}
                </form>
                <small className={styles.gdprNote}>* Campi obbligatori...</small>
            </div>
        </section>
    );
}

export default ApplicationForm;