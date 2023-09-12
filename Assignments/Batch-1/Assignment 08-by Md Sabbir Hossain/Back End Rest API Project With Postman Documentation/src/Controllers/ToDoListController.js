const ToDoListModel = require("../models/ToDoListModel");



// Create ToDo
exports.createToDo = (req, res) => {

    let reqBody = req.body;
    let ToDoSubject = reqBody['ToDoSubject'];
    let ToDoDescription = reqBody['ToDoDescription'];
    let ToDoStatus = reqBody['ToDoStatus'];

    let UserName = req.headers['userName'];
    let ToDoCreateDate = Date.now();
    let ToDoUpdateDate = Date.now();

    let postBody = {
        UserName: UserName,
        ToDoSubject: ToDoSubject,
        ToDoDescription: ToDoDescription,
        ToDoStatus: ToDoStatus,
        ToDoCreateDate: ToDoCreateDate,
        ToDoUpdateDate: ToDoUpdateDate
    }

    ToDoListModel.create(postBody, (err, data) => {
        if(err){
            res.status(404).json({status: 'Fail', data: err})
        }
        else{
            res.status(200).json({status: 'Success', data: data})
        }
    })
    
}



// Select ToDo
exports.selectToDo = (req, res) => {

    let UserName = req.headers['userName'];
   
    ToDoListModel.find({UserName: UserName}, (err, data) => {
        if(err){
            res.status(404).json({status: 'Fail', data: err})
        }
        else{
            res.status(200).json({status: 'Success', data: data})
        }
    })
}



// Update ToDo
exports.updateToDo = (req, res) => {

    let ToDoSubject = req.body['ToDoSubject'];
    let ToDoDescription = req.body['ToDoDescription'];
    let id = req.body['_id'];
    let ToDoUpdateDate = Date.now();

    let postBody = {
        ToDoSubject : ToDoSubject,
        ToDoDescription : ToDoDescription,
        id : id,
        ToDoUpdateDate : ToDoUpdateDate
    }
   
    ToDoListModel.updateOne({_id: id}, {$set: postBody}, {upsert: true}, (err, data) => {
        if(err){
            res.status(404).json({status: 'Fail', data: err})
        }
        else{
            res.status(200).json({status: 'Success', data: data})
        }
    })
}



// Update Status ToDo
exports.updateStatusToDo = (req, res) => {

    let ToDoStatus = req.body['ToDoStatus'];
    let id = req.body['_id'];
    let ToDoUpdateDate = Date.now();

    let postBody = {
        ToDoStatus : ToDoStatus,
        ToDoUpdateDate : ToDoUpdateDate
    }
   
    ToDoListModel.updateOne({_id: id}, {$set: postBody}, {upsert: true}, (err, data) => {
        if(err){
            res.status(404).json({status: 'Fail', data: err})
        }
        else{
            res.status(200).json({status: 'Success', data: data})
        }
    })
}



// Remove ToDo
exports.removeToDo = (req,res) => {
    let id = req.body['_id'];

    ToDoListModel.remove({_id:id},(err, data) => {
        if(err){
            res.status(404).json({status: "Fail", data: err})
        }
        else{
            res.status(200).json({status: "Success", data: data})
        }
    })
}



// Select ToDo by Status
exports.selectToDoByStatus = (req, res) => {
    let reqBody = req.body;
    let UserName = req.headers['userName'];
    let ToDoStatus = reqBody['ToDoStatus'];

    ToDoListModel.find({UserName:UserName, ToDoStatus: ToDoStatus}, (err, data) => {
        if(err){
            res.status(404).json({status: "Fail", data: err})
        }
        else{
            res.status(200).json({status: "Success", data: data})
        }
    })
}



// Filter By Date Range
exports.selectToDoByDate = (req,res) => {
    let reqBody = req.body;
    let UserName = req.headers['userName'];
    let fromDate = reqBody['FromDate'];
    let toDate = reqBody['ToDate'];

    ToDoListModel.find({UserName: UserName, ToDoCreateDate: {$gte: new Date(fromDate), $lte: new Date(toDate)}}, (err, data) => {
        if(err){
            res.status(404).json({status: "Fail", data: err})
        }
        else{
            res.status(200).json({status: "Success", data: data})
        }
    })
}