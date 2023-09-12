let express = require("express");
let app = new express();


// post request with url query parameter
app.post("/query", function(req,res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName+" "+lastName);
})


// post request with header properties
app.post("/header", function(req,res){
    let userName = req.header("userName");
    let password = req.header("password");

    res.end(userName + " " + password);
})


// post request with json body
let bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/body", function(req,res){
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.end(jsonString);
})

app.listen(8080, function(){
    console.log("server run successful");
})