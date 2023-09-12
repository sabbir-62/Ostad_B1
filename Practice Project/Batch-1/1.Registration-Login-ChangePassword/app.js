// Basic Configuration(import)
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');



// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');



// Database 
const mongoose = require('mongoose');



// Security Middleware Implement
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors());



// Body-Parser Implement
app.use(bodyParser.json());



// Request Rate Limit
const limiter = rateLimit({
    window: 15*60*1000,     //15 minutes
    max: 3000
})
app.use(limiter);



// MongoDB Database Connection
let URI = "mongodb://localhost:27017/ToDo";
let OPTION = {
    user: '',
    pass: '',
    autoIndex: true
}
mongoose.connect(URI, OPTION, (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Connection Success");
    }
})



// Routing Implement
app.use('/api/v1', router);



// Undefined Routing
app.use('*', (req, res) => {
    res.status(404).json({status: "Fail", data: "Not Found"});
})



// Export
module.exports = app;