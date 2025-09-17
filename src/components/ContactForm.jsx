import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import '../styles/ContactForm.css'; // Optional: Import CSS for styling


export default function ContactForm() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_yk9fbki",   // Your Service ID
      "template_wjmplsp",  // Auto-Reply Template ID
      form.current,
      "LdWiIxjfqn8avBXoo"  // Public Key
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        setSubmitted(true);
      },
      (error) => {
        console.error("EmailJS error:", error.text);
      }
    );
  };

  if (submitted) {
    return <h2>Thank you! Your query has been sent.</h2>;
  }

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        placeholder="Your query"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
