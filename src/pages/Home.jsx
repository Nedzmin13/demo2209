// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import CtaSection from '../components/CtaSection';
import { Title, Meta } from 'react-head';

const Home = () => {
    return (
        <>
            <Title>Sartorello Escavazioni SRL - Scavi, Demolizioni e Opere Stradali a Vicenza</Title>
            <Meta name="description" content="Sartorello Escavazioni offre servizi professionali di scavi, movimento terra, demolizioni e opere stradali. Esperienza decennale a Vicenza e provincia." />

            <Hero />
            <ServicesPreview />
            <CtaSection />
        </>
    );
};

export default Home;