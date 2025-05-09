require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB-yhteys
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Käyttäjämalli
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// JWT tokenin tarkistusmiddleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Rekisteröinti
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Täytä kaikki kentät.' });

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ error: 'Sähköposti on jo käytössä.' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({ email, passwordHash });
  await user.save();

  res.status(201).json({ message: 'Rekisteröinti onnistui!' });
});

// Tilin poisto
app.delete('/api/delete-account', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error while deleting account" });
  }
});

// Kirjautuminen
const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginSuccess('');
    if (!loginForm.email || !loginForm.password) {
      setLoginError('Täytä kaikki kentät.');
      return;
    }
    try {
      const res = await fetch('https://portfolio-zvkt.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error || 'Kirjautuminen epäonnistui.');
        return;
      }
      setLoginSuccess('Kirjautuminen onnistui!');
      setUser({ email: data.email, token: data.token });
      setLoginForm({ email: '', password: '' });
      setTimeout(() => {
        setIsLoginOpen(false);
        setIsUserModalOpen(true);
        document.body.classList.remove('modal-open');
        document.body.classList.add('modal-open');
      }, 800);
    } catch (err) {
      setLoginError('Virhe palvelinyhteydessä.');
    }
  };
  
  // Rekisteröinti
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegisterError('');
    setRegisterSuccess('');
    if (!registerForm.email || !registerForm.password) {
      setRegisterError('Täytä kaikki kentät.');
      return;
    }
    try {
      const res = await fetch('https://portfolio-zvkt.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerForm)
      });
      const data = await res.json();
      if (!res.ok) {
        setRegisterError(data.error || 'Rekisteröinti epäonnistui.');
        return;
      }
      setRegisterSuccess('Rekisteröinti onnistui!');
      setRegisterForm({ email: '', password: '' });
    } catch (err) {
      setRegisterError('Virhe palvelinyhteydessä.');
    }
  };