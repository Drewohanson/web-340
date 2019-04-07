/*
============================================
; Title:  Exercise 7.2
; File Name: Hanson-exercise-7.2.js
; Author: Drew Hanson
; Date:   06 April 2019
; Description: TDD in action
;===========================================
*/

//HEADER
const header = require('../../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 7.2") + "\n");

//start program
var assert = require("assert");
describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });

});

Run the test,
        npm test,
Passed function,
function getFruits(str) {
    return str.split(',');
   }

   module.exports = getFruits;
   //end program