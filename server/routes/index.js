const express = require('express');
const auth = require('../middlewares/authentication');

const app = express.Router();

app.use("/users", require('./users'));
app.use("/products", require("./products"));

module.exports = app;
