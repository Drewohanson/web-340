/*
============================================
; Title:  hanson-3.3.js
; Author: Drew Hanson
; Date:   09 March 2019
; Description:Advanced Routing
;===========================================
*/

//HEADER
const header = require('../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 3.3") + "\n");

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

// Tell express the views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"));

// Tell express to use the EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:employeeId", function(req, res){ 
    var employeeId = parseInt(req.params.employeeId, 10);
    res.render("index", {
        employeeId: employeeId
    })
});

// Creates server on 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080")
})