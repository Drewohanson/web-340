/*
============================================
; Title:  hanson-exercise-7.3.js
; Author: Drew Hanson
; Date:   6 Apriil 2019
; Description:  Chai test demonstration.
;===========================================
*/


//HEADER
const header = require('../../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "Exercise 7.3") + "\n");

//start program

//REQUIRING THE hanson-fruits.js FILE
var fruits = require("../hanson-fruits");

//REQUIRING chai
var chai = require("chai");
var assert = chai.assert;

//TEST
describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));

    });

});

//END PROGRAM