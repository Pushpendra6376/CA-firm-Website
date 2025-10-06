import React, {useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import allPosts from '../data/blogsData.js';
import heroImage from '../assets/Blogs-assets/Blogs-header.png';
import '../styles/Blogs.css';

// --- Article Modal Component ---
const ArticleModal = ({ post, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <img src={post.image} alt={post.title} className="modal-image" />
                <h2>{post.title}</h2>
                <p className="modal-meta">{post.date} • {post.author}</p>
                <div className="modal-body" dangerouslySetInnerHTML={{ __html: post.fullContent }}></div>
            </div>
        </div>
    );
};

// --- Blog Data with FULL Expanded Content ---
const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedPost, setSelectedPost] = useState(null);

    const categories = useMemo(() => ["All", ...new Set(allPosts.map(p => p.category))], []);
    const popularPosts = useMemo(() => allPosts.slice(1, 6), []);
    const recentPosts = useMemo(() => allPosts.slice(0, 3), []);

    const filteredPosts = useMemo(() => {
        return allPosts.filter(post => {
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeCategory]);

    const featuredPost = allPosts.find(p => p.featured);

    const handleSidebarLinkClick = (postTitle) => {
        setActiveCategory('All');
        setSearchTerm(postTitle);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="blog-page">
            {selectedPost && <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
            
            <section className="blog-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="blog-hero-overlay">
                    <div className="blog-hero-content">
                        <h1>Our Insights & Articles</h1>
                        <p className="tagline">Stay updated with taxation, finance, auditing, and compliance trends curated by experts at RKA & Associates.</p>
                        <p className="banner-line">“Knowledge that empowers your business decisions.”</p>
                    </div>
                </div>
            </section>

            <div className="blog-container">
                <main className="blog-main-content">
                    <div className="blog-filters">
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search by title, keyword, or category..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                        <div className="category-filters">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={activeCategory === category ? 'active' : ''}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {featuredPost && activeCategory === 'All' && searchTerm === '' && (
                         <section className="featured-blog-section">
                            <h2>Featured Article</h2>
                            <div className="featured-blog-card">
                                <img src={featuredPost.image} alt={featuredPost.title} className="featured-blog-image"/>
                                <div className="featured-blog-content">
                                    <h3>{featuredPost.title}</h3>
                                    <p>{featuredPost.excerpt}</p>
                                    <button onClick={() => setSelectedPost(featuredPost)} className="read-more-btn">
                                        Read Full Article <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="blog-grid-section">
                        <h2>{searchTerm ? 'Search Results' : (activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`)}</h2>
                        <div className="blog-grid">
                            {filteredPosts.map(post => (
                                <div className="blog-card" key={post.title}>
                                    <img src={post.image} alt={post.title} className="blog-card-image" />
                                    <div className="blog-card-content">
                                        <p className="blog-card-meta">{post.date} • {post.author}</p>
                                        <h4>{post.title}</h4>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        <button onClick={() => setSelectedPost(post)} className="read-more-btn">Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                <aside className="blog-sidebar">
                    <div className="sidebar-sticky-wrapper">
                        <div className="sidebar-widget">
                            <h4>Popular Blogs</h4>
                            <ul>
                                {popularPosts.map(post => <li key={post.title}><button onClick={() => handleSidebarLinkClick(post.title)}>{post.title}</button></li>)}
                            </ul>
                        </div>
                        <div className="sidebar-widget">
                            <h4>Recent Blogs</h4>
                            <ul>
                                {recentPosts.map(post => <li key={post.title}><button onClick={() => handleSidebarLinkClick(post.title)}>{post.title}</button></li>)}
                            </ul>
                        </div>
                        <div className="sidebar-widget">
                            <h4>Subscribe</h4>
                            <p>Get the latest tax and compliance updates directly in your inbox.</p>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Your email address" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            
            <section className="blog-cta-section">
                <h2>Need Expert Guidance?</h2>
                <p>Our team of Chartered Accountants and advisors are here to help you with taxation, compliance, and business strategies.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="cta-button primary">Contact Us Today</Link>
                    <Link to="/contact" className="cta-button secondary">Book a Consultation</Link>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
