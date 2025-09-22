import React from 'react';
import { Title, Meta } from 'react-head';
import PageHeader from '../components/PageHeader';
import WhyUsSection from '../components/WhyUsSection';
import OpenPositions from '../components/OpenPositions';
import ApplicationForm from '../components/ApplicationForm';
import CompanyCulture from '../components/CompanyCulture';

const LavoraConNoi = () => {
    return (
        <>
            <Title>Lavora con Noi - Posizioni Aperte in Sartorello Escavazioni</Title>
            <Meta name="description" content="Entra nel team di Sartorello Escavazioni. Cerchiamo operatori, autisti e tecnici a Monteviale (Vicenza). Invia la tua candidatura e scopri le posizioni aperte." />

            <PageHeader
                title="Lavora con Noi"
                subtitle="Entra a far parte della famiglia Sartorello. Cerchiamo persone motivate e professionali che condividano i nostri valori di qualità e sicurezza."
            />
            <WhyUsSection />
            <OpenPositions />
            <ApplicationForm />
            <CompanyCulture />
        </>
    );
};

export default LavoraConNoi;