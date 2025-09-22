// src/components/ContactInfo.jsx
import React from 'react';
import styles from './ContactInfo.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const infoItems = [
    {
        type: 'default',
        icon: <FaMapMarkerAlt />,
        title: 'Indirizzo',
        lines: ['Via Fontanelle, 8', '36050 Monteviale (VI)'],
        buttonText: 'Visualizza su Maps',
        buttonLink: 'https://www.google.com/maps/search/?api=1&query=Via+Fontanelle+8,+36050+Monteviale'
    },
    {
        type: 'default',
        icon: <FaPhone />,
        title: 'Telefono',
        lines: ['Tel. 0444 562374'],
        buttonText: 'Chiama ora',
        buttonLink: 'tel:+390444562374'
    },
    {
        type: 'email',
        icon: <FaEnvelope />,
        title: 'Email',
        lines: [
            // --- RIMOSSI I CARATTERI \u200B DA QUI ---
            { label: 'E-mail:', address: 'sartorello@sartorelloescavazioni.com' },
            { label: 'Amministrazione:', address: 'amministrazione@sartorelloescavazioni.com' },
            { label: 'Ufficio tecnico:', address: 'geometri@sartorelloescavazioni.com' }
        ],

    },
    {
        type: 'schedule',
        icon: <FaClock />,
        title: 'Orari',
        lines: [
            { day: 'Lunedì:', time: '08:00 - 12:30 / 14:30 - 19:00' },
            { day: 'Martedì:', time: '08:00 - 12:30 / 14:30 - 19:00' },
            { day: 'Mercoledì:', time: '08:00 - 12:30 / 14:30 - 19:00' },
            { day: 'Giovedì:', time: '08:00 - 12:30 / 14:30 - 19:00' },
            { day: 'Venerdì:', time: '08:00 - 12:30 / 14:30 - 19:00' },
        ],
        buttonText: null
    }
];

const ContactInfo = () => {
    return (
        <section className={`${styles.contactInfoSection} container`}>
            <div className={styles.grid}>
                {infoItems.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>{item.icon}</div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <div className={styles.cardContent}>

                            {item.type === 'schedule' ? (
                                <div className={styles.scheduleGrid}>
                                    {item.lines.map((slot, i) => (
                                        <React.Fragment key={i}>
                                            <div className={styles.scheduleDay}>{slot.day}</div>
                                            <div className={styles.scheduleTime}>{slot.time}</div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            ) : item.type === 'email' ? (
                                <div className={styles.emailList}>
                                    {item.lines.map((email, i) => (
                                        <div key={i} className={styles.emailItem}>
                                            <span className={styles.emailLabel}>{email.label}</span>
                                            <span className={styles.emailAddress}>{email.address}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                item.lines.map((line, i) => <p key={i} className={styles.infoLine}>{line}</p>)
                            )}

                        </div>
                        {item.buttonText && (
                            <a href={item.buttonLink} className={styles.infoButton}>{item.buttonText}</a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactInfo;