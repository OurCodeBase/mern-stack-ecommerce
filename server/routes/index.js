const express = require('express');
const auth = require('../middlewares/authentication');

const app = express.Router();

app.use("/users", require('./users'));
app.use("/products", auth, require("./products"));

module.exports = app;
