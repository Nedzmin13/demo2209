// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <-- 1. IMPORTA IL COMPONENTE

import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Certificazioni from './pages/Certificazioni';
import Lavori from './pages/Lavori';
import Contatti from './pages/Contatti';
import LavoraConNoi from './pages/LavoraConNoi';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PaginaImmagini from "./pages/PaginaImmagini.jsx";
import PaginaVideo from "./pages/PaginaVideo.jsx";
import Preventivo from "./pages/Preventivo.jsx";
import ThankYou from "./pages/ThankYou.jsx";

function App() {
    return (
        <Router>
            <ScrollToTop /> {/* <-- 2. INSERISCI IL COMPONENTE QUI */}
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chi-siamo" element={<ChiSiamo />} />
                    <Route path="/certificazioni" element={<Certificazioni />} />
                    <Route path="/lavori" element={<Lavori />} />
                    <Route path="/lavori/immagini" element={<PaginaImmagini />} />
                    <Route path="/lavori/video" element={<PaginaVideo />} />
                    <Route path="/contatti" element={<Contatti />} />
                    <Route path="/preventivo" element={<Preventivo />} />
                    <Route path="/lavora-con-noi" element={<LavoraConNoi />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App;