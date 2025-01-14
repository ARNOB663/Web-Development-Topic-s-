var express=require('express');
app=express();

app.post('/',function (req,res){
    res.send("This is simple post request");
})



app.listen(8000,function (){
    console.log("Express server listening on 8000");


});