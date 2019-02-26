//server.js
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'app')));

app.get('/ping', ({ res }) => {
  res.send('pong');
});
app.get('/*', ({ res }) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});
app.listen(port, () => {
  console.log('App start at', port);
});