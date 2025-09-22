import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Icone per la barra superiore

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            {/* ===== BARRA SUPERIORE DEI CONTATTI ===== */}
            <div className={styles.topBar}>
                <div className={styles.topBarContainer}>
                    <a href="tel:0444562374"><FaPhoneAlt /> 0444562374</a>
                    <a href="mailto:info@sartorello.it"><FaEnvelope />
                        sartorello@sartorelloescavazioni.com</a>
                </div>
            </div>

            {/* ===== BARRA DI NAVIGAZIONE PRINCIPALE ===== */}
            <div className={styles.navContainer}>
                <NavLink to="/" className={styles.logoContainer} onClick={closeMobileMenu}>
                    <img src={logo} alt="Sartorello Escavazioni Logo" className={styles.logoImg} />
                    <div className={styles.logoText}>
                        <span>SARTORELLO</span>
                        <span className={styles.subtext}>ESCAVAZIONI SRL</span>
                    </div>
                </NavLink>

                <nav className={styles.navLinksDesktop}>
                    <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink>
                    <NavLink to="/chi-siamo" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Chi Siamo</NavLink>
                    <NavLink to="/certificazioni" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Certificazioni</NavLink>
                    <NavLink to="/lavori" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Lavori</NavLink>
                    <NavLink to="/contatti" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contatti</NavLink>
                    <NavLink to="/lavora-con-noi" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Lavora con noi</NavLink>
                </nav>

                <div className={styles.headerRightDesktop}>
                    <a href="/preventivo" className="btn btn-primary">Richiedi Preventivo</a>
                </div>

                <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>

            {/* Menu Mobile a tendina */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <NavLink to="/" onClick={closeMobileMenu} className={styles.mobileNavLink}>Home</NavLink>
                <NavLink to="/chi-siamo" onClick={closeMobileMenu} className={styles.mobileNavLink}>Chi Siamo</NavLink>
                <NavLink to="/certificazioni" onClick={closeMobileMenu} className={styles.mobileNavLink}>Certificazioni</NavLink>
                <NavLink to="/lavori" onClick={closeMobileMenu} className={styles.mobileNavLink}>Lavori</NavLink>
                <NavLink to="/contatti" onClick={closeMobileMenu} className={styles.mobileNavLink}>Contatti</NavLink>
                <NavLink to="/lavora-con-noi" onClick={closeMobileMenu} className={styles.mobileNavLink}>Lavora con noi</NavLink>
                <a href="/contatti" onClick={closeMobileMenu} className={`${styles.mobileQuoteButton} btn btn-primary`}>
                    Richiedi Preventivo
                </a>
            </div>
        </header>
    );
};

export default Navbar;