const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    //Schema Types: and default values
 Name:String,
 Roll:{type:Number,default:null},
 Class:{type:String,default:"N/A"},
    Remarks:{type:String,default:"Good"},
    Adult:Boolean,
    Comments:[],
    details:{},
    dob:{type: Date, default: Date.now},
})
const DemoModel =  mongoose.model('students',DataSchema);
