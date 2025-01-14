var express = require('express')
const {query} = require("express");

app=express();

app.get('/',function(req,res){
  //Get Request with URL Query
  //   let firstName = req.query.firstName;
  //   let lastName = req.query.lastName;
//working with get rq  header
    let firstName = req.header('firstName')
    let lastName = req.header('lastName')
    res.end(firstName+"  "+lastName);


})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})