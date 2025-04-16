import Customer from '../models/customerModel.js';

// Register Customer
export const registerCustomer = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Customer already exists' });
    }

    const newCustomer = new Customer({ name, email, password });
    await newCustomer.save();

    res.status(201).json({ message: 'Registration successful', customer: newCustomer });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login Customer
export const loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email, password });
    if (!customer) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', customer });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
