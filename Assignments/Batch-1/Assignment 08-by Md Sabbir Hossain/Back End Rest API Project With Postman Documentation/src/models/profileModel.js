const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    FirstName: {type: String},
    LastName: {type: String},
    Email : {type: String},
    Mobile: {type: String},
    city: {type: String},
    UserName: {type: String},
    Password: {type: String}
},{versionKey: false});


 const profileModel = mongoose.model('profiles', dataSchema);

 module.exports = profileModel;