import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to main page!');
});

app.post('/submit', (req, res) => {
  res.send('Data fetched with POST request');
});

app.put('/update', (req, res) => {
  res.send('Request for data update received');
});

app.delete('/delete', (req, res) => {
  res.send('Request for data delete received');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
