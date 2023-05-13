import express from 'express';
import dotenv from "dotenv";

const app = express();

dotenv.config();

console.log(process.env.TEST_KEY);

app.get('/', (req, res) => {
  res.send('API is running!')
});

app.get('/environment', (req, res) => {
    res.send(process.env.TEST_KEY);
});

app.get('/healthcheck', (req, res) => {
    res.send("OK");
});

app.listen(8000, () => {
  console.log('The api is listening on port 8000...')
});