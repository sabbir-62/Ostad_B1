const studentsModel = require('../models/studentsModel');


// Create
exports.insertStudent = (req, res) => {
    let reqBody = req.body;

    studentsModel.create(reqBody, (err, data) => {
        if(err){
            res.status(400).json({status:'fail', data: err})
        }
        else{
            res.status(201).json({status:'success', data: data})
        }
    })
}


// Read
exports.readStudent = (req, res) => {
    
    let query = {};
    let projection = "name roll";
    
    studentsModel.find(query,projection,(err, data) => {
        if(err){
            res.status(400).json({status:'fail', data : err})
        }
        else{
            res.status(200).json({status: 'success', data: data});
        }
    })
}


// Update
exports.updateStudent = (req, res) => {
    let id = req.params.id;
    let query = {id : id};
    let reqBody = req.body;

    studentsModel.updateOne(query, reqBody, (err, data) => {
        if(err){
            res.status(400).json({status:'fail', data : err})
        }
        else{
            res.status(200).json({status: 'success', data: data});
        }
    })
}


// Delete Document
exports.deleteStudent = (req, res) => {
    let id = req.params.id;
    let query = {id : id};

    studentsModel.deleteOne(query, (err, data) => {
        if(err){
            res.status(400).json({status:'fail', data : err})
        }
        else{
            res.status(200).json({status: 'success', data: data});
        }
    })
}