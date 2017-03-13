const express = require('express');

const app = express();

// routing
app.get('/', function (req, res) {
  res.json({ text: 'GET!!!' });
});

// routing
app.post('/', function (req, res) {
  res.json({ text: 'POST!!!' });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001! http://localhost:3001');
});
