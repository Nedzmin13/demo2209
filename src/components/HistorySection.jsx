// src/components/HistorySection.jsx
import React from 'react';
import styles from './HistorySection.module.css';
import parcoMezzi from '../assets/parco-mezzi.jpg';

const HistorySection = () => {
    return (
        <section className={`${styles.historySection} container`}>
            <div className={styles.content}>
                <h2 className={styles.title}>La Nostra Storia</h2>
                <p>Escavazioni e movimento terra, estrazione di ghiaia e materiali inerti, demolizioni, edilizia stradale, trasporto merci e noleggio di mezzi e attrezzature: queste sono le attività che guidano ogni giorno la nostra impresa, con competenza, precisione e passione.</p>
                <p>Nata da un solido know-how tecnico e da una visione imprenditoriale lungimirante, Sartorello Escavazioni ha saputo affrontare e superare le sfide del contesto economico globale, triplicando le commesse nell’ultimo anno. Un risultato possibile grazie alla determinazione del nostro team e all’entusiasmo delle persone che ogni giorno contribuiscono alla crescita dell’azienda.</p>
                <p>Innovazione e solidità sono i pilastri su cui costruiamo il nostro presente e futuro: un parco macchine costantemente aggiornato e potenziato, un organico di 32 professionisti tra operai specializzati e autisti, e la guida esperta del fondatore, Giuseppe Sartorello, sono la nostra garanzia di efficienza e affidabilità.</p>
                <p>All'interno della nostra sede opera anche la Sartorello Trasporti Srl, nata nel 2009 come naturale estensione della nostra visione aziendale. Una realtà in continua espansione, specializzata nel trasporto conto terzi, che rappresenta il perfetto complemento alla nostra offerta di servizi integrati.</p>
            </div>
            <div className={styles.imageContainer}>
                <img src={parcoMezzi} alt="Parco mezzi Sartorello Escavazioni" />
            </div>
        </section>
    );
};

export default HistorySection;