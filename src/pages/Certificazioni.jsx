import React from 'react';
import PageHeader from '../components/PageHeader';
import CertificationsList from '../components/CertificationsList';
import QualityStandards from '../components/QualityStandards';
// import DownloadSection from '../components/DownloadSection';
import { Title, Meta } from 'react-head';
import ServicesBar from "../components/ServicesBar.jsx";

const Certificazioni = () => {
    return (
        <>
            {/* Meta tag aggiornati per SEO con tutte le certificazioni */}
            <Title>Tutte le Certificazioni ISO e SOA - Sartorello Escavazioni</Title>
            <Meta name="description"
                  content="Sartorello Escavazioni possiede le certificazioni ISO 9001 (Qualità), ISO 14001 (Ambiente), ISO 45001 (Sicurezza) e l'attestazione SOA per l'esecuzione di lavori pubblici. Scopri tutte le nostre garanzie."/>

            <ServicesBar />

            <PageHeader
                title="Le Nostre Certificazioni"
                subtitle="Per assicurare un servizio sempre più efficiente, l’Azienda adotta un sistema di gestione integrato per Qualità (ISO 9001), Ambiente (ISO 14001) e Sicurezza (ISO 45001), garantendo un costante miglioramento delle attività."
            />
            <CertificationsList/>
            <QualityStandards/>

        </>
    );
};

export default Certificazioni;