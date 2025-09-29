import React from 'react';
import styles from './ParcoMezzi.module.css';

const mezzi = [
    "4 escavatori cingolati 360 q.li",
    "5 escavatori cingolati 250 q.li",
    "2 escavatori gommati 130 q.li",
    "2 miniescavatore cingolato 55 q.li",
    "2 miniescavatore cingolato 30 q.li",
    "2 miniescavatori cingolati 18 q.li",
    "2 minipala cingolata 60 q.li",
    "1 pala cingolata apripista 260 q.li",
    "2 pala cingolata apripista 160 q.li",
    "1 rullo compressore ferro/gomma 140 q.li",
    "1 rullo compressore ferro/gomma 80 q.li",
    "1 rullo compressore ferro/gomma 40 q.li",
    "10 bilici mezzi d'opera (portata 560 q.li)",
    "2 pianali per trasporti macchine operatrici",
    "1 autocarro SCARRABILE 160 q.li",
    "8 autocarri 4 assi mezzo d'opera 410 q.li",
    "4 autocarri 75 / 80 / 120 q.li",
    "2 FURGONI ATTREZZATI PER EDILIZIA STRADALE",
    "Noleggio nr.6 casoni da 15/30 mc",
    "Noleggio nr.5 casoni da 5 mc"
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