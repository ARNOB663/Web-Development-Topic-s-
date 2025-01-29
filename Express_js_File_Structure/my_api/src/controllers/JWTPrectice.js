
var jwt = require('jsonwebtoken');

exports.CreatToken = function (req, res) {
    let Payload = {
          exp:Math.floor(Date.now() / 1000) + (60 * 60),
        data:{Name:"Ali",city:123,admin:true}

    }
    let Token=jwt.sign(Payload,"SecretKey123");

    res.send(Token);
}

exports.DecodeToken = function (req, res) {
    let Token= req.headers['token-key']
    jwt.verify(Token,"SecretKey123",function(err,decoded){
       if(err){
        res.status(401).json({status:"invalid token",data:err});
       }
       else{
        res.status(200).json({status:"valid token",data:decoded});
       }

        
    });

}