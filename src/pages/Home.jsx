import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Import your images from the assets folder
import heroBackground from '../assets/home-assets/home-hero-background.png';
import welcomeImage from '../assets/home-assets/welcome-handshake.png';
// // --- NEW IMAGES ---
import whyChooseUsImage from '../assets/home-assets/why-choose-us-image.png';
import client1 from '../assets/home-assets/client-1.png';
import client2 from '../assets/home-assets/client-2.png';
import blog1 from '../assets/home-assets/blog-1.png';
import blog2 from '../assets/home-assets/blog-2.png';

// --- Reusable Card Component for Services & Industries ---
const FeatureCard = ({ icon, title, description, link, linkText }) => (
    <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        {link && <Link to={link} className="learn-more-link">{linkText} →</Link>}
    </div>
);

function Home() {
    // --- Data for the sections ---
    const coreServices = [
        { icon: "💰", title: "GST Services", description: "Expert guidance and compliance for Goods and Services Tax.", link: "/services" },
        { icon: "🔎", title: "Audit & Assurance", description: "Enhancing credibility and ensuring financial transparency.", link: "/services" },
        { icon: "💸", title: "Income Tax Planning", description: "Strategic tax planning and meticulous return filing.", link: "/services" },
    ];

    const whyChooseUsPoints = [
        { icon: "🧑‍💼", title: "Expert Team", description: "Our team comprises experienced professionals dedicated to your success." },
        { icon: "🎯", title: "Client-Centric Approach", description: "We tailor our services to meet your unique business needs." },
        { icon: "📈", title: "Proven Track Record", description: "A history of delivering results and fostering long-term partnerships." }
    ];

    const testimonials = [
        { image: client1, name: "Aarav Sharma", company: "CEO, Innovate Solutions", quote: "Rajesh Kandoi and Associates transformed our financial strategy. Their expertise and dedication are unparalleled. Highly recommended!" },
        { image: client2, name: "Priya Singh", company: "Founder, Creative Minds", quote: "As a startup, their guidance on compliance and tax was invaluable. They are a true partner in our growth." }
    ];
    
    const latestBlogs = [
        { image: blog1, category: "Taxation", title: "Decoding the Latest GST Amendments for 2025", link: "/blogs" },
        { image: blog2, category: "Investment", title: "Smart Investment Strategies for the New Financial Year", link: "/blogs" }
    ];

    return (
        <div className="home-page">
            {/* --- Section 1: Hero Section (Existing) --- */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="hero-overlay">
                    <h1>Your Trusted Partner for Financial Excellence</h1>
                    <p>Comprehensive solutions in Audit, Tax, Compliance & Advisory.</p>
                    <Link to="/services" className="cta-button">Explore Our Services</Link>
                </div>
            </section>

            {/* --- Section 2: Welcome Section (Existing) --- */}
            <section className="welcome-section">
                <div className="welcome-content">
                    <div className="welcome-image">
                        <img src={welcomeImage} alt="Professional Handshake" />
                    </div>
                    <div className="welcome-text">
                        <h2>Welcome to Rajesh Kandoi and Associates</h2>
                        <p>We are committed to providing exceptional advisory services. With a focus on integrity and client success, we navigate the complexities of finance so you can achieve your goals.</p>
                        <Link to="/about" className="cta-button secondary">Learn More About Us</Link>
                    </div>
                </div>
            </section>

            {/* --- Section 3: Core Services (Existing) --- */}
            <section className="home-services-section">
                <h2>Our Core Services</h2>
                <div className="feature-grid">
                    {coreServices.map((service, index) => (
                        <FeatureCard key={index} {...service} linkText="Read More" />
                    ))}
                </div>
                <Link to="/services" className="cta-button">View All Services</Link>
            </section>
            
            {/* {trusted experts section} */}
            <div className="experts-container">
                <div className="header-text">
                    <h1>Trusted experts. Proven results.</h1>
                    <h2><strong>It's kind of our thing.</strong></h2>
                    <p>Rajesh kandoi & Co is a Certified Public Accounting Firm committed to serving our clients as a Trusted Advisor</p>
                </div>

                <div className="stats-wrapper">
                    <div className="stat-circle image-1">
                        <div className="stat-content">
                            <span className="stat-number">22+</span>
                            <span className="stat-label"><strong>Years of Experience</strong></span>
                        </div>
                    </div>

                    <div className="stat-circle image-2">
                        <div className="stat-content">
                            <span className="stat-number">100+</span>
                            <span className="stat-label"><strong>Services we Offer</strong></span>
                        </div>
                    </div>

                    <div className="stat-circle image-3">
                        <div className="stat-content">
                            <span className="stat-number">20+</span>
                            <span className="stat-label"><strong>Professional staff</strong></span>
                        </div>
                    </div>

                    <div className="stat-circle image-4">
                        <div className="stat-content">
                            <span className="stat-number">200+</span>
                            <span className="stat-label"><strong>Happy Clients</strong></span>
                        </div>
                    </div>
            </div>
            </div>

            {/* --- Section 5: Testimonials (NEW) --- */}
            <section className="testimonials-section">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <p className="quote">"{testimonial.quote}"</p>
                            <div className="client-info">
                                <img src={testimonial.image} alt={testimonial.name} className="client-photo" />
                                <div className="client-details">
                                    <span className="client-name">{testimonial.name}</span>
                                    <span className="client-company">{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Section 6: Latest Blogs (NEW) --- */}
            <section className="blogs-section">
                <h2>Latest Blogs & Articles</h2>
                <div className="blog-grid">
                    {latestBlogs.map((blog, index) => (
                        <div className="blog-card" key={index}>
                            <img src={blog.image} alt={blog.title} className="blog-image" />
                            <div className="blog-content">
                                <span className="blog-category">{blog.category}</span>
                                <h3>{blog.title}</h3>
                                <Link to={blog.link} className="learn-more-link">Read More →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Section 7: Final Call to Action (Existing) --- */}
            <section className="final-cta-section">
                <h2>Ready to Discuss Your Financial Needs?</h2>
                <p>Let's work together to build a secure financial future for your business.</p>
                <Link to="/contact" className="cta-button">Contact Us Today</Link>
            </section>
        </div>
    );
}

export default Home;