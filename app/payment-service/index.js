const express = require('express');
const app = express();
const port = 3050;

app.get('/pay', (req, res) => {
  res.send('this is the payment function');
});

app.listen(port, () => {
  console.log(`Listening at :${port}`);
});