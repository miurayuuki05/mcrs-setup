const express = require('express');
const app = express();
const port = 3050;

app.get('/product', (req, res) => {
  res.send('this is the product function');
});

app.listen(port, () => {
  console.log(`Listening at :${port}`);
});