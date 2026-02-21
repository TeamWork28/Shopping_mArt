const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/grocery_mart');
    console.log('DB Name:', mongoose.connection.name);
  } catch (err) {
    console.error('DB Connection Error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
