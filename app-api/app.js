require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authMiddleware = require('./Src/middleware/authMiddleware');
const app = express();
const PORT = process.env.PORT;

const connectDB = require('./Src/helper/ConnectMongoDB');
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

app.use(helmet());

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
  // allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Users = require('./Src/modules/Auth/Routes');
const Products = require('./Src/modules/Products/Routes');
const Categories = require('./Src/modules/Categories/Routes')
const Checkout = require('./Src/modules/Checkout/Routes')

app.use('/api/v1/users', Users);
app.use('/api/v1/products', authMiddleware, Products);
app.use('/api/v1/categories', authMiddleware, Categories);
app.use('/api/v1/checkout', authMiddleware, Checkout);

app.use((req, res) => {
  res.status(404).json({
    status: false,
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


startServer();
