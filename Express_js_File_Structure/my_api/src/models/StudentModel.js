const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({

Name:String,
Roll:String,
Class:String,
Remarks:{type:String,default:"Not Available"},

},{versionKey:false});

const StudentsModel = mongoose.model('students',DataSchema);

module.exports = StudentsModel;