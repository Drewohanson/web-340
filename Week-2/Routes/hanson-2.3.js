/*
============================================
; Title:  hanson-2.3.js
; Author: Drew Hanson
; Date:   28 February 2019
; Description: Express
;===========================================
*/

//HEADER
const header = require('../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 2.3") + "\n");

var express = require("express");
var http = require("http");

var app = express();
//routing
app.get("/", function(req, resp) {
    res.end("Welcome to the homepage!");

});

app.get("/about", function(req, res) {
    res.end("Welcome to the about page!");

});

app.get("/contact", function(req, res) {
    res.end("Welcome to the contact page!");

});

app.use(function(req, res) {
    res.statusCode = 404;
    res.end("404!");

});

http.createServer(app).listen(8080, function(){
    console.log("aplliation started on port", 8080);
});