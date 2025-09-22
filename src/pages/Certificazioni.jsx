// src/pages/Certificazioni.jsx
import React from 'react';
import PageHeader from '../components/PageHeader';
import CertificationsList from '../components/CertificationsList';
import QualityStandards from '../components/QualityStandards';
import DownloadSection from '../components/DownloadSection';
import { Title, Meta } from 'react-head';


const Certificazioni = () => {
    return (
        <>

            <Title>Certificazioni ISO 9001 e SOA - Sartorello Escavazioni</Title>
            <Meta name="description"
                  content="Sartorello Escavazioni è
                  certificata UNI EN ISO 9001:2015 e possiede l'attestazione SOA per l'esecuzione di lavori pubblici. Garanzia di qualità e sicurezza."/>
            <PageHeader
                title="Certificazioni"
                subtitle="Per assicurare ai nostri clienti un servizio sempre più efficiente, l’Azienda adotta un sistema di qualità UNI EN ISO 9001:2015 prevedendo un costante sviluppo e miglioramento delle attività produttive e di controllo delle lavorazioni."
            />
            <CertificationsList/>
            <QualityStandards/>
            <DownloadSection/>
        </>
    );
};

export default Certificazioni;