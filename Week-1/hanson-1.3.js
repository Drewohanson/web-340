/*
============================================
; Title:  hanson-1.3.js
; Author: Drew Hanson
; Date:   21 February 2019
; Description: node modules
;===========================================
*/

// Console logs the header created in previous weeks
const header = require('../hanson-header.js');
console.log(header.display("Drew" , "Hanson" , "Assignment-1.3"));

// Begin program
var url = require('url');

var parsedURL = url.parse('https://www.w3schools.com/profile?name=hanson');

console.log(parsedURL.protocol);
console.log(parsedURL.host)
console.log(parsedURL.query);

//End Program

