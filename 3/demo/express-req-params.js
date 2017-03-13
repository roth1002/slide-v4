const express = require('express');

const app = express();

app.get('/user/:name', function (req, res) {
  res.send(req.params.name);
});

app.get('/post/:id', function (req, res) {
  res.send(req.params.id);
});

app.get('/', function (req, res) {
  res.send('chentsulin 帥');
});

app.listen(3001, function () {
  console.log('server on http://localhost:3001');
});
