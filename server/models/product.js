import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  photoUrl: String,
  createdAt: String,
});

export const Product = mongoose.model('Product', productSchema);
