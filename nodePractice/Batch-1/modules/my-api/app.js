const express = require('express');
const router = require('./src/routes/api');
const app = new express();


// import security middleware
const rateLimit = require('express-rate-limit')
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const xss = require('xss-clean');



const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());

app.use(bodyParser.json());



// rate limit implementation
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,     // 15 minutes
	max: 100,                     // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true,        // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false,         // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter);



// database connection
const URI = "mongodb://127.0.0.1:27017/school";
const option = {user: '', pass: ''}
mongoose.connect(URI,option,(error) => {
	if(error){
		console.log(error)
	}
	else{
		console.log("Connection Success");
	}
})


app.use("/api/v1", router)

app.use("*", function(req,res){
    res.status(404).json({"status": "fail", "data": "undefined route"})
})

module.exports = app;