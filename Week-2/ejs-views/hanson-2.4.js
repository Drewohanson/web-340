/*
============================================
; Title:  hanson-2.4.js
; Author: Drew Hanson
; Date:   28 February 2019
; Description:ejs.views
;===========================================
*/

//HEADER
const header = require('../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 2.4") + "\n");


//requiring needed modules
var http = require("http");
var express = require("express");
var path = require("path");

//creating express app
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function (request, response) {
    response.render("index", { //returns HTML 
        name:"Drew",
        lastName:"Hanson",
        address:"4856 legcy springs dr"
    });
});

http.createServer(app).listen(8080, function () { //start server
    console.log("Application started on port 8080.");
});

