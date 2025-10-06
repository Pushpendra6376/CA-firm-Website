import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import your images from the assets folder
import heroBackground from '../assets/home-assets/home-hero-background.png';
import welcomeImage from '../assets/home-assets/welcome-handshake.png';
// // --- NEW IMAGES ---    
import client1 from '../assets/home-assets/client-1.png';
import client2 from '../assets/home-assets/client-2.png';
import client3 from '../assets/home-assets/client-3.jpg';
import client4 from '../assets/home-assets/client-4.jpeg';
import client5 from '../assets/home-assets/client-5.jpg';
import client6 from '../assets/home-assets/client-6.jpg';
import client7 from '../assets/home-assets/client-7.webp';
import client8 from '../assets/home-assets/client-8.webp';
import client9 from '../assets/home-assets/client-9.webp';
import client10 from '../assets/home-assets/client-10.jpg';
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

    const testimonials = [
        { image: client1, name: "Aarav Sharma", company: "CEO, Innovate Solutions", quote: "Rajesh Kandoi and Associates transformed our financial strategy. Their expertise and dedication are unparalleled. Highly recommended!" },
        { image: client2, name: "Priya Singh", company: "Founder, Creative Minds", quote: "As a startup, their guidance on compliance and tax was invaluable. They are a true partner in our growth." },
        { image: client3, name: "Rohit Verma", company: "Managing Director, TechWave", quote: "The team at Rajesh Kandoi and Associates is knowledgeable and responsive. They helped us navigate complex tax regulations with ease." },
        { image: client4, name: "Sneha Kapoor", company: "CFO, GreenEarth", quote: "Their personalized approach and attention to detail set them apart. We trust them with all our financial matters." },
        { image: client5, name: "Vikram Patel", company: "Owner, Patel Enterprises", quote: "Professional, reliable, and efficient. Rajesh Kandoi and Associates have been instrumental in our business success." },
        { image: client6, name: "Anjali Mehta", company: "Director, Bright Future", quote: "Their expertise in tax planning saved us a significant amount. We are grateful for their support and guidance." },
        { image: client7, name: "Karan Joshi", company: "CEO, FinTech Innovations", quote: "Rajesh Kandoi and Associates provided us with exceptional service. Their team is knowledgeable and always ready to assist." },
        { image: client8, name: "Meera Nair", company: "Founder, HealthPlus", quote: "Their insights and strategic advice have been crucial for our financial planning. We highly recommend their services." },
        { image: client9, name: "Sanjay Rao", company: "Managing Partner, Rao & Co.", quote: "The professionalism and expertise of Rajesh Kandoi and Associates are unmatched. They have been a great asset to our firm." },
        { image: client10, name: "Lina D'Souza", company: "CFO, Global Ventures", quote: "We have been working with Rajesh Kandoi and Associates for years. Their consistent support and expert advice have been invaluable." },
    ];
    
    const latestBlogs = [
        { image: blog1, category: "Taxation", title: "Decoding the Latest GST Amendments for 2025", link: "/blogs" },
        { image: blog2, category: "Investment", title: "Smart Investment Strategies for the New Financial Year", link: "/blogs" }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true, // Set to true to show arrows
    };

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
                    <p>Rajesh Kandoi & Associates is a Certified Public Accounting Firm committed to serving our clients as a Trusted Advisor</p>
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
                    <Slider {...sliderSettings}>
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
                    </Slider>
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

