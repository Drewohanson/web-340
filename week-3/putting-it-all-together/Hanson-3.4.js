/*
============================================
; Title:  hanson-3.4.js
; Author: Drew Hanson
; Date:   09 March 2019
; Description:Putting it all together
;===========================================
*/

//HEADER
const header = require('../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 3.4") + "\n");

//START PROGRAM
//adding dependencies
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

//directing express to files
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//setting short logger
app.use(logger("short"));

//defining routes
app.get("/", function(request, response) {
    response.render("index", {
        message: "home page"
    });

});
app.get("/about", function(request, response) {
    response.render("about", {
        message: "about page"
   });

});
app.get("/contact", function(request, response) {
    response.render("contact", {
        message: "contact page"
    })

});
app.get("/products", function(request, response) {
   response.render("products", {
       message: "products page"
   });

});

//starting server
http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080.");

});
// END PROGRAM