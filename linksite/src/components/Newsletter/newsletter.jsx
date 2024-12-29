import React from 'react';
import './newsletter.css';
import linkedMagazine from '../../assets/images/newsletter/linked-magazine.jpg';
import linkedPdf from '../../assets/documents/IEEE_LINKED.pdf';

function Newsletter() {
    return (
        <section id="newsletter" className="newsletter section">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <p className="subtitle">IEEE LINK NEWSLETTER</p>
                    <h2>IEEE LINKED</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8" data-aos="fade-up">
                        <div className="magazine-container">
                            <a href={linkedPdf} target="_blank" rel="noopener noreferrer" className="magazine-link">
                                <div className="magazine-preview">
                                    <img src={linkedMagazine} alt="IEEE LINKED Magazine Cover" className="magazine-image" />
                                    <div className="magazine-overlay">
                                        <div className="magazine-info">
                                            <h3>January - June 2024 Edition</h3>
                                            <p>Click to read the latest edition</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter; 