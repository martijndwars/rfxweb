var debug = require('debug')('rfxweb:transmitter');
var events = require('events');
var util = require('util');
var net = require('net');

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

Transmitter.prototype.lightOn = function () {
  var self = this;

  // I have no clue..
  this.client.write(new Buffer('\x20', 'binary'), function () {
    // Set A1 on
    self.client.write(new Buffer('\x60\x9f\x00\xff', 'binary'), function () {
      debug('[info] set a1 on');
    });
  });
};

Transmitter.prototype.lightOff = function () {
  var self = this;

  // I have no clue..
  this.client.write(new Buffer('\x20', 'binary'), function () {
    // Set A1 off
    self.client.write(new Buffer('\x60\x9f\x20\xdf', 'binary'), function () {
      debug('[info] set a1 off');
    });
  });
};

module.exports = new Transmitter;