const express = require('express');
const app = express();
const port = 3050;

app.get('/profile', (req, res) => {
  const data = {
    name: 'Rimuru',
    email: 'rimuru@asdasd.com',
    age: 27,
    address: 'Jl. Jalan, No. 1, Jakarta',
  };
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Listening at :${port}`);
});