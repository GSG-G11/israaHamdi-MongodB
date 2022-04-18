require('dotenv').config();
const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => console.log('database connected successfully'))
  .catch((err) => console.log('error connecting to database', err));

module.exports = mongoose.connection;