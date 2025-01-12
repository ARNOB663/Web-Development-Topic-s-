var express= require('express')
const res = require("express/lib/response");

app= express();

app.get("/",function (req,res){
    res.send("hello world");
})

app.get("/about",function(req,res){
    res.send("about");
})

app.listen(8080,function (){
    console.log("Server running on port 8080");
})