/*
============================================
; Title:  EMS
; File Name: employee.js
; Author: Drew Hanson
; Date:   06 April 2019
; Description: mongoose and EMS
;===========================================
*/

//HEADER
const header = require('../../hanson-header.js');
console.log(header.display("Drew", "Hanson", "exercise-7.4") + "\n");

//PROGRAM START

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Fruit Schema
let employeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', employeeSchema);

// expose the employee to calling files

module.exports = employee;
//END PROGRAM