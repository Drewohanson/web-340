/*
============================================
; Title:  EMS
; File Name: app.js
; Author: Drew Hanson
; Date:   06 April 2019 (updated)
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
var mongoose = require("mongoose");
var Employee = require('./models/employee');

//mlab and mongoose connection
var mongoDB = "mongodb+srv://Drewohanson:<password>@cluster0-7zbdb.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

//application
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.use(logger("short"));

//model
var employee = new Employee({
  firstName: "Drew",
  lastName: "Hanson "
})

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page"
  });
});

//create server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
//End Program