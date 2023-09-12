const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    id : Number,
    name : String,
    roll: {
        type: Number, 
        unique: true, 
        required: true,
        min : [6, 'min value 6 & max value 12, but the value is: {VALUE}'],
        max : [50, 'min value 6 & max value 12, but the value is: {VALUE}']
    },
    home: String,
    mobile:{
        type: String,
        validate: {
            validator: function(value){
                // Validation
                // if(value.length == 11){
                //     return true;
                // }
                // else{
                //     return false;
                // }

                // Regular expression validation
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
            },
            //message: "11 digit phone number required"
            message: "This is not Bangladeshi Mobile Number"
        }
    },
    remarks: {type: String, default: "No Remarks"}
},{versionKey: false})

const studentsModel = mongoose.model('students', dataSchema);

module.exports = studentsModel;