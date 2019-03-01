/*
============================================
; Title:  hanson-2.2.js
; Author: Drew Hanson
; Date:   28 February 2019
; Description: Hello World
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("Drew, "Hanson", "Exercise 2.2") + "\n");

//Variable declaration
var express =require('express');
var http =require('http');

var app= express();

app.use(function(req, res)
{
    console.log("in comes a request", req.url)
    res.end('hello world\n');
})

http.createServer(app).listen(8080, function(){
    console.log("console started on port", 8080);
});