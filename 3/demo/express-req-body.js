const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function(req, res) {
  res.send(JSON.stringify(req.body));
});

app.get('/', function(req, res) {
  res.send('Waiting for POST..');
});

app.listen(3001, function () {
  console.log('server on http://localhost:3001');
});

// curl -X POST -d "{'demo': 'yoyo'}" http://localhost:3001
