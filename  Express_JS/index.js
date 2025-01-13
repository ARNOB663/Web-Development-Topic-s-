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

//download
app.get("/five",function (req,res){
    res.download("./upload/abc.jpg")
})
//url redirect
app.get("/bd",function (req,res){
    res.redirect("http://localhost:8080/usa")//redirectd to usa
})

app.get("/usa",function (req,res){
  res.send("This is usa");
})

app.get("/six",function (req,res){
    //put Data in header
    // responce Header
    res.append("name","arnob")
    res.append("email","arnob229x@gmail.com")
    res.append("name","arnob229x@gmail.com")
    res.append("pass","123456789")

    res.status(201).end("hello world");
})
//responce
app.get("/seven",function (req,res){
    res.cookie('name','arnob')
    res.cookie('email','arnob229x@gmail.com')
    res.cookie('city','ctg')
    res.end("cookies set for arnob")
})

app.get("/eight",function (req,res){
   res.clearCookie('name');
   res.clearCookie('email');
    res.end("clear cookies")
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

//
app.listen(8080,function (){
    console.log("Server running on port 8080");
})
