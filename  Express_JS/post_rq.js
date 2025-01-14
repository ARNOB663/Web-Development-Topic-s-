var express=require('express');
app=express();
//This is
app.post('/',function (req,res){

    1
    //res.send("This is simple post request");
   //Post Request With URL Query
     let firstName = req.query.firstName;
    let LastName = req.query.lastName;

    //Post  RQ with header properties

    let username = req.header('username')
    let password = req.header('password')

   // res.send({firstName:firstName,LastName:LastName});

    res.send("User Name :"+ username +" password "+ password)

})

app.listen(8000,function (){
    console.log("Express server listening on 8000");


});