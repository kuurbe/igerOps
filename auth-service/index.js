require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('✅ Auth service is alive!');
});

app.get('/help', (req, res) => {
  res.send('🛠 This service supports /register and /login');
});

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Register new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).send('Username and password required.');

  try {
    const hashed = await bcrypt.hash(password, 10);
    // Replace with DB logic later
    res.status(201).json({ username, hash: hashed });
  } catch (err) {
    res.status(500).send('Registration failed.');
  }
});

// Login and return JWT
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).send('Missing credentials.');

  // Replace with real user validation
  const dummyPassword = 'password123';
  const isValid = await bcrypt.compare(password, await bcrypt.hash(dummyPassword, 10));
  if (!isValid)
    return res.status(403).send('Invalid username or password.');

  const token = jwt.sign({ user: username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token });
});

// Catch-all route (Express v5-compatible)
app.all('/{*catchall}', (req, res) => {
  res.status(404).send('❌ Route not found.');
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`🐅 Auth service running on port ${PORT}`);
});