/*
============================================
; Title:  hanson-Exercise-5.3.js
; Author: Drew Hanson
; Date:   22 March 2019
; Description:PUG templates
;===========================================
*/

// Console logs the header created previously
const header = require('../../hanson-header.js');
console.log(header.display("Drew" , "Hanson" , "Exercise-5.3"));

//Start Program
//expressing variables
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
var app = express();

//app directory setup
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", function(request, response) {

//rendering response
    response.render("index", {
        message: "Welcome to PUG!"
    });
});

//send to server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});