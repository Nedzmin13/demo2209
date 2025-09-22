// src/pages/ChiSiamo.jsx
import React from 'react';
import PageHeader from '../components/PageHeader';
import HistorySection from '../components/HistorySection';
import ValuesSection from '../components/ValuesSection';
import MissionSection from '../components/MissionSection';
import ParcoMezzi from '../components/ParcoMezzi';
import { Title, Meta } from 'react-head';


const ChiSiamo = () => {
    return (
        <>
            <Title>Chi Siamo - La Storia di Sartorello Escavazioni</Title>
            <Meta name="description" content="Scopri la storia di Sartorello Escavazioni,
            un'azienda con esperienza decennale guidata da Giuseppe Sartorello, con 32 specialisti e un parco mezzi all'avanguardia." />

            <PageHeader
                title="Chi Siamo"
                subtitle="La storia di un'azienda familiare che ha fatto della passione per il lavoro e dell'innovazione tecnologica i pilastri del proprio successo."
            />
            <HistorySection />
            <ValuesSection />
            <MissionSection />
            <ParcoMezzi /> {/* NUOVA SEZIONE */}
        </>
    );
};

export default ChiSiamo;