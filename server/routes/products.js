const express = require('express');
const { Product } = require('../models');

const app = express.Router();

app.get("/", async (_, res) => {
  try {
    const products = await Product.find({});
    return res.json({ status: "success", message: "Query success.", data: products });
  } catch (e) {
    res.statusCode = 500;
    return res.json({ status: "failed", message: "Query failed." });
  }
})

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findOne({ _id: id });
    return res.json({ status: "success", message: "Query success.", data: products });
  } catch (e) {
    res.statusCode = 500;
    return res.json({ status: "failed", message: "Query failed." });
  }
})

module.exports = app;
