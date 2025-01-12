var express=require('express');
app=express();

app.get("/",function (req,res){
    res.send("hello express")
})


app.listen(8080,function (){
    console.log("App listening on 8080");
});