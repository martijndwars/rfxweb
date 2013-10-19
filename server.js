var express = require('express.io');

var app = express().http().io();

app.configure(function () {
  app.use(express.static(__dirname + '/src'));
})

app.listen(8080);





var transmitter = require('./transmitter');
transmitter.connect('192.168.10.3', 10002);

var receiver = require('./receiver');
receiver.connect('192.168.10.3', 10001);


app.io.sockets.on('connection', function (socket) {
  socket.on('lightOn', function (data) {
    transmitter.lightOn();
  });

  socket.on('lightOff', function (data) {
    transmitter.lightOff();
  });

  transmitter.on('ACK', function () {
    socket.emit('ACK');
  });
});