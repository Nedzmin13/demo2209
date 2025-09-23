import React from 'react';
import { Title, Meta } from 'react-head';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const Preventivo = () => {
    return (
        <>
            <Title>Richiedi un Preventivo Gratuito - Sartorello Escavazioni</Title>
            <Meta name="description" content="Compila il modulo per ricevere un preventivo gratuito e personalizzato per i tuoi lavori di scavo, demolizione o movimento terra. Risposta rapida garantita." />

            <PageHeader
                title="Richiedi un Preventivo"
                subtitle="Descrivici il tuo progetto e ti forniremo una valutazione dettagliata e senza impegno nel più breve tempo possibile."
            />

            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <ContactForm />
            </div>
        </>
    );
};

export default Preventivo;