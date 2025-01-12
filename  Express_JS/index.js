var express= require('express')
const res = require("express/lib/response");

app= express();

app.get("/",function (req,res){
    res.send("hello world");
})

app.post("/about",function(req,res){
    res.send("about");
})

app.put("/contact",function (req,res){
    res.send("contact");
})

app.delete("/term",function (req,res){
    res.send("term");
})

app.listen(8080,function (){
    console.log("Server running on port 8080");
})
