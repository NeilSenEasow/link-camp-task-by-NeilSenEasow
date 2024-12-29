import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* First Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3>USEFUL LINKS</h3>
                            <ul>
                                <li><a href="#mint">MINT</a></li>
                                <li><a href="#interns">IEEE Kerala Section Interns</a></li>
                                <li><a href="#yp">IEEE Kerala Section YP</a></li>
                                <li><a href="#students">IEEE Students</a></li>
                                <li><a href="#privacy">Privacy Policy</a></li>
                                <li><a href="#refund">Refund Policy</a></li>
                                <li><a href="#terms">Terms & condition</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3>USEFUL LINKS</h3>
                            <ul>
                                <li><a href="#kerala">IEEE Kerala Section</a></li>
                                <li><a href="#india">IEEE India Council</a></li>
                                <li><a href="#region">IEEE Region 10</a></li>
                                <li><a href="#ieee">IEEE</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Third Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3>CONTACT US</h3>
                            <p>
                                Pulimoodu,<br />
                                Thiruvananthapuram,<br />
                                Kerala, India<br /><br />
                                <strong>Phone:</strong> +91 0471 247 3515<br />
                                <strong>Email:</strong> team@ieee-link.org<br />
                            </p>
                        </div>
                    </div>

                    {/* Fourth Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3>About IEEE LINK</h3>
                            <p>
                                IEEE LINK is an innovative concept that originated in IEEE Kerala Section in India, aimed at networking student branches in an effective way thereby increasing the value in IEEE student membership.
                            </p>
                            <div className="social-links">
                                <a href="#facebook" className="facebook"><FaFacebookF /></a>
                                <a href="#instagram" className="instagram"><FaInstagram /></a>
                                <a href="#linkedin" className="linkedin"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        © Copyright <strong>IEEE Kerala Section</strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Made with ❤️ by NeilSenEasow
                    </div>
                </div>
            </div>

            <button onClick={scrollToTop} className="back-to-top">
                <FaArrowUp />
            </button>
        </footer>
    );
}

export default Footer; 