import React from 'react';
import './societies.css';

// Import all society logos
import csLogo from '../../assets/images/societies/IEEE-CS_LogoTM_black.png';
import rasLogo from '../../assets/images/societies/IEEE-Robotics.png';
import comsocLogo from '../../assets/images/societies/ieee-comsoc.png';
import pesLogo from '../../assets/images/societies/IEEE-PES.png';
import sightLogo from '../../assets/images/societies/AJCE_SIGHT.png';
import ieLogo from '../../assets/images/societies/IEEE-Promotion-of-Innovation-Entreprenuership-PIE-Kerala-Section-Logo-removebg-preview.png';
import esLogo from '../../assets/images/societies/ieee-edsoc-color-logo-forweb.webp';
import apsLogo from '../../assets/images/societies/ieee-antennas.png';
import casLogo from '../../assets/images/societies/ieee-circuits-and-systems.png';
import embLogo from '../../assets/images/societies/ieee-emb.png';
import photonicsLogo from '../../assets/images/societies/ieee-photonics.png';
import mttsLogo from '../../assets/images/societies/ieee-mtts.png';
import spsLogo from '../../assets/images/societies/ieee-signal-processing.png';
import rfidLogo from '../../assets/images/societies/ieee-rfid.png';
import ssitLogo from '../../assets/images/societies/ieee-ssit.png';

function Societies() {
    const societies = [
        {
            name: "Computer Society",
            id: "cs",
            imageUrl: csLogo
        },
        {
            name: "Robotics & Automation Society",
            id: "ras",
            imageUrl: rasLogo
        },
        {
            name: "Communications Society",
            id: "comsoc",
            imageUrl: comsocLogo
        },
        {
            name: "Power & Energy Society",
            id: "pes",
            imageUrl: pesLogo
        },
        {
            name: "SIGHT",
            id: "sight",
            imageUrl: sightLogo
        },
        {
            name: "Innovation & Entrepreneurship",
            id: "ie",
            imageUrl: ieLogo
        },
        {
            name: "Education Society",
            id: "es",
            imageUrl: esLogo
        },
        {
            name: "Antennas & Propagation Society",
            id: "aps",
            imageUrl: apsLogo
        },
        {
            name: "Circuits & Systems Society",
            id: "cas",
            imageUrl: casLogo
        },
        {
            name: "EMB Society",
            id: "emb",
            imageUrl: embLogo
        },
        {
            name: "Photonics Society",
            id: "photonics",
            imageUrl: photonicsLogo
        },
        {
            name: "MTT-S",
            id: "mtts",
            imageUrl: mttsLogo
        },
        {
            name: "Signal Processing Society",
            id: "sps",
            imageUrl: spsLogo
        },
        {
            name: "RFID",
            id: "rfid",
            imageUrl: rfidLogo
        },
        {
            name: "SSIT",
            id: "ssit",
            imageUrl: ssitLogo
        }
    ];

    return (
        <section id="societies" className="societies section">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <p className="subtitle">OUR SOCIETIES</p>
                    <h2>GET INVOLVED WITH OUR DYNAMIC SOCIETIES</h2>
                </div>

                <div className="description" data-aos="fade-up">
                    <p>IEEE Society members stay technically current, network with colleagues locally and abroad, and collaborate on research and projects with leading experts all while taking advantage of specialized opportunities.</p>
                    <p>IEEE develops communities around particular technology challenges or cutting-edge subject areas. Their areas of coverage may be general in nature, which include multi-disciplinary topics or emerging concepts. Discover which Technical Community best matches your interests.</p>
                </div>

                <div className="row g-4 justify-content-center">
                    <div className="col-lg-10">
                        <div className="row g-4">
                            {societies.map((society, index) => (
                                <div key={society.id} className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <div className="society-box">
                                        <div className="society-content">
                                            <div className="society-image">
                                                <img src={society.imageUrl} alt={society.name} />
                                            </div>
                                            <h3>{society.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Societies; 