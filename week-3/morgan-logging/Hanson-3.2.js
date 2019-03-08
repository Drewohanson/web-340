/*
============================================
; Title:  hanson-3.2.js
; Author: Drew Hanson
; Date:   07 March 2019
; Description:logging
;===========================================
*/

//HEADER
const header = require('../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 3.2") + "\n");


var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

// Tell express the views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"));

// Tell express to use the EJS view engine
app.set("view engine", "ejs");

app.use(logger("dev"));

app.get("/", function (req, res){
    res.render("index", {
        message: "Testing morgan loader"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080")
});