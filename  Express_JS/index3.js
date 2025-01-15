var express = require('express');
var app= express();

app.get('/',function(){

    res.send("This is home page")
})
app.get('/contact',function(req,res){
    res.send("Contact me")
})
app.get('/about',function(req,res){
    res.send("About Me")
})
