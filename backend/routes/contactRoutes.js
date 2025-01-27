const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: Save contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create new contact message
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
