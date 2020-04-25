const express = require('express');
const app = express();
const port = 69;

require('./database');
 
app.get('/', function (req, res) {
  res.send('Ngantuk anjing')
})
 
app.listen(port, () => console.log("Listen to", port))
