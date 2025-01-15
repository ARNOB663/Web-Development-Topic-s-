var express = require('express');
var app= express();





// This application level middleware will be executed for every request to the app
// app.use(function (req,res,next) {
//     console.log("im application level middleware");
//     next()
// })

app.get('/',function(req,res){

    res.send("This is home page")
})


app.get('/contact',function(req,res){
    res.send("Contact me")
})


app.use('/about',function(req,res,next){
 
     console.log("im router level middleware for about section");
    next()
})

app.get('/about',function(req,res){
    res.send("About Me")
})

app.listen(5000,function(){
    console.log("Server is running on port 5000")
})