var debug = require('debug')('rfxweb:transmitter');
var events = require('events');
var util = require('util');
var net = require('net');
var convert = require('./convert');

function Transmitter(host, port) {
  events.EventEmitter.call(this);
}

util.inherits(Transmitter, events.EventEmitter);

Transmitter.prototype.connect = function (host, port) {
  debug('[info] trying to connect..');

  var self = this;

  this.client = net.connect(port, host, function() {
    debug('[info] connected!');

    // Set 48-bit mode
    self.client.write(new Buffer('\xf0\x37\xf0\x37', 'binary'), function () {
      debug('[info] written 48-bit mode');

      // Set KAKU mode
      self.client.write(new Buffer('\xf0\x3d\xf0\x3d', 'binary'), function () {
        debug('[info] written kaku mode');
      });
    });
  });

  this.client.on('data', function (data) {
    debug('[<<] ' + data.toString('hex'));

    if (data[0] === 0x37) {
      self.emit('ACK');
    }
  })
};

Transmitter.prototype.lightOn = function (data) {
  var self = this;

  // I have no clue..
  this.client.write(new Buffer('\x20', 'binary'), function () {
    // Compose message
    var msg = new Buffer([
      convert.unit(data.unit), 0xff - convert.unit(data.unit),
      convert.device(data.device), 0xff - convert.device(data.device)
    ]);

    // Turn device on
    self.client.write(msg, function () {
      debug('[info] set ' + data.unit + data.device + ' on');
    });
  });
};

Transmitter.prototype.lightOff = function (data) {
  var self = this;

  // I have no clue..
  this.client.write(new Buffer('\x20', 'binary'), function () {
    // Compose message
    var msg = new Buffer([
      convert.unit(data.unit), 0xff - convert.unit(data.unit),
      convert.device(data.device) | 0x20, 0xff - (convert.device(data.device) | 0x20)
    ]);

    // Turn device off
    self.client.write(msg, function () {
      debug('[info] set ' + data.unit + data.device + ' off');
    });
  });
};

module.exports = new Transmitter;