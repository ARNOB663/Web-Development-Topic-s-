
var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/")
    {

        fs.writeFile(demo.txt,"hello world",function(err,data){
            if(error)
            {
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.write(data);
                res.end("error");
            }
            else
            {

            }

        })

        //asy method
        // fs.readFile('Home.html',function (error,data){
        //     res.writeHead(200,{'content-type':'text/html'})
        //   res.write(data);
        //   res.end();
        // })
        let mydata = fs.readFileSync('Home.html',)
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data);
        res.end();
    }
});

server.listen(5151);
console.log("Server started on port 5151");