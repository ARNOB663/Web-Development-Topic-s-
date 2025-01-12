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

app.get('/three',function (req,res){
    res.status(401).end('Unauthorized');
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
