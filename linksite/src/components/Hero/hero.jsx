import React, { useEffect } from 'react';
import './hero.css';

import slide1 from '../../assets/images/hero/slide1.jpg';
import slide2 from '../../assets/images/hero/slide2.jpg';
import slide3 from '../../assets/images/hero/slide3.jpg';

function Hero() {
    useEffect(() => {
        
        const myCarousel = document.getElementById('hero-carousel');
        if (myCarousel && window.bootstrap) {
            new window.bootstrap.Carousel(myCarousel, {
                interval: 5000,
                ride: 'carousel',
                touch: true
            });
        }
    }, []);

    return (
        <section id="hero" className="hero section dark-background">
            <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active" style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${slide1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Welcome to <span>IEEE LINK</span></h2>
                            <p className="animate__animated animate__fadeInUp">Local Integrated Network of Kerala (LINK) is a network of IEEE Student Branches in Kerala Section. LINK was formed with the vision of improving the relationship between student branches and thereby improving their overall activity.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item" style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${slide2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Our Mission</h2>
                            <p className="animate__animated animate__fadeInUp">To foster technological innovation and excellence for the benefit of humanity through collaboration and knowledge sharing among IEEE Student Branches in Kerala.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto" style={{display: 'block', margin: '0 auto', width: 'fit-content'}}>Read More</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item" style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${slide3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Join IEEE LINK</h2>
                            <p className="animate__animated animate__fadeInUp">Be part of the largest technical professional organization dedicated to advancing technology for the benefit of humanity. Connect with fellow students and professionals across Kerala.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                </defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3"></use>
                </g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0"></use>
                </g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9"></use>
                </g>
            </svg>
        </section>
    );
}

export default Hero; 