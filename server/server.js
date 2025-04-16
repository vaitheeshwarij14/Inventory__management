import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import customerRoutes from './routes/customerRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api', productRoutes);
app.use('/api/customers', customerRoutes); // 🔥 Added customer routes

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => console.log('Server running at http://localhost:3000'));
  })
  .catch(err => console.error('MongoDB connection error:', err));
