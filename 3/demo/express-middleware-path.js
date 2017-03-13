const express = require('express');

const app = express();

// req - request 物件
// res - response 物件
// next - 下一個 middleware
app.use(function(req, res, next) {
  req.test = 'every path';
  next(); // 一定要 call next 除非你不希望往下執行
});

app.use('/api', function(req, res, next) {
  // Do Whatever You want
  req.test = 'api';
  next();
});

app.use(function(req, res) {
  res.send(req.test);
});

app.listen(3001); // 監聽一個 port
