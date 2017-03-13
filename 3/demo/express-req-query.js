const express = require('express');

const app = express();

app.use(function(req, res) {
  res.json(req.query);
});

app.listen(3001, function () {
  console.log('server on http://localhost:3001');
});

// url demo
// http://localhost:3001/s?__biz=MzIwNjQwMzUwMQ%3D%3D&chksm=97236145a054e8535cf3bb4ffb0b34b056c61281ac7993f57fb259236afb11c9e935d393a9aa&idx=1&mid=2247484295&scene=0&sn=0f1d06ca521bcfb2002d852312084214
// http://localhost:3001/?demo[0]=yo&demo[1]=yoyoyo
// http://localhost:3001/?demo[0]=yo&demo.1=yoyoyo
