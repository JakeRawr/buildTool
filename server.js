'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.get('/getHelp', function (req, res) {
  res.send({text:'getting help...'});
});

app.listen(3000);
