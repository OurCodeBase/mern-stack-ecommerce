const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const uri = process.env.MONGODB_URI;

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to database:", mongoose.connection.name);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

module.exports = main;
