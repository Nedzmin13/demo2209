import React from 'react';
import styles from './ParcoMezzi.module.css';

const mezzi = [
    "nr. 4 escavatori cingolati da 360 q.li",
    "nr. 5 escavatori cingolati da 250 q.li",
    "nr. 2 escavatori gommati da 130 q.li",
    "nr. 2 miniescavatori cingolati da 55 q.li",
    "nr. 2 miniescavatori cingolati da 30 q.li",
    "nr. 2 miniescavatori cingolati da 18 q.li",
    "nr. 2 minipale cingolate da 60 q.li",
    "nr. 1 pala cingolata apripista da 260 q.li",
    "nr. 2 pale cingolate apripista da 160 q.li",
    "nr. 1 rullo compressore ferro/gomma da 140 q.li",
    "nr. 1 rullo compressore ferro/gomma da 80 q.li",
    "nr. 1 rullo compressore ferro/gomma da 40 q.li",
    "nr. 10 bilici mezzi d'opera (portata 560 q.li)",
    "nr. 2 pianali per trasporto macchine operatrici",
    "nr. 1 autocarro scarrabile da 160 q.li",
    "nr. 2 autocarri scarrabili da 410 q.li",
    "nr. 6 autocarri 4 assi mezzo d'opera da 410 q.li",
    "nr. 4 autocarri da 75 / 80 / 120 q.li",
    "nr. 2 furgoni attrezzati per edilizia stradale",
    "Noleggio nr. 6 cassoni da 15/30 mc",
    "Noleggio nr. 5 cassoni da 5 mc"
];


const ParcoMezzi = () => {
    return (
        <section className={styles.parcoMezziSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Il Parco Mezzi</h2>
                    <p>Un parco macchine all'avanguardia, in continuo rinnovamento ed ampliamento per garantire la massima efficienza in ogni cantiere.</p>
                </div>
                <ul className={styles.mezziList}>
                    {mezzi.map((mezzo, index) => (
                        <li key={index}>
                            <span>{mezzo}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ParcoMezzi;