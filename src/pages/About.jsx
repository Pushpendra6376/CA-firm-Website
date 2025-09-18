import React from "react";
import ContactForm from "../components/ContactForm";
import founderPhoto from "../assets/Rajesh-Kandoi-Photo.jpg";
import heroImage from "../assets/About-us-Header.png"; // Using this as a placeholder hero
import "../styles/About.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faLock,
  faBalanceScale,
  faHandshake,
  faStar,
  faBullseye,
  faLightbulb,
  faIndustry,
  faStore,
  faLaptopCode,
  faBuilding,
  faUsers,
  faHeart,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

// Data arrays to keep JSX clean
const coreValues = [
  { icon: faShieldAlt, title: "Integrity", text: "Our roots possess strong moral values which we carry in our professional work." },
  { icon: faLock, title: "Confidentiality", text: "We understand the importance and value of our client’s information and maintain the highest standards of confidentiality." },
  { icon: faBalanceScale, title: "Transparency", text: "We foster a clear, honest, and fair environment with our clients to achieve the utmost satisfaction and build lasting trust." },
  { icon: faHandshake, title: "Respect", text: "We believe that mutual respect is the primary foundation of a harmonious and productive professional relationship." },
  { icon: faStar, title: "Commitment", text: "We are deeply committed to providing the best professional services and exceeding our client’s expectations every single time." },
];

const industries = [
  { icon: faIndustry, title: "Manufacturing", text: "Helping industries streamline compliance, cost control, and audits." },
  { icon: faStore, title: "Retail & Trading", text: "Simplifying GST, invoicing, and inventory-related compliances." },
  { icon: faLaptopCode, title: "Information Technology (IT)", text: "Advising startups and IT companies on tax planning & global expansion." },
  { icon: faUsers, title: "Startups & Entrepreneurs", text: "Providing end-to-end support, from company registration to funding & compliance." },
  { icon: faBuilding, title: "Real Estate & Construction", text: "Specialized accounting & taxation strategies for developers and builders." },
  { icon: faHeart, title: "NGOs & Non-Profits", text: "Ensuring compliance, audits, and financial transparency for social organizations." },
];

const whyChooseUsPoints = [
    "Experienced Professionals: Our team possesses deep, multi-domain expertise to handle all your financial needs.",
    "Timely & Reliable: We value your time and ensure all services are delivered promptly and reliably.",
    "Technology-Driven Approach: We leverage modern technology to ensure precision, efficiency, and accuracy in all our work.",
    "Personalized Solutions: We believe one size does not fit all. We listen to your unique needs and craft customized solutions."
];


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

      {/* 5. Industries We Serve Section */}
      <section className="about-section industries-section">
        <h2>Industries We Serve</h2>
        <p className="section-subtitle">Our expertise spans across diverse sectors, allowing us to provide tailored financial solutions for each industry.</p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <FontAwesomeIcon icon={industry.icon} className="industry-icon" />
              <h3>{industry.title}</h3>
              <p>{industry.text}</p>
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