const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
const connectDB = require('./database');

dotenv.config();

const app = express();
app.use(cors());
app.use(require('cookie-parser')());
app.disable('x-powered-by');
app.use(express.json());
app.use('/api', routes);

connectDB()

const port = process.env.PORT || 3000;

app.listen(port);
