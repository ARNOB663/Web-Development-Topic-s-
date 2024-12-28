
var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/")
    {   //asy method
        fs.readFile('Home.html',function (error,data){
            res.writeHead(200,{'content-type':'text/html'})
          res.write(data);
          res.end();
        })
    }



});

server.listen(5151);
console.log("Server started on port 5151");
