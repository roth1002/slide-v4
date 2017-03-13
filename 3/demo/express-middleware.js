const express = require('express');

const app = express();

// req - request 物件
// res - response 物件
// next - 下一個 middleware
app.use(function(req, res, next) {
  req.test = 'yo';
  next(); // 一定要 call next 除非你不希望往下執行
});

app.use(function(req, res) {
  // Do Whatever You want
  console.log(req.test);
  res.send(req.test);
});

app.listen(3001); // 監聽一個 port
