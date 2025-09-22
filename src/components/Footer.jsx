// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assicurati che Link sia importato
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} container`}>
                {/* ...Le altre colonne del footer rimangono invariate... */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerTitle}>SARTORELLO ESCAVAZIONI SRL</h4>
                    <p>
                        La nostra esperienza decennale in scavi
                        <br />
                        movimento terra, demolizioni e opere stradali
                    </p>
                    <p>Via Fontanelle 8, 36050 Monteviale (VI)</p>
                    <p>0444562374</p>
                    <p>sartorello@sartorelloescavazioni.com</p>
                </div>
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerTitle}>Link Rapidi</h4>
                    <ul className={styles.footerLinks}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/chi-siamo">Chi Siamo</Link></li>
                        <li><Link to="/lavori">I Nostri Lavori</Link></li>
                        <li><Link to="/certificazioni">Certificazioni</Link></li>
                        <li><Link to="/contatti">Contatti</Link></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerTitle}>I Nostri Servizi</h4>
                    <ul className={styles.footerLinks}>
                        <li>Scavi e Movimento Terra</li>
                        <li>Demolizioni Civili e Industriali</li>
                        <li>Opere Stradali</li>
                        <li>Trasporto Conto Terzi</li>
                        <li>Noleggio Mezzi e Attrezzature</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={`${styles.footerBottomContainer} container`}>
                    <div className={styles.socialIcons}>
                        <span>Seguici sui social:</span>
                        <a href="https://www.facebook.com/sartorelloescavazionisrl" target="_blank"><FaFacebook/></a>
                        <a href="https://www.instagram.com/sartorelloescavazionitrasporti/" target="_blank"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/sartorello-escavazioni-s.r.l./" target="_blank"><FaLinkedin /></a>
                    </div>
                    {/* ===== SEZIONE COPYRIGHT AGGIORNATA ===== */}
                    <div className={styles.copyright}>
                        © 2025 Sartorello Escavazioni SRL. Tutti i diritti riservati. P.IVA: 03464770241 -
                        <Link to="/privacy-policy" className={styles.footerBottomLink}>Privacy Policy</Link> -
                        Powered By <a href="http://www.codened.it" target="_blank" rel="noopener noreferrer" className={styles.footerBottomLink}>CodeNed</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;