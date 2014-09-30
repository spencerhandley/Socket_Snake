var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile("../client/index.html");
});

io.on('connection', function(socket){
  console.log('a user connected');
});

app.listen(3000);
