import React from 'react';
import './Navbar.css';
import About from '../about';
import Contact from '../contact';
import OfficeBearers from '../officebearers';
import Resources from '../resources';
import IEEELinked from '../ieeelinked';

function Navbar() {
    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1 className="sitename">IEEE LINK</h1>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="#hero" className="active">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#office-bearers">Office Bearers</a></li>
                            <li><a href="#ieee-linked">IEEE Linked</a></li>
                            <li><a href="#resources">Resources</a></li>
                            <li><a href="#contact">Contact</a></li>
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