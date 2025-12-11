const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, maxlength: 50, unique: true },
  key: { type: String, required: true },
})

const main = model("Users", schema);
module.exports = main;
