const express = require('express');
const router = require("./src/routes/api");

const app= new express();
app.use("/api/v1",router);//this is the middleware that will be used for all the routes that start with /api/v1

//Undefined route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",msg:"Not Found"});
})


module.exports = app;
