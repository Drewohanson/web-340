/*
============================================
; Title:  hanson-exercise4.2.js
; Author: Drew Hanson
; Date:   16 March 2019
; Description: JSON API
;===========================================
*/

// header
const header = require('../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 4.2"));

// start program
var express = require("express");
var http = require("http");
var app = express();

// requests
app.get("/customer/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({
        firstName: "Drew",
        lastName: "Hanson",
        zipCode: "84096",
        employeeId: id
    });

});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");
});
// end program