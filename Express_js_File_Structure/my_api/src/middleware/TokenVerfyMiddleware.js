const jwt = require('jsonwebtoken');
module.exports =(req, res, next)=>{

    let Token= req.headers['token-key']
        jwt.verify(Token,"SecretKey123",function(err,decoded){
           if(err){
            res.status(401).json({status:"invalid token",data:err});
           }
           else{
          next();
           }
        });

}