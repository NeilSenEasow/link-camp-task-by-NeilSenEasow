import React from 'react';
import './quote.css';
import teamImage from '../../assets/images/quote/replace.png';

function Quote() {
    return (
        <section id="quote" className="quote section">
            <div className="quote-overlay"></div>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center" data-aos="fade-up">
                        <div className="quote-content">
                            <h2>
                                "Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilisation work."
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Quote; 