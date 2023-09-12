const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    UserName: {type: String},
    ToDoSubject: {type: String},
    ToDoDescription: {type: String},
    ToDoStatus: {type: String},
    ToDoCreateDate: {type: Date},
    ToDoUpdateDate: {type: Date}
   
},{versionKey: false});


 const ToDoListModel = mongoose.model('lists', dataSchema);

 module.exports = ToDoListModel;