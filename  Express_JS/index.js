var express= require('express')

app= express()


app.get("/",function (req,res){
    res.send("hello world")
})

app.listen(8080,function (){
    console.log("Server running on port 8080")
})