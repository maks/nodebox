/*jshint node:true, es5:true, globalstrict:true,  sub:true */


"use strict";

var log = require('mkslogger').logger(module),
    util = require('util'),
    fs = require('fs'),
    path = require('path'),
    express = require('express'),
    app = express.createServer();

app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
app.use(express.bodyParser());
app.use(express.static('client'));

log.info("serving static from:"+ 'client');


app.get('/', function(req, res, next){
    res.redirect('/index.html');
});

app.get('/api', function(req, res, next){
    //TODO
    next();
});

app.listen(process.env.PORT);

log.info("mkedit listening on port:"+process.env.PORT);
