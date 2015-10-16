//var http = require("http");

var express = require('express');
var app = express();
var http = require('http').Server(app);

http.listen(32771, "0.0.0.0");


//function onRequest(request, response) {
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}

//http.createServer(onRequest).listen(8888);
