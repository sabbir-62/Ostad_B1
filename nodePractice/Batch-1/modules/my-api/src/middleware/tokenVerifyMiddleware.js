var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.headers['token-key'];

    jwt.verify(token, "secretKey123", (err, decoded) => {
        if(err){
            res.status(401).json({status: "Invalid Token", data: err})
        }
        else{
           next();
        }
    })
}