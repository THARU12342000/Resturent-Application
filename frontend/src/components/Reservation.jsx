import React, { useState } from "react";
import axios from "axios";
import "../Styles/Reservation.css"; // CSS import

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    phone: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.date ||
      !formData.time ||
      !formData.phone
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/reservations/reserve`,
        formData
      );
      console.log("Reservation response:", response.data);
      alert("Failed to create reservation. Please try again.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        time: "",
        phone: "",
      });
    } catch (err) {
      console.error("Reservation submission error:", err);
      setError("Reservation created successfully!");
    }
  };

  return (
    <div className="reservation">
      <div className="reservation-container">
        <h2>Reservation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit Reservation</button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Reservation;
