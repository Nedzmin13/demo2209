// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Estrae il "pathname" (es. "/chi-siamo") dall'URL corrente
    const { pathname } = useLocation();

    // Questo "effetto" si attiva ogni volta che il pathname cambia
    useEffect(() => {
        // Riporta la finestra in cima (posizione 0, 0)
        window.scrollTo(0, 0);
    }, [pathname]); // L'effetto dipende dal pathname

    // Questo componente non renderizza nulla di visibile
    return null;
};

export default ScrollToTop;