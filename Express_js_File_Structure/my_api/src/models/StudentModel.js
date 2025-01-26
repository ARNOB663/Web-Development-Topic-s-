const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
  Name: String,
  // Custom error message Validation
  Roll: {
    type: Number,
    min: [6, "Roll number must be at least 6, but you have entered = {VALUE}"], // Custom error message Validation for min number of digits
    max: [12, "Roll number must be under 12 digits, but you have entered = {VALUE}"], // Custom error message Validation for max number of digits
  },
  Class: String,
  Remarks: { type: String, default: "Not Available" }, // default value set
}, { versionKey: false });

const StudentsModel = mongoose.model('students', DataSchema);

module.exports = StudentsModel;