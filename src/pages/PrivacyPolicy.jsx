// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Title, Meta } from 'react-head';
import PageHeader from '../components/PageHeader';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    return (
        <>
            <Title>Privacy & Cookie Policy - Sartorello Escavazioni SRL</Title>
            <Meta name="description" content="Consulta la privacy e cookie policy di Sartorello Escavazioni SRL per comprendere il trattamento dei tuoi dati personali in conformità al GDPR." />
            <Meta name="robots" content="noindex, follow" />

            <PageHeader title="Privacy & Cookie Policy" />
            <div className="container">
                <div className={styles.policyContent}>
                    <h2>PRIVACY POLICY</h2>
                    <p><strong>Ultimo aggiornamento: 21 Settembre 2025</strong></p>
                    <p>
                        Benvenuto sul sito di Sartorello Escavazioni S.R.L. La tua privacy è molto importante per noi. Questa Privacy Policy ha lo scopo di descrivere in modo chiaro e trasparente le modalità di gestione del sito in riferimento al trattamento dei dati personali degli utenti che lo consultano, in conformità con il Regolamento (UE) 2016/679 (GDPR).
                    </p>

                    <h3>1. Titolare del Trattamento</h3>
                    <p>
                        Il Titolare del trattamento dei dati personali è:
                        <br />
                        <strong>Sartorello Escavazioni S.R.L.</strong>
                        <br />
                        Sede Legale: Via Fontanelle 8, 36050 Monteviale (VI)
                        <br />
                        P.IVA: 03464770241
                        <br />
                        Email di contatto: <a href="mailto:sartorello@sartorelloescavazioni.com">sartorello@sartorelloescavazioni.com</a>
                    </p>

                    <h3>2. Tipi di Dati Trattati</h3>
                    <h4>a) Dati di Navigazione</h4>
                    <p>
                        I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti. In questa categoria di dati rientrano gli indirizzi IP, i nomi a dominio dei computer utilizzati dagli utenti, gli indirizzi in notazione URI delle risorse richieste, l'orario della richiesta ed altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.
                    </p>
                    <h4>b) Dati Forniti Volontariamente dall'Utente</h4>
                    <p>
                        L'invio facoltativo, esplicito e volontario di dati personali attraverso i moduli di contatto o di candidatura presenti su questo sito (es. nome, cognome, email, numero di telefono, CV, messaggi) comporta la successiva acquisizione di tali dati, necessari per rispondere alle richieste o per valutare i profili professionali.
                    </p>

                    <h3>3. Finalità e Base Giuridica del Trattamento</h3>
                    <p>
                        I dati personali sono trattati per le seguenti finalità:
                        <ul>
                            <li><strong>Rispondere alle tue richieste:</strong> Per gestire e rispondere a richieste di informazioni, preventivi o consulenze inviate tramite il modulo di contatto. La base giuridica è l'esecuzione di misure precontrattuali adottate su tua richiesta (art. 6, par. 1, lett. b GDPR).</li>
                            <li><strong>Valutare le candidature:</strong> Per analizzare i curricula e le informazioni inviate tramite il modulo "Lavora con noi". La base giuridica è l'esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR).</li>
                            <li><strong>Garantire la sicurezza del sito:</strong> I dati di navigazione sono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento. La base giuridica è il legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR).</li>
                        </ul>
                    </p>

                    <h3>4. Modalità di Trattamento e Periodo di Conservazione</h3>
                    <p>
                        Il trattamento sarà svolto in forma automatizzata e/o manuale, con modalità e strumenti volti a garantire la massima sicurezza e riservatezza. I dati saranno conservati per un arco di tempo non superiore al conseguimento delle finalità per le quali sono trattati ("principio di limitazione della conservazione", art. 5 GDPR) o in base alle scadenze previste dalle norme di legge.
                    </p>

                    <h3>5. Diritti degli Interessati</h3>
                    <p>
                        In qualità di interessato, hai il diritto di chiedere al Titolare del trattamento l'accesso ai tuoi dati personali, la rettifica, la cancellazione degli stessi o la limitazione del trattamento che ti riguarda, o di opporti al loro trattamento, oltre al diritto alla portabilità dei dati (artt. 15 e ss. del GDPR). Le richieste possono essere inviate all'indirizzo email del Titolare. Hai inoltre il diritto di proporre reclamo a un'autorità di controllo (Garante per la Protezione dei Dati Personali).
                    </p>

                    <hr className={styles.separator} />

                    <h2>COOKIE POLICY</h2>
                    <h3>1. Cosa Sono i Cookie</h3>
                    <p>
                        I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.
                    </p>

                    <h3>2. Tipi di Cookie Utilizzati da Questo Sito</h3>
                    <p>
                        Questo sito utilizza esclusivamente <strong>cookie tecnici</strong>. Questi cookie sono fondamentali per permettere di navigare all'interno del sito ed utilizzare le sue funzionalità. Non vengono utilizzati per scopi ulteriori e sono normalmente installati direttamente dal titolare del sito web.
                        <br /><br />
                        In particolare, i cookie tecnici utilizzati si possono suddividere in:
                        <ul>
                            <li><strong>Cookie di navigazione o di sessione:</strong> Garantiscono la normale navigazione e fruizione del sito web. Sono di natura temporanea e vengono eliminati alla chiusura del browser.</li>
                            <li><strong>Cookie di funzionalità:</strong> Permettono all'utente la navigazione in funzione di una serie di criteri selezionati (ad esempio, la lingua) al fine di migliorare il servizio reso allo stesso.</li>
                        </ul>
                        <strong>Questo sito NON utilizza cookie di profilazione</strong>, né propri né di terze parti, per inviare messaggi pubblicitari in linea con le preferenze manifestate dall'utente nell'ambito della navigazione in rete.
                    </p>

                    <h3>3. Gestione dei Cookie</h3>
                    <p>
                        L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. La disabilitazione dei cookie tecnici può compromettere l'utilizzo di alcune funzionalità del sito. È possibile trovare informazioni su come gestire i cookie nel proprio browser ai seguenti indirizzi:
                        <br />
                        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a> |
                        <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a> |
                        <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a> |
                        <a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;