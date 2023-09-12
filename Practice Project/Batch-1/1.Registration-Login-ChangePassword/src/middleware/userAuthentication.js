const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    let token = req.headers['token-key'];

    jwt.verify(token, 'SecretKey12345', (err, decode) => {
        if(err){
            res.status(401).json({status: 'Unauthorized'})
        }
        else{
            let userName = decode['data']['UserName'];
            req.headers.userName = userName;
            next();
        }
    })
}