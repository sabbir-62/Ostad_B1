var jwt = require('jsonwebtoken');


// Create JWT Token
exports.createToken = (req,res) => {

    let payLoad = {
        exp:Math.floor(Date.now() / 1000) + (30),
        data: {
            name: "Sabbir Hossain",
            city: "Dinajpur",
            admin: true
        }
    }
    let token = jwt.sign(payLoad, "secretKey123");
    res.send(token)
}



// Decode JWT Token
exports.decodeToken = (req,res) => {
    let token = req.headers['token-key'];

    jwt.verify(token, "secretKey123", (err, decoded) => {
        if(err){
            res.status(401).json({status: "Invalid Token", data: err})
        }
        else{
            res.status(200).json({status: "Success", data: decoded})
        }
    })
}