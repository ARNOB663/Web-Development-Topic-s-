var http=require("http");

var server=http.createServer(function (req,res){

if(req.url=="/"){

}
else if(req.url=="/about")
{

}
else if(req.url=="/contact"){
    
}

});

server.listen(5050);
console.log("Server started on port 5050");