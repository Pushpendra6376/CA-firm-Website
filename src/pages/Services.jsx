import React from "react";

import '../styles/Services.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faStore,
  faLaptopCode,
  faBuilding,
  faUsers,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";


const industries = [
  { icon: faIndustry, title: "Manufacturing", text: "Helping industries streamline compliance, cost control, and audits." },
  { icon: faStore, title: "Retail & Trading", text: "Simplifying GST, invoicing, and inventory-related compliances." },
  { icon: faLaptopCode, title: "Information Technology (IT)", text: "Advising startups and IT companies on tax planning & global expansion." },
  { icon: faUsers, title: "Startups & Entrepreneurs", text: "Providing end-to-end support, from company registration to funding & compliance." },
  { icon: faBuilding, title: "Real Estate & Construction", text: "Specialized accounting & taxation strategies for developers and builders." },
  { icon: faHeart, title: "NGOs & Non-Profits", text: "Ensuring compliance, audits, and financial transparency for social organizations." },
];
function Services() { 
  return (
    <div className="services-page">

      {/* Header for services page */}

      <div className="services-header">
        <h2>Our Comprehensive Services</h2>
        <p className="header-p">At Rajesh Kandoi and Associates, we offer a wide range of financial experts and advisory services designed to meet the diverse needs of businesses and individuals.</p>
      </div>
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
    </div>
  )
}

export default Services;
