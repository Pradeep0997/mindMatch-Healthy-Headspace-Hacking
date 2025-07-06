const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Load static data
const affirmations = require('./data/affirmations.json');
const recommendations = require('./data/recommendations.json');
const resources = require('./data/resources.json');

app.get('/api/affirmation', (req, res) => {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  res.json({ affirmation: random });
});

app.get('/api/recommendation/:mood', (req, res) => {
  const mood = req.params.mood;
  res.json({ tip: recommendations[mood] || "Stay strong. You are doing great." });
});

app.get('/api/resources', (req, res) => {
  res.json({ resources });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
