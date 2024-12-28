
import http from 'http';
var fs=require('fs');
//var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/")
    {   //asy method
        fs.readFile('Home.html',function (error,data){

        })
    }
    


});

server.listen(5050);
console.log("Server started on port 5050");
