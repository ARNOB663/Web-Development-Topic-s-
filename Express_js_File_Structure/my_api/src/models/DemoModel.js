const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
 Name:String,
 Roll:Number,
 Class:String,
    Remarks:String,
    Adult:Boolean,
    Comments:[],
    details:{}


})