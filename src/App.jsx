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
                    <Route path="/contatti" element={<Contatti />} />
                    <Route path="/lavora-con-noi" element={<LavoraConNoi />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App;