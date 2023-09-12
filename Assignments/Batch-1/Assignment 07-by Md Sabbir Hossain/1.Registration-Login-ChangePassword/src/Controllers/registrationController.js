const profileModel = require("../models/profileModel");


// User Registration
exports.createProfile = (req, res) => {
    let reqBody = req.body;

    profileModel.create(reqBody, (err, data) => {
        if(err){
            res.status(404).json({status: 'Fail', data: err})
        }
        else{
            res.status(200).json({status: 'Success', data: data})
        }
    })
    
}


// User Login
exports.login = (req, res) => {

    let UserName = req.body['UserName'];
    let Password = req.body['Password'];
   
    profileModel.find({UserName: UserName, Password: Password}, (err, data) => {
        if(err){
            res.status(404).json({status: 'Fail', data: err})
        }
        else{
            if(data.length > 0){
                res.status(200).json({status: 'Success', data: data})
            }
            else{
                res.status(401).json({status: 'Unauthorized'})
            }
        }
    })
}


// Change Password
exports.changePassword = (req, res) => {

    let UserName = req.body['UserName'];
    let Password = req.body['Password'];
   
    profileModel.updateOne({"UserName": UserName}, {$set: {"Password": Password}}, (err, data) => {

        res.status(200).json({data: data})
    })
}