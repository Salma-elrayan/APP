import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to users.json
const usersFilePath = path.join(__dirname, 'users.json');

// Path to orders.json
const ordersFilePath = path.join(__dirname, 'orders.json');

// Function to read users from JSON file
const readUsers = () => {
  try {
    if (fs.existsSync(usersFilePath)) {
      const data = fs.readFileSync(usersFilePath, 'utf-8');
      return JSON.parse(data || '[]');
    }
    return [];
  } catch (error) {
    console.error('Error reading users:', error);
    return [];
  }
};

// Function to write users to JSON file
const writeUsers = (users) => {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing users:', error);
  }
};

// Function to read orders from JSON file
const readOrders = () => {
  try {
    if (fs.existsSync(ordersFilePath)) {
      const data = fs.readFileSync(ordersFilePath, 'utf-8');
      return JSON.parse(data || '[]');
    }
    return [];
  } catch (error) {
    console.error('Error reading orders:', error);
    return [];
  }
};

// Function to write orders to JSON file
const writeOrders = (orders) => {
  try {
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing orders:', error);
  }
};

// Sign Up Route
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const users = readUsers();

  // Check if user already exists
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Add new user
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: 'Account created successfully', user: { name, email } });
});

// Login Route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  res.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email } });
});

// Get all users (for debugging)
app.get('/api/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// Place Order Route
app.post('/api/orders', (req, res) => {
  const { products, total, deliveryInfo, userEmail } = req.body;

  if (!products || !total || !deliveryInfo || !userEmail) {
    return res.status(400).json({ message: 'Please provide all order details' });
  }

  const orders = readOrders();

  // Add new order
  const newOrder = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    products,
    total,
    deliveryInfo,
    userEmail,
    status: 'Pending'
  };

  orders.push(newOrder);
  writeOrders(orders);

  res.status(201).json({ message: 'Order placed successfully', order: newOrder });
});

// Get user orders
app.get('/api/orders/:userEmail', (req, res) => {
  const { userEmail } = req.params;
  const orders = readOrders();
  const userOrders = orders.filter(order => order.userEmail === userEmail);
  res.json(userOrders);
});

// Get all orders (for debugging)
app.get('/api/all-orders', (req, res) => {
  const orders = readOrders();
  res.json(orders);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Data stored in: ${usersFilePath}`);
});
