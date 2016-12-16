var expressExtension = require('express-integrator-extension');
var functions = require('./functions');

var systemToken = 'f74fd7dda55a4901aecc2b4ad2d7eae7'; // Set this value to the systemToken of the stack created in integrator.io
var options = {
  diy: functions,
  // connectors: { _connectorId: functions }, // for connectors
  systemToken: systemToken
};

expressExtension.createServer(options, function (err) {

});