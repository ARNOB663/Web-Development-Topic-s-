var express = require('express')

app=express();


app.get('/',function(req,res){

    res.end('this is simple get rq')
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})