/*
============================================
; Title:  hanson-1.5.js
; Author: Drew Hanson
; Date:   21 February 2019
; Description: hello world
;===========================================
*/

// Console logs the header created in previous weeks
const header = require('../hanson-header.js');
console.log(header.display("Drew" , "Hanson" , "Assignment-1.5"));

// Variable declaration:
var http = require("http");

function processRequest(req, res){
  var body = "Hi Planet! Just seeing if this will work right";
  var contentLength = body.length;
  res.writeHead(200, {
    "Content-Length": contentLength,
    "Content-Type": "text/plain"
  })
  res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);
