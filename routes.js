// routes.js
const express = require('express');
const router = express.Router();

router.post('/products', (req, res) => {
  const { name, description, price } = req.body;
  const _id = 'abc'; // Fake ID for now
  res.status(201).json({ name, description, price, _id });
});

module.exports = { router };
