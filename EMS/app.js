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
var Employee = require('./models/employee');
var helmet = require("helmet");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");


// setup csrf protection
var csrfProtection = csrf({cookie: true});

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

//use statements
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

//model
var Employee = new Employee({
  firstName: "Drew",
  lastName: "Hanson "
})

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    message: "XSS Prevention Example"
  });
});

app.get('/new', function(req, res) {
  res.render('new', {
    title: 'New Entry',
    message: "New Employee Entry Page"
  });
})

app.post("/process", function(req,res) {
  console.log(req.body.txtName);
  res.redirect("/");
});
//create server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
//End Program