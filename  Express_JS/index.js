var express= require('express')
const res = require("express/lib/response");

app= express();
// res.send() => responce Body
//res.end() => responce ending point...

//simple String Responce
app.get("/one",function (req,res){
    //res.send("this is simple string responce");
    res.end('Welcome');
})

app.post("/two",function (req,res){
   // res.send("This is simple string responce");
    res.end('Welcome');
})
//Responce status code
app.get('/three',function (req,res){
    res.status(401).end('Unauthorized');
})
//JSON Response
app.get('/four',function (req,res){
    let myJson = [ {
     name:"John",
     email:"john@gmail.com",
     age:43,
       password:"123456"
    },
        {
            name:"Arnob",
            email:"arnob@gmail.com",
            age:16,
            password:"123456"
        },
        {
            name:"Arnob2",
            email:"arnob229x@gmail.com",
            age:18,
            password:"123456"
        }
    ]
    res.json(myJson);
})



// app.post("/about",function(req,res){
//     res.send("about");
// })
// app.put("/contact",function (req,res){
//     res.send("contact");
// })
// app.delete("/term",function (req,res){
//     res.send("term");
// })
app.listen(8080,function (){
    console.log("Server running on port 8080");
})
