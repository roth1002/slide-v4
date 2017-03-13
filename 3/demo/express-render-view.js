const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.listen(3001, function () {
  console.log('server on http://localhost:3001');
});
