// src/pages/ThankYou.jsx
import React from 'react';
import { Title, Meta } from 'react-head';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './ThankYou.module.css';

const ThankYou = () => {
    return (
        <>
            <Title>Grazie - Sartorello Escavazioni</Title>
            <Meta name="robots" content="noindex, nofollow" />

            <div className={styles.thankYouContainer}>
                <div className={styles.thankYouBox}>
                    <FaCheckCircle className={styles.icon} />
                    <h1 className={styles.title}>Grazie!</h1>
                    <p className={styles.message}>
                        La tua richiesta è stata inviata con successo.
                        <br />
                        Ti contatteremo il prima possibile.
                    </p>
                    <Link to="/" className="btn btn-primary">
                        Torna alla Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ThankYou;