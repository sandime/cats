/**
 * Created by SHERRI on 3/21/15.
 */
    //simple server
    /*
var express = require('express');
var app = express();
var path = require ('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(1337);
console.log('1337 is the magic port');
*/

//mean book sod server
var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        return res.end();
    }
    console.log('Incoming request to ' + req.url);

    var i = 2;
    res.writeHead(200, {'Content-Type': 'text/plain'});

    setTimeout(function() {
        fs.readFile(__filename, {
            encoding: 'utf8'
        }, function (error, contents) {

            if (error) {
                console.error(error);
                return res.end();
            }

            console.log('sending response for ' + req.url);
            res.end(contents);
        });
    }, 5000);

    while(i--) {
        console.log('Loop value: '  + i + '\r');
    }
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
