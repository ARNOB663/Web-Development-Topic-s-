var express=require('express');
var bodyPerser = require('body-parser');
app=express();
app.use(bodyPerser.json());


app.post('/',function (req,res){
    let JSONData = req.body;
    let name= JSONData.name;
    let city= JSONData.city;
    let JESONString = JSON.stringify(JSONData);
    res.send(name+" "+city);

})


app.listen(8000,function (){
    console.log("Express server listening on 8000");


});