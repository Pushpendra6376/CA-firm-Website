
import React, { useState, useEffect, useRef } from 'react';
import heroImage from '../assets/services-hero.png';
import '../styles/Services.css';
import industries from '../data/industries.js'; // This data file also needs to be updated to emojis
import servicesData from '../data/ServicesData.js';

// --- Reusable Service Card Component with Animation ---
const ServiceCard = ({ icon, title, description }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div ref={cardRef} className={`service-card ${isVisible ? 'visible' : ''}`}>
            <div className="service-icon-wrapper">
                <span className="service-icon" role="img" aria-label={`${title} icon`}>{icon}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};


function Services() {
    return (
        <div className="services-page">
            <section className="services-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-overlay">
                    <h1>Our Comprehensive Services</h1>
                    <p>
                        At Rajesh Kandoi and Associates, we offer a wide range of expert financial and advisory services
                        designed to meet the diverse needs of businesses and individuals.
                    </p>
                </div>
            </section>

            <main className="services-content">
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </main>
            
            {/* ✅ UPDATED Industries Section */}
            <section className="industries-section">
                <h2>Industries We Serve</h2>
                <p className="section-subtitle">Our expertise spans across diverse sectors, allowing us to provide tailored financial solutions for each industry.</p>
                {/* ✅ Using 'services-grid' for consistent layout */}
                <div className="services-grid">
                    {industries.map((industry, index) => (
                        // ✅ Reusing the ENTIRE ServiceCard component for perfect consistency!
                        <ServiceCard
                            key={index}
                            icon={industry.icon}
                            title={industry.title}
                            description={industry.text}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Services;

