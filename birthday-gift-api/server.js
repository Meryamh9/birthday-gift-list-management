require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 6666;
const birthdayGiftRoute = require('./routes/birthdayGift');

// database connection
require('./config/database');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Utilisé pour les données provenant d'un formulaire HTML
app.use(bodyParser.json()); // Utilisé pour les données provenant d'un corps de requête JSON

// routes
app.use('/gift', birthdayGiftRoute);

// server running status
app.listen(PORT, () => {
  console.log(`The app listening at http://localhost:${PORT}`);
});
