import React from 'react';
import './stats.css';
import { FaUsers, FaUniversity, FaCalendarAlt, FaTrophy } from 'react-icons/fa';

function Stats() {
    return (
        <section id="stats" className="stats section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="stat-box" data-aos="fade-up">
                            <FaUsers className="stats-icon" />
                            <div className="stats-number">13000+</div>
                            <div className="stats-text">Student Members</div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stat-box" data-aos="fade-up" data-aos-delay="100">
                            <FaUniversity className="stats-icon" />
                            <div className="stats-number">116+</div>
                            <div className="stats-text">Student Branches</div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
                            <FaCalendarAlt className="stats-icon" />
                            <div className="stats-number">3000+</div>
                            <div className="stats-text">Events</div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stat-box" data-aos="fade-up" data-aos-delay="300">
                            <FaTrophy className="stats-icon" />
                            <div className="stats-number">400+</div>
                            <div className="stats-text">Awards</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats; 