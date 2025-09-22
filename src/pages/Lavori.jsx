// src/pages/Lavori.jsx
import React from 'react';
import LavoriHero from '../components/LavoriHero';
import ImageGallery from '../components/ImageGallery';
import VideoGallery from '../components/VideoGallery';
import { Title, Meta } from 'react-head';

const Lavori = () => {
    return (
        <>
            <Title>I Nostri Lavori - Galleria di Scavi e Demolizioni</Title>
            <Meta name="description"
                  content="Guarda la galleria di immagini e video dei nostri lavori di scavo, demolizione, opere stradali e trasporto realizzati in Veneto."/>

            <LavoriHero/>
            <ImageGallery/>
            <VideoGallery/>
        </>
    );
};

export default Lavori;