#!/bin/sh

export PORT=8099
cd /var/www/mkedit
node lib/server.js 2>>  /var/log/nodejs/mkedit-error.log 1>> /var/log/nodejs/mkedit.log
