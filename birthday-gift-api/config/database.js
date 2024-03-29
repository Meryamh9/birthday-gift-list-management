// Import the mongoose module
const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = process.env.MONGO_URL || null;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to get notification of successful connection)
db.once('open', () => {
  console.log('Connected to MongoDB.');
});

// Votre vérification de connexion pourrait être réalisée ici après que la connexion soit ouverte.
