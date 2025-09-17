import React from "react";
import ContactForm from "../components/ContactForm";

import "../styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faEyeSlash,
  faCircleCheck,
  faSquareCheck,
  faHandshake,
  faIndustry,
  faShoppingCart,
  faLaptopCode,
  faBuilding,
  faStethoscope,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="about-page">
      {/* 1. Header / Title Section */}
      <section className="about-header">
        <h1>About Us</h1>
        <p>Building Trust Through Expertise in Finance, Taxation & Business Advisory</p>
      </section>

      {/* 2. Who We Are */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          Rajesh Kandoi & Associates is a Chartered Accountancy firm dedicated to providing comprehensive
          financial, taxation, and business advisory services. With a commitment to integrity and
          professionalism, we empower businesses and individuals to achieve sustainable financial growth.
        </p>
      </section>

      {/* 3. Our Vision */}
      <section className="our-vision">
        <h2>Our Vision</h2>
        <p>
          To be a trusted partner in the financial success of our clients by delivering accurate, transparent, and innovative solutions.
        </p>
      </section>

      {/* 4. Our Mission */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          To simplify complexities of finance, taxation, and compliance, ensuring our clients focus on growth while we handle the numbers.
        </p>
      </section>

      {/* 5. Our Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <h3>Integrity</h3>
            <p>Our roots possess strong moral values which we carry in our professional work.</p>
          </div>
          <div className="value">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faEyeSlash} />
            </div>
            <h3>Confidentiality</h3>
            <p>We understand the importance and value of our client’s information and follow best standards to maintain confidentiality.</p>
          </div>
          <div className="value">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <h3>Transparency</h3>
            <p>We maintain a clear and fair environment leading to utmost client satisfaction.</p>
          </div>
          <div className="value">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faSquareCheck} />
            </div>
            <h3>Respect</h3>
            <p>Respect is the foundation of a harmonious workplace.</p>
          </div>
          <div className="value">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>Commitment</h3>
            <p>We are committed to providing the best professional services and meet our client’s expectations.</p>
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="industries">
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          {[
            { icon: faIndustry, title: "Manufacturing", desc: "Streamline compliance, cost control, audits." },
            { icon: faShoppingCart, title: "Retail & Trading", desc: "Simplifying GST, invoicing, inventory compliance." },
            { icon: faLaptopCode, title: "IT & Startups", desc: "Advising on tax planning & global expansion." },
            { icon: faBuilding, title: "Real Estate & Construction", desc: "Specialized accounting & taxation for developers." },
            { icon: faStethoscope, title: "Healthcare & Professionals", desc: "Financial advisory, taxation, and compliance support." },
          ].map((item, idx) => (
            <div className="industry" key={idx}>
              <div className="icon-circle">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="contact-section">
            {/* Contact Form Section */}
            <div className="contact-form">
              <h2>Let’s Work Together</h2>
              <ContactForm /> {/* ✅ Use the EmailJS-enabled form */}
            </div>
      
            {/* Contact Info Section */}
            <div className="contact-info">
              <h2>Why Choose Us</h2>
                <p>
                  <strong>Experience & Precision:</strong> We bring years of expertise ensuring top-quality solutions.
                </p>
                <p>
                  <strong>Client-Focused:</strong> Your needs are our priority with transparent communication.
                </p>
                <p>
                  <strong>Trusted Services:</strong> Providing reliable and professional CA services tailored for you.
                </p>
            </div>
      </div>
    </div>
  );
}

export default About;