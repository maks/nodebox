/*jshint node:true, es5:true, globalstrict:true,  sub:true */


"use strict";

var log = require('mkslogger').logger(module),
    http = require('http'),
    util = require('util'),
    fs = require('fs'),
    path = require('path');

http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
}).listen(process.env.PORT, process.env.INTERFACE); 
console.log('Server running at http://'+process.env.INTERFACE+':'+process.env.PORT);

