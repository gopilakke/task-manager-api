const mongoose = require('mongoose');
require('dotenv').config(); // Optional: load .env here too

console.log('Connecting to:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
});
