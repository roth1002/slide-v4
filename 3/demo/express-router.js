const express = require('express');

const app = express();
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Index');
});

router.get('/yo', function(req, res) {
  res.send('YoYo');
});

router.get('/ya', function(req, res) {
  res.send('YaYa');
});

app.use('/', router);

app.use(function(req, res) {
  res.send('404');
});

app.listen(3001, function() {
  console.log('server on http://localhost:3001');
});
