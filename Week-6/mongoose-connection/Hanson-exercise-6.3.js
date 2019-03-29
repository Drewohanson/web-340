/*
============================================
; Title:  Exercise 6.3
; File Name: hanson-exercise-6.3.js
; Author: Drew Hanson
; Date:   28 March 2019
; Description: Mongoose connection
;===========================================
*/

//HEADER
const header = require('../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 6.3") + "\n");

//start program
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

//connect to mongoose database

var mongoDB = "mongodb+srv://web340:webdev340@ems-wrvq5.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//Express and morgan
var app = express();
app.use(logger('dev'));

//connect to server
http.createServer(app).listen(5000, function(){
    console.log("Application started on port 5000");
});

//END PROGRAM