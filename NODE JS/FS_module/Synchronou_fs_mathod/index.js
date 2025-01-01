
var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/")
    {

      let error =  fs.writeFileSync('DemoSync.txt','welcome to sync');


        if(error)
            {
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.write("File Write Failed.");
                res.end();
            }
            else
            {
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File Write Success!\n");
                res.end()

            }



        // fs.writeFile("demo.txt","welcome to Node JS",function(error,data){
        //     if(error)
        //     {
        //         res.writeHead(404,{'Content-Type':'text/plain'});
        //         res.write("File Write Failed.");
        //         res.end();
        //     }
        //     else
        //     {
        //         res.writeHead(200,{'content-type':'text/html'});
        //         res.write("File Write Success!\n");
        //
        //     }
        //
        // })

        //asy method
        // fs.readFile('Home.html',function (error,data){
        //     res.writeHead(200,{'content-type':'text/html'})
        //   res.write(data);
        //   res.end();
        // })
        // let mydata = fs.readFileSync('Home.html',)
        // res.writeHead(200,{'content-type':'text/html'})
        // res.write(data);
        // res.end();
    }
});

server.listen(5152);
console.log("Server started on port 5151");
