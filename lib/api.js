
var log = require('mkslogger').logger(module),
    fs = require('fs'),
    path = require('path');

exports.files = function(req, sendResponse) {
    var reqBody = [];

    if (req.method == "POST") {
        log.info("got POST for "+req.url);

        request.on("data", function(chunk) {
            var output = chunk.toString().substr(0,20);
            log.debug("POST Body chunk:"+output+"...");
            reqBody.push(chunk);
        });

        req.on("end", function() {
            var reqBodyText = reqBody.join('');
            reqBody = [];
            sendResponse('');
        });

    } else if (req.method === 'GET') {
        log.debug('get:'+req.url);
        sendResponse("GET Request");
    }
};
