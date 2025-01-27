import express from "express";
import Reservation from "../models/Reservation.js"; // Import the Reservation model

const router = express.Router();

// POST route to create a new reservation
router.post("/reserve", async (req, res) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  // Validation for required fields
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    // Create a new reservation document
    const newReservation = new Reservation({
      firstName,
      lastName,
      email,
      date,
      time,
      phone,
    });

    // Save the reservation to the database
    await newReservation.save();

    // Respond with success
    res.status(201).json({
      success: true,
      message: "Reservation created successfully!",
      reservation: newReservation,
    });
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create reservation. Please try again later.",
    });
  }
});

// Export the router to use in server.js
export default router;
