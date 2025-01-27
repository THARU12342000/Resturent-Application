import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import RestaurantAtmosphere from "../assets/6.png";

import "./../Styles/Contact.css";

const Contacts = () => {
  const [formStatus, setFormStatus] = useState(""); // State to handle the form status

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission success
    setTimeout(() => {
      setFormStatus("Message sent successfully!");
    }, 500);

    // Reset the form status after 3 seconds
    setTimeout(() => {
      setFormStatus("");
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      {/* Page Heading */}
      <motion.h1
        className="page-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      <div className="container">
        <div className="content-wrapper">
          {/* Side Image */}
          <motion.div
            className="contact-img"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={RestaurantAtmosphere} alt="Restaurant atmosphere" />
          </motion.div>

          {/* Contact Info and Form */}
          <div className="contact-content">
            {/* Contact Information */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p>
                We’d love to hear from you! Whether you have a question, feedback, 
                or want to make a reservation, reach out to us anytime. Let’s make 
                your dining experience memorable.
              </p>
              <div className="contact-details">
                <div className="detail">
                  <FaPhoneAlt size={20} />
                  <p>+1 800 123 456</p>
                </div>
                <div className="detail">
                  <FaEnvelope size={20} />
                  <p>contact@restaurant.com</p>
                </div>
                <div className="detail">
                  <FaMapMarkerAlt size={20} />
                  <p>123 Food Street, Gourmet City</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h3>Drop Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  aria-label="Your Name"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  aria-label="Your Email"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  aria-label="Your Message"
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
              {formStatus && (
                <motion.div
                  className="form-status"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {formStatus}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
