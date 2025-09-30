import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
import ScaviMovimentoTerra from "./pages/ScaviMovimentoTerra.jsx";
import Demolizioni from "./pages/Demolizioni.jsx";
import OpereStradali from "./pages/OpereStradali.jsx";
import TrasportoContoTerzi from "./pages/TrasportoContoTerzi.jsx";
import CampagneMobili from "./pages/CampagneMobili.jsx";
import AbbattimentoAlberi from "./pages/AbbattimentoAlberi.jsx";
import GalleriaMista from "./pages/GalleriaMista.jsx";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chi-siamo" element={<ChiSiamo />} />
                    <Route path="/certificazioni" element={<Certificazioni />} />
                    <Route path="/lavori" element={<Lavori />} />
                    <Route path="/lavori/galleria-mista" element={<GalleriaMista />} />
                    <Route path="/contatti" element={<Contatti />} />
                    <Route path="/preventivo" element={<Preventivo />} />
                    <Route path="/lavora-con-noi" element={<LavoraConNoi />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/servizi/scavi-e-movimento-terra" element={<ScaviMovimentoTerra />} />
                    <Route path="/servizi/demolizioni" element={<Demolizioni />} />
                    <Route path="/servizi/opere-stradali" element={<OpereStradali />} />
                    <Route path="/servizi/trasporto-conto-terzi" element={<TrasportoContoTerzi />} />
                    <Route path="/servizi/campagne-mobili" element={<CampagneMobili />} />
                    <Route path="/servizi/abbattimento-alberi" element={<AbbattimentoAlberi />} />

                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App;