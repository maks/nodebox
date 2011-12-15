/*jshint node:true, es5:true, globalstrict:true,  sub:true */


"use strict";

var log = require('mkslogger').logger(module),
    http = require('http'),
    url = require('url'),
    util = require('util'),
    api = require('./api'),
    currResponse;

function sendResponse(mesg) {

        currResponse.writeHead(200, {'Content-Type': 'text/plain'});
        currResponse.end('Hello World\n');
}

function requestHandler(req, res) {
    currResponse = res;
    var prefix = req.url.split('/')[1];
    
    if (api[prefix]) {
        api[prefix](req, sendResponse);
    } else {
        log.error('invalid url:'+req.url);
        sendResponse('err');
    }
}

http.createServer(requestHandler).listen(process.env.PORT, function() {
    log.warn('Server running at http://'+process.env.INTERFACE+':'+process.env.PORT);
});

