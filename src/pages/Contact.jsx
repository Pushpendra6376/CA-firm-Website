import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import contactImage from '../assets/contact-us-image.jpg';
import ContactForm from "../components/ContactForm";
import '../styles/Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact-hero">
        <img src={contactImage} alt="Contact us" />
      </div>

      <div className="contact-section">
        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
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

      {/* Contact Details Cards */}
      <div className="contact-details-container">
        <div className="contact-card address-card">
          <FontAwesomeIcon icon={faLocationDot} className="contact-icon address-icon" />
          <p>315, Signature Tower, Tonk Rd, Jaipur, Rajasthan 302015</p>
        </div>
        <div className="contact-card phone-card">
          <FontAwesomeIcon icon={faPhoneVolume} className="contact-icon phone-icon" />
          <p>
            <a href="tel:+918690972052">+91 8690972052</a>
          </p>
        </div>
        <div className="contact-card email-card">
          <FontAwesomeIcon icon={faSquareEnvelope} className="contact-icon email-icon" />
          <p>
            <a href="mailto:rajeshkandoionline@gmail.com">
              rajeshkandoionline@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.456621453268!2d75.80786507421132!3d26.857039062002597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b1f280e755%3A0xb3518a228308d3e2!2sRajesh%20Kandol%20%26%20Associates!5e0!3m2!1sen!2sin!4v1694851259020!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
