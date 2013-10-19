var debug = require('debug')('rfxweb:receiver');
var events = require('events');
var util = require('util');
var net = require('net');

function Receiver() {
  events.EventEmitter.call(this);
}

util.inherits(Receiver, events.EventEmitter);

Receiver.prototype.connect = function (host, port) {
  debug('[info] trying to connect..');

  var self = this;

  this.client = net.connect(port, host, function() {
    debug('[info] connected!');

    // Set ARC mode
    self.client.write(new Buffer('\xf0\x24', 'binary'), function () {
      debug('[>>] written arc mode');
    });
  });

  this.client.on('data', function (data) {
    debug('[<<] ' + data.toString('hex'));
  });
};

module.exports = new Receiver;