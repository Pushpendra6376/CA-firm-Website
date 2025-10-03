import React from "react";
import ContactForm from "../components/ContactForm";
import founderPhoto from "../assets/Rajesh-Kandoi-Photo.jpg";
import heroImage from "../assets/About-us-Header.png"; // Using this as a placeholder hero
import "../styles/About.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faLightbulb,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import whyChooseUsPoints from '../data/whyChooseUsPoints.js';
import coreValues from '../data/coreValues.js';

function About() {
  return (
    <div className="about-page">
      {/* 1. Header Section */}
      <section className="about-header" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="header-overlay">
          <h1>About Us</h1>
          <p>“Building Trust Through Expertise in Finance, Taxation & Business Advisory”</p>
        </div>
      </section>

      {/* 2. Founder's Vision Section */}
      <section className="about-section founder-section">
        <div className="founder-image">
          <img src={founderPhoto} alt="Mr. Rajesh Kandoi, Founder" />
        </div>
        <div className="founder-text">
          <h2>Our Story & Founder's Vision</h2>
          <p>
            Welcome to Rajesh Kandoi & Associates, a Chartered Accountancy firm established in 2019 with a singular focus: to be your most reliable financial partner.
          </p>
          <p>
            Our founder, Mr. Rajesh Kandoi, brings with him extensive experience in the financial domain since 2002. Witnessing how individuals and businesses often struggle with the complexities of accounting and financial planning, he founded this firm with a clear vision. That vision is to create a service where clients are free from financial minutiae, allowing them to focus on what truly matters—spending time with family or making strategic decisions to grow their business.
          </p>
          <p>
            At Rajesh Kandoi & Associates, we are more than just accountants; we are your strategic advisors, dedicated to navigating the complexities of finance so you can achieve your goals with confidence and clarity.
          </p>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="about-section mission-vision-section">
          <div className="info-card">
              <FontAwesomeIcon icon={faLightbulb} className="info-card-icon" />
              <h3>Our Vision</h3>
              <p>To be the most trusted and sought-after financial partner in Jaipur, recognized for our unwavering commitment to excellence, integrity, and client success. We envision a future where every client is equipped with the knowledge and tools to navigate their financial landscape with ease and foresight.</p>
          </div>
          <div className="info-card">
              <FontAwesomeIcon icon={faBullseye} className="info-card-icon" />
              <h3>Our Mission</h3>
              <p>To empower businesses and individuals with strategic, precise, and reliable financial expertise. We are dedicated to providing personalized CA services that go beyond mere compliance, ensuring our clients achieve their financial goals with confidence and clarity.</p>
          </div>
      </section>
      
      {/* 4. Core Values Section */}
      <section className="about-section core-values-section">
        <h2>Our Core Values</h2>
        <p className="section-subtitle">Our practice is built on a foundation of strong ethical principles that guide every action we take.</p>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div className="value-item" key={index}>
              <FontAwesomeIcon icon={value.icon} className="value-icon" />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* 6. Why Choose Us Section */}
      <section className="about-section why-choose-us-section">
        <div className="why-choose-us-content">
            <h2>Why Choose Us?</h2>
            <p className="section-subtitle">Choosing the right financial partner is a critical decision. Here’s why Rajesh Kandoi & Associates is the right choice for you:</p>
            <ul>
                {whyChooseUsPoints.map((point, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={faCheckCircle} className="checkmark-icon" /> {point}
                    </li>
                ))}
            </ul>
        </div>
      </section>

      {/* 7. Let's Connect Section */}
      <section className="about-section connect-section">
        <h2>Let's Work Together</h2>
        <p className="section-subtitle">Have questions or need assistance with your financial goals? We are here to help. Fill out the form below and our team will get back to you shortly.</p>
        <div className="contact-form form-container">
            <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default About;


