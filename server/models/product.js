const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  price: { type: Number, required: true, maxlength: 50, unique: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
})

const main = model("Products", schema);
module.exports = main;
