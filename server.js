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
console.log('Yhdistetään MongoDB-tietokantaan...');
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB-yhteys muodostettu!'))
  .catch((err) => console.error('❌ MongoDB-yhteysvirhe:', err));

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
  console.log('POST /api/register', req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    console.log('⛔ Rekisteröinti epäonnistui: puuttuva kenttä');
    return res.status(400).json({ error: 'Täytä kaikki kentät.' });
  }

  const existing = await User.findOne({ email });
  if (existing) {
    console.log('⛔ Rekisteröinti epäonnistui: sähköposti jo käytössä');
    return res.status(400).json({ error: 'Sähköposti on jo käytössä.' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({ email, passwordHash });
  await user.save();

  console.log('✅ Käyttäjä rekisteröity:', email);
  res.status(201).json({ message: 'Rekisteröinti onnistui!' });
});

// Tilin poisto
app.delete('/api/delete-account', verifyToken, async (req, res) => {
  console.log('DELETE /api/delete-account', req.user);
  try {
    const userId = req.user.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      console.log('⛔ Tilin poisto epäonnistui: käyttäjää ei löydy', userId);
      return res.status(404).json({ message: "User not found" });
    }
    console.log('✅ Käyttäjä poistettu:', userId);
    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error('❌ Virhe tilin poistossa:', error);
    res.status(500).json({ message: "Server error while deleting account" });
  }
});

// Kirjautuminen
app.post('/api/login', async (req, res) => {
  console.log('POST /api/login', req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log('⛔ Kirjautuminen epäonnistui: käyttäjää ei löydy', email);
    return res.status(401).json({ error: 'Väärä sähköposti tai salasana.' });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    console.log('⛔ Kirjautuminen epäonnistui: väärä salasana', email);
    return res.status(401).json({ error: 'Väärä sähköposti tai salasana.' });
  }

  const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  console.log('✅ Kirjautuminen onnistui:', email);
  res.json({ token, email: user.email });
});

// Portin kuuntelu Renderille
const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => console.log(`🚀 Server running on port ${PORT}`));