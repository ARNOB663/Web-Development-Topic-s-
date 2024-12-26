var http = require('http');

var server = http.createServer(function (req, res){

res.end("hello world");

})

server.listen(5050);
console.log("server is running")