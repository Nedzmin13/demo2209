// src/pages/Contatti.jsx
import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactInfo from '../components/ContactInfo';
import ContactFormMap from '../components/ContactFormMap';
import EmergencySection from '../components/EmergencySection';
import { Title, Meta } from 'react-head';

const Contatti = () => {
    return (
        <>
            <Title>Contatti - Richiedi un Preventivo Gratuito | Sartorello Escavazioni</Title>
            <Meta name="description"
                  content="Contatta Sartorello Escavazioni per un preventivo gratuito.
                  Ci trovi a Monteviale (VI). Chiama ora o compila il form per le tue esigenze di scavo e demolizione."/>

            <PageHeader
                title="Contatti"
                subtitle="Siamo qui per rispondere alle tue domande e fornirti il miglior servizio possibile. Contattaci per un preventivo gratuito o una consulenza personalizzata."
            />
            <ContactInfo/>
            <ContactFormMap/>
        </>
    );
};

export default Contatti;