const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
  Name: String,
  // Custom error message Validation
  Roll: {
    type: String,
    // min: [6, "Roll number must be at least 6, but you have entered = {VALUE}"], // Custom error message Validation for min number of digits
    // max: [12, "Roll number must be under 12 digits, but you have entered = {VALUE}"], // Custom error message Validation for max number of digits
  },
  // Mobile2:{
  //   type: String,
  //   validate:{
  //     validator: function(value){
  //       return /^\d{11}$/.test(value); // Regular expression for 11 digits
  //     },
  //     message: "Mobile number must be exactly 11 digits"
  //   }

  // },
  Class: String,
  // Mobile: {
  //   type: String,
  //   validate: {
  //     validator: function(value) {
  //      if (value.length === 11) {
  //         return true;
  //       } else {
  //         return false;
  //     }
  //   },
  //   message: "Mobile number must be exactly 11 digits"
  // }
  // },
  // Remarks: { type: String, default: "Not Available" }, // default value set
},
 {versionKey:false });

const StudentsModel = mongoose.model('students', DataSchema);

module.exports = StudentsModel;