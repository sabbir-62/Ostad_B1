let express = require("express");

app = express();


// simple get request
app.get("/", function(req,res){
    res.end("This is home page");
})


// get request with URL Query
app.get("/name", function(req,res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName +" "+ lastName);
})


// get request with header
app.get("/header", function(req,res){
    let firstName = req.header("firstName");
    let lastName = req.header("lastName");
    let connection = req.header("Connection");

    res.write(firstName +" "+ lastName + "\n");
    res.end(connection);
   
})


app.listen(5000, function(){
    console.log("Server run successful");
})