import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [activeLink, setActiveLink] = useState('hero');

    useEffect(() => {
        const updateNavbarHeight = () => {
            const navbar = document.getElementById('header');
            if (navbar) {
                const height = navbar.offsetHeight;
                document.documentElement.style.setProperty('--navbar-height', `${height}px`);
            }
        };

        // Update on mount
        updateNavbarHeight();

        // Update on resize
        window.addEventListener('resize', updateNavbarHeight);

        // Cleanup
        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, []);

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1 className="sitename">IEEE LINK</h1>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li>
                                <a 
                                    href="#hero" 
                                    className={activeLink === 'hero' ? 'active' : ''}
                                    onClick={() => handleLinkClick('hero')}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#about" 
                                    className={activeLink === 'about' ? 'active' : ''}
                                    onClick={() => handleLinkClick('about')}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#office-bearers" 
                                    className={activeLink === 'office-bearers' ? 'active' : ''}
                                    onClick={() => handleLinkClick('office-bearers')}
                                >
                                    Office Bearers
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#ieee-linked" 
                                    className={activeLink === 'ieee-linked' ? 'active' : ''}
                                    onClick={() => handleLinkClick('ieee-linked')}
                                >
                                    IEEE Linked
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#resources" 
                                    className={activeLink === 'resources' ? 'active' : ''}
                                    onClick={() => handleLinkClick('resources')}
                                >
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    className={activeLink === 'contact' ? 'active' : ''}
                                    onClick={() => handleLinkClick('contact')}
                                >
                                    Contact
                                </a>
                            </li>
                            <li className="social-icons">
                                <a href="#instagram"><i className="fab fa-instagram"></i></a>
                                <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
                                <a href="#facebook"><i className="fab fa-facebook"></i></a>
                            </li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                </div>
            </header>
        </div>
    );  
}

export default Navbar;