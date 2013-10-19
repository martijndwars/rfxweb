var debug = require('debug')('rfxweb:transmitter');
var events = require('events');
var util = require('util');

var transmitter = require('./transmitter');
var receiver = require('./receiver');

function RfxCom(host) {
    transmitter.connect(host);
    receiver.connect(host);

    // forward events from transmitter and receiver
}