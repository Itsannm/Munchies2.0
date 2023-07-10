const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Set up routes
app.get('/recipes', async (req, res) => {
  try {
    const { query } = req.query;
    const apiKey = 'YOUR_SPOONACULAR_API_KEY';
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const apiKey = 'YOUR_SPOONACULAR_API_KEY';
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
