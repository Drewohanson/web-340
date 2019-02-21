/*
============================================
; Title:  hanson-1.3.js
; Author: Drew Hanson
; Date:   20 February 2019
; Description: creates cell phone objects
;===========================================
*/

// Console logs the header created in previous weeks
const header = require('../hanson-header.js');
console.log(header.display("Drew" , "Hanson" , "Assignment-1.3"));

var url = require('url');

var parsedURL = url.parse('https://www.example.com/profile7name=smith');

console.log(parsedURL.protocol);
console.log(parsedURL.host)