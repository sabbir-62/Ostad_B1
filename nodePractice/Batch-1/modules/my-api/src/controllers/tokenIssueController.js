var jwt = require('jsonwebtoken');


// Create JWT Token
exports.tokenIssue = (req,res) => {

    let payLoad = {
        exp:Math.floor(Date.now() / 1000) + (60*60),
        data: {
            name: "Sabbir Hossain",
            city: "Dinajpur",
            admin: true
        }
    }
    let token = jwt.sign(payLoad, "secretKey123");
    res.send(token)
}
