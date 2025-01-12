var fs=require('fs');
var http=require('http');
var server= http.createServer((req,res)=>{

    if(req.url=="/"){

        fs.readFileSync('home.html','utf8')

    }
    else if(req.url=="/Content"){

    }
    else if(req.url=="/About"){

    }
    else if(req.url=="Terms"){

    }


})

server.listen(3000)
console.log("Server is running on port 3000");
