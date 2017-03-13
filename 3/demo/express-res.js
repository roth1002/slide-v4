const express = require('express');
const app = express();

app.use('/1', function (req, res) {
  const user = {
    name: 'cph',
    age: 23,
  };
  res.json(user);
});

app.use('/2', function (req, res) {
  const user = {
    name: 'cph',
    age: 23,
  };
  res.send(JSON.stringify(user));
});

app.get('/3', function (req, res) {
  const user = {
    name: 'cph',
    age: 23,
  };
  res.json(JSON.stringify(user));
});

app.listen(3001, function () {
  console.log('server on http://localhost:3001');
});
