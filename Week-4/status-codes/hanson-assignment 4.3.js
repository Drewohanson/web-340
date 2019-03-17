/*
============================================
; Title:  hanson-assignment 4.3.js
; Author: Drew Hanson
; Date:   16 March 2019
; Description: Status Codes
;===========================================
*/

// header
const header = require('../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Assignment 4.3"));

//start program
var express = require("express");
var http = require("http");
var app = express();

//404 status code
app.get("/not-found", function(request, response) {
    response.status(404);
    response.json({
        error: "Page not found."
    })

});
//200 status code
app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message: "Page loaded as it should."
    })

});
//501 status code
app.get("/not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "Page not irecognized."
    })

});

http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080!");

});
// end program