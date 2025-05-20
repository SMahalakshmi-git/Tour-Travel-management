// backend/routes/currency.js

import express from "express";
import fetch from "node-fetch";
const router = express.Router();

const API_KEY = "6156c5271021d2c897e416cb"; // Replace with your actual API key

router.get("/convert", async (req, res) => {
  const { from, to, amount } = req.query;
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const rate = data.conversion_rates[to];
    const result = rate * amount;
    res.json({ rate, result });
  } catch (error) {
    console.error("Error fetching exchange rates", error);
    res.status(500).json({ error: "Error fetching exchange rates" });
  }
});

export default router;
