import React from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    return (
        <section id="about" className="about section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <p>Who we are</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                        <p>
                            IEEE LINK (Local Integrated Network of Kerala) serves as a dynamic platform connecting IEEE Student Branches across Kerala, fostering collaboration and technical excellence.
                        </p>
                        <ul>
                            <li><i className="bi bi-check2-circle"></i> <span>Facilitating collaboration between IEEE Student Branches in Kerala</span></li>
                            <li><i className="bi bi-check2-circle"></i> <span>Organizing technical workshops, conferences, and networking events</span></li>
                            <li><i className="bi bi-check2-circle"></i> <span>Supporting student professional development and leadership skills</span></li>
                        </ul>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <p>
                            As a network of passionate engineering students and professionals, we work together to advance technology for humanity. Through our initiatives, we create opportunities for learning, networking, and professional growth while building lasting connections within the IEEE community.
                        </p>
                        <a href="#" className="read-more">
                            <span>Read More</span>
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
