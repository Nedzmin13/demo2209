import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CtaSection.module.css';

const CtaSection = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={`${styles.ctaContainer} container`}>
                <h2>Hai un Progetto in Mente?</h2>
                <p>Contattaci per una consulenza gratuita e un preventivo personalizzato. Il nostro team è pronto ad aiutarti.</p>
                <div className={styles.buttonContainer}>
                    <Link to="/preventivo" className="btn btn-primary">Richiedi Preventivo Gratuito</Link>
                    <Link to="/lavora-con-noi" className="btn btn-secondary">Unisciti al Nostro Team</Link>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;