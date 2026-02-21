require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT;

const connectDB = require('./Src/helper/ConnectMongoDB');
connectDB();

app.use(helmet());

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Products = require('./Src/modules/Products/Routes');
const Categories = require('./Src/modules/Categories/Routes')

app.use('/api/v1/products', Products);
app.use('/api/v1/categories', Categories);


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
