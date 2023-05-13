import express from 'express';

const app = express()
app.get('/', (req, res) => {
  res.send('API is running!')
});

app.listen(8000, () => {
  console.log('The application is listening on port 8000...')
});