import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8081;

// Endpoint to fetch data from the JSONPlaceholder API
app.post('/getTodoData', async (req, res) => {
  const searchString = req.body.searchString;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${searchString}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
