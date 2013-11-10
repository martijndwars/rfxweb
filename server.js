var express = require('express.io');

var app = express().http().io();

app.configure(function () {
  app.use(express.static(__dirname + '/src'));
})

app.listen(8080);




var ip = '192.168.178.4';

var transmitter = require('./transmitter');
transmitter.connect(ip, 10002);

var receiver = require('./receiver');
receiver.connect(ip, 10001);


app.io.sockets.on('connection', function (socket) {
  socket.on('lightOn', function (data) {
    transmitter.lightOn(data);
  });

  socket.on('lightOff', function (data) {
    transmitter.lightOff(data);
  });

  transmitter.on('ACK', function () {
    socket.emit('ACK');
  });
});