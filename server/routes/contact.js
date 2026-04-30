const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

// POST API
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const saved = await contact.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET API
router.get("/", async (req, res) => {
  try {
    const data = await Contact.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;