const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name: {type: String},
    roll: {type: Number},
    class: {type: String},
    adult: {type: Boolean},
    comment: [],
    details: {},
    dob: {type: Date}
})