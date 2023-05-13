import express from 'express';
import dotenv from "dotenv";

const app = express();

dotenv.config();

console.log(process.env);

app.get('/', (req, res) => {
  res.send('API is running!')
});

app.get('/environment', (req, res) => {
    res.send(process.env);
});

app.listen(8000, () => {
  console.log('The application is listening on port 8000...')
});