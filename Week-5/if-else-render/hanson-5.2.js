/*
============================================
; Title:  hanson-Exercise-5.2.js
; Author: Drew Hanson
; Date:   22 March 2019
; Description:rendering array to HTML with ejs if/else
;===========================================
*/

// Console logs the header created previously
const header = require('../../hanson-header.js');
console.log(header.display("Drew" , "Hanson" , "Exercise-5.2"));

//Start Program
// determine variables
var express = require("express");
var http = require("http");
var path = require("path");

//set path
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

// name variables
var names = ["Pam", "Michael", "Jim", "Dwight", "Phylis", "Andy"];

//call function
app.get("/", function(req, res){
  res.render("index.ejs",{
    names:names
  });
});

//Call to Server
http.createServer(app).listen(8080, function(){
  console.log("We are live on 8080!")
});

//End program
