import React from 'react';
import styles from './CompanyCulture.module.css';

const CompanyCulture = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <h2>La Nostra Cultura Aziendale</h2>
                    <p>In Sartorello Escavazioni  crediamo che le persone siano il nostro patrimonio più prezioso. Valorizziamo il lavoro di squadra, la crescita professionale e il rispetto reciproco. Ogni membro del team contribuisce al nostro successo comune.</p>
                </div>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>30+</span>
                        <span className={styles.statLabel}>Dipendenti</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>95%</span>
                        <span className={styles.statLabel}>Tasso di Retention</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>Formazione sulla Sicurezza</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyCulture;