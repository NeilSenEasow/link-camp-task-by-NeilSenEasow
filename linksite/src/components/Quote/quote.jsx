import React from 'react';
import './quote.css';

function Quote() {
    return (
        <section 
            id="quote" 
            className="quote section" 

        >
            <div className="quote-overlay"></div>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center" data-aos="fade-up">
                        <div className="quote-content">
                            <h2>
                                "Individual <span>commitment</span> to a group <span>effort</span>—that is what makes a <span>team</span> <span>work</span>, a company <span>work</span>, a <span>society</span> <span>work</span>, a <span>civilisation</span> work."
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Quote; 