let express = require("express");
let app = new express();


// simple post request
app.post("/", function(req,res){
    res.end("welcome");
})


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

app.listen(8080, function(){
    console.log("server run successful");
})