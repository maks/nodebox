/*jshint node:true, es5:true, globalstrict:true,  sub:true */


"use strict";

var log = require('mkslogger').logger(module),
    http = require('http'),
    url = require('url'),
    util = require('util'),
    api = require('./api');

function sendResponse(mesg, res) {

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
}

function requestHandler(req, res) {

    var pathname = url.parse(req.url).pathname,
        reqBody = [];

    if (pathname == "/" && req.method == "POST") {
        log.info("got POST for /");

        request.on("data", function(chunk) {
            var output = chunk.toString().substr(0,20);
            log.debug("POST Body chunk:"+output+"...");
            reqBody.push(chunk);
        });

    } else {
        api.files(req, res);
        sendResponse("GET Request", res);
    }

    req.on("end", function() {
        var reqBodyText = reqBody.join('');
        reqBody = [];
        api.files(req, res);
        sendResponse('', res);
    });
}

http.createServer(requestHandler).listen(process.env.PORT, function() {
    log.warn('Server running at http://'+process.env.INTERFACE+':'+process.env.PORT);
});

