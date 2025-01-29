var jwt = require('jsonwebtoken');

exports.CreatToken = function (req, res) {


    let Payload = {
          exp:Math.floor(Date.now() / 1000) + (60 * 60),
        data:{Name:"Ali",city:123,admin:true}
   

    }
    let Token=jwt.sign(Payload,"SecretKey123");

    res.send(Token);
}