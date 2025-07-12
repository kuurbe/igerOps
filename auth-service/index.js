const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [];
const SECRET = process.env.JWT_SECRET || "LSUTigerSecret";

// Registration route
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hashed = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashed });
  res.status(201).json({ message: "Registered successfully" });
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Use dynamic port
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));