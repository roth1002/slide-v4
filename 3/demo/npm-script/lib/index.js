'use strict';

var express = require('express');

var app = express();

app.listen(3001, function () {
  console.log('server on http://localhost:3001');
});