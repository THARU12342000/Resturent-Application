const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

// Create a new reservation
router.post("/reserve", async (req, res) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const reservation = new Reservation({ firstName, lastName, email, date, time, phone });
    await reservation.save();
    res.status(201).json({ message: "Failed to create reservation. Please try again." });
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ message:"Reservation created successfully!"  });
  }
});

module.exports = router;
