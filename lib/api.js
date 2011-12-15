
var log = require('mkslogger').logger(module),
    fs = require('fs'),
    path = require('path');

exports.files = function(req, res) {
    if (req.method === 'GET') {
        log.debug('get:'+req.url);
    }
}
