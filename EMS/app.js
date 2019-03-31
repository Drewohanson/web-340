/*
============================================
; Title:  EMS
; File Name: app.js
; Author: Drew Hanson
; Date:   23 March 2019
; Description: ems
;===========================================
*/

//HEADER
const header = require('../hanson-header.js');
console.log(header.display("Drew", "Hanson", "EMS") + "\n");

//PROGRAM START

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");


var app = express();


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(logger("short"));


app.get("/", function (request, response) {
    response.render("index", {

        title: "Ice Cream",
        message: "You are about to make the best ice cream in the world",
        headingTitle: "Nothing like this IceCream"

    });
});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//End Program