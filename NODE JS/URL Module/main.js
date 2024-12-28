var http=require("http")
var URL=require('url');

var server = http.createServer(function(req,res){
    var myURL="http://rabbil.com/blog.html?year=2020&month=july";
     var myURLObj = URL.parse(myURL,true);
     var myHost=myURLObj.host;
     var myPathName=myURLObj.path;
     var mySearchName=myURLObj.search;
})

server.listen(5050);
console.log("Server running on port 5050");