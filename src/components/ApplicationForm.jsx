// src/components/ApplicationForm.jsx
import React, { useState } from 'react';
import styles from './ApplicationForm.module.css';
import { FaPaperPlane, FaUpload } from 'react-icons/fa';

const ApplicationForm = () => {
    const [submitStatus, setSubmitStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus('success');
                form.reset();
                setFileName('');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="application-form" className={`${styles.section} container`}>
            <div className={styles.formWrapper}>
                <div className={styles.header}>
                    <h2>Candidati Ora</h2>
                    <p>Compila il form sottostante per inviarci la tua candidatura. Allega il tuo CV e raccontaci perché vorresti lavorare con noi.</p>
                </div>
                <form
                    action="https://formspree.io/f/xpwyzqln"
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
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
                            <p>{fileName || 'Trascina qui il tuo CV o clicca per selezionare'}</p>
                            <small>PDF, DOC, DOCX (max 10MB)</small>
                            <input type="file" id="cv-upload" name="upload" className={styles.fileInput} onChange={handleFileChange} required />
                            <label htmlFor="cv-upload" className={styles.uploadButton}>Seleziona File</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Invio in corso...' : <><FaPaperPlane /> Invia Candidatura</>}
                    </button>

                    {submitStatus === 'success' && <p className={styles.successMessage}>Candidatura inviata con successo! Ti ringraziamo.</p>}
                    {submitStatus === 'error' && <p className={styles.errorMessage}>Si è verificato un errore. Assicurati che il file non superi i 10MB e riprova.</p>}
                </form>
                <small className={styles.gdprNote}>* Campi obbligatori...</small>
            </div>
        </section>
    );
};

export default ApplicationForm;