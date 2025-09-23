import React from 'react';
import styles from './ParcoMezzi.module.css';

const mezzi = [
    "3 escavatori cingolati 360 q.li",
    "5 escavatori cingolati 250 q.li",
    "2 escavatori gommati 120 q.li",
    "2 miniescavatore cingolato 50 q.li",
    "1 miniescavatore cingolato 35 q.li",
    "3 miniescavatori cingolati 16 q.li",
    "1 minipala gommata 35 q.li",
    "1 minipala cingolata 60 q.li",
    "1 rullo vibrocompattatore 90 q.li",
    "2 lama apripista cingolata 180 q.li",
    "10 bilici mezzi d'opera (portata 560 q.li)",
    "1 pianale per trasporti eccezionali c/terzi",
    "2 motrice scarrabile (portata 400 q.li)",
    "6 motrici mezzi d'opera (portata 400 q.li)",
    "1 autocarro SCARRABILE 160 q.li",
    "1 autocarro (portata 120 q.li)",
    "1 autocarro scarrabile 109 q.li",
    "2 autocarri (portata 80 q.li)",
    "5 FURGONI ATTREZZATI 35 q.li"
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